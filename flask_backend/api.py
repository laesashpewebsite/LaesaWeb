import os
from flask import Flask, request, jsonify, make_response
import uuid
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import datetime
import jwt
from functools import wraps

app = Flask(__name__)

app.config['SECRET_KEY'] = 'thisissceret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///laesa.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class User (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(50), unique=True)
    email = db.Column(db.String(50))
    name = db.Column(db.String(50))
    password = db.Column(db.String(80))
    admin = db.Column(db.Boolean)
    points = db.Column(db.Integer)
    position = db.Column(db.String(50))
    bio = db.Column(db.String(300))


class Events (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    category = db.Column(db.String(50))
    points_available = db.Column(db.Integer)
    requests = db.relationship(
        'Points_Requests', backref='author', lazy='dynamic')


class Points_Requests (db.Model):
    id = db.Column(db.Integer, primary_key=True)

    description = db.Column(db.String(50))
    points_requested = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey('events.id'))


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            return jsonify({'message': 'Token is missing!'}), 401

        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
            current_user = User.query.filter_by(
                public_id=data['public_id']).first()
        except:
            return jsonify({'message': 'Token is invalid!'}), 401

        return f(current_user, *args, **kwargs)

    return decorated


@app.route('/user', methods=['GET'])
@token_required
def get_all_users(current_user):

    # if not current_user.admin:
    #     return jsonify({'message': 'Cannot perform that function!'})

    users = User.query.all()

    output = []

    for user in users:
        user_data = {}
        user_data['public_id'] = user.public_id
        user_data['name'] = user.name
        user_data['password'] = user.password
        user_data['admin'] = user.admin
        user_data['points'] = user.points
        user_data['position'] = user.position
        output.append(user_data)

    return jsonify({'users': output})


@app.route('/user/<public_id>', methods=['GET'])
def get_one_user(public_id):

    user = User.query.filter_by(public_id=public_id).first()

    if not user:
        return jsonify({'message': 'No user found!'})

    user_data = {}
    user_data['public_id'] = user.public_id
    user_data['email'] = user.email
    user_data['name'] = user.name
    user_data['password'] = user.password
    user_data['admin'] = user.admin
    user_data['points'] = user.points
    user_data['position'] = user.position

    return jsonify({'user': user_data})


@app.route('/user', methods=['POST'])
def create_user():

    data = request.get_json()

    hashed_password = generate_password_hash(data['password'], method='sha256')

    new_user = User(public_id=str(uuid.uuid4()), email=data['email'],
                    name=data['name'], password=hashed_password, admin=False, points=0, position='Not Verified')
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'New user created! \n Public ID is ' + new_user.public_id})


@app.route('/user/<public_id>', methods=['PUT'])
def verify_user(public_id):

    user = User.query.filter_by(public_id=public_id).first()

    if not user:
        return jsonify({'message': 'No user found!'})

    data = request.get_json()
    if(data['position'] == 'Secretary'):
        user.admin = True

    user.position = data['position']
    db.session.commit()

    return jsonify({'message': 'The user has been promoted!'})


@app.route('/user/<public_id>', methods=['PUT'])
def promote_user(public_id):

    user = User.query.filter_by(public_id=public_id).first()

    if not user:
        return jsonify({'message': 'No user found!'})

    user.admin = True
    db.session.commit()

    return jsonify({'message': 'The user has been promoted!'})


@app.route('/user/<public_id>', methods=['DELETE'])
@token_required
def delete_user(current_user, public_id):
    if not current_user.admin:
        return jsonify({'message': 'Cannot perform that function!'})

    user = User.query.filter_by(public_id=public_id).first()

    if not user:
        return jsonify({'message': 'No user found!'})

    db.session.delete(user)
    db.session.commit()

    return jsonify({'message': 'The user has been deleted!'})


@app.route('/login')
def login():
    auth = request.authorization

    if not auth or not auth.username or not auth.password:
        return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required!"'})

    user = User.query.filter_by(email=auth.username).first()

    if not user:
        return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required!"'})

    if check_password_hash(user.password, auth.password):
        token = jwt.encode({'public_id': user.public_id, 'exp': datetime.datetime.utcnow(
        ) + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])

        return jsonify({'token': token.decode('UTF-8')})

    return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required!"'})


@app.route('/event', methods=['POST'])
def create_events():

    data = request.get_json()

    new_event = Events(member_name=data['member_name'],
                       category=data['category'], points_available=data['points_available'])

    db.session.add(new_event)
    db.session.commit()

    return jsonify({'message': 'New event created! \n Public ID is ' + str(new_event.id)})


@app.route('/event', methods=['GET'])
def get_all_events():

    # if not current_user.admin:
    #     return jsonify({'message': 'Cannot perform that function!'})

    events = Events.query.all()

    output = []

    for user in events:
        event_data = {}
        event_data['id'] = user.id
        event_data['memeber_name'] = user.member_name
        event_data['category'] = user.category
        event_data['points_available'] = user.points_available
        output.append(event_data)

    return jsonify({'events': output})


@app.route('/event/<id>', methods=['POST'])
def create_request(id):

    data = request.get_json()
    event = Events.query.get(id)
    p_request = Points_Requests(
        description=data['description'], points_requested=data['points_requested'], author=event)

    db.session.add(p_request)
    db.session.commit()

    return jsonify({'message': 'New request created! \n Public ID is ' + str(p_request.id)})


@app.route('/event/<id>', methods=['GET'])
def get_all_event_request(id):

    # if not current_user.admin:
    #     return jsonify({'message': 'Cannot perform that function!'})

    event = Events.query.get(id)
    requests = event.requests.all()

    output = []

    for user in requests:
        event_data = {}
        event_data['id'] = user.id
        event_data['description'] = user.description
        event_data['points_requested'] = user.points_requested
        event_data['Event Category'] = user.author.category
        output.append(event_data)

    return jsonify({'Requests': output})


if __name__ == '_main_':
    app.run(debug=True)
