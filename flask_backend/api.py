import os
from flask import Flask

from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SECRET_KEY'] = 'thisissceret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////flask_backend/todo.db'

db = SQLAlchemy(app)


class User (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(50), unique=True)
    name = db.Column(db.String(50))
    password = db.Column(db.String(80))
    admin = db.Column(db.Boolean)


if __name__ == '_main_':
    app.run(debug=True)
