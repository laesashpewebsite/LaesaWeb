// https://material-ui.com/components/cards/
// taken from the link above
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { border } from "@material-ui/system";
import "./CardProfiles.css";

// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import CardActions from "@material-ui/core/CardActions";
// import clsx from "clsx";

//css styles modification for CardProfiles
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 700,
    margin: "auto",
    border: "none",
    solid: "none",
    marginBottom: "20px",
    backgroundColor: "#72a9be",
    textAlign: "center"
  },
  //css for the pictures
  media: {
    objectFit: "contain",
    paddingTop: "100%",
    borderRadius: "50%",
    objectPosition: "auto",
    marginBottom: "50px"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function CardProfiles(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // COMMENTS
  // how can I change the array that is being called here??
  // dl is the name of the array that is being run through
  // this is calling from the DirectorsList Array
  return props.DirectorListName.map(dl => (
    <Card className={classes.root}>
      {/* GETS THE PICTURE TO ADD TO THE PFP CAN PROB EDIT THIS USING CLASSNAME */}
      <div className="Pics">
        <CardMedia className={classes.media} image={dl.Picture} title="hello" />
      </div>
      <CardHeader
        className="title"
        //adds an "Avatar icon on the side of the "
        // avatar={ }
        // action={}

        title={dl.Name}
        // COMMENT
        // gets the value of "Name" from directorslist
        // subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {/* INFO FOR BIO IS BEING CALLED HERE */}
          {dl.Bio}
        </Typography>
      </CardContent>

      {/* COLLAPSE NOT NEEDED RIGH NOW BUT IT HELPS TO ADD MORE CONTENT */}
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        {/* <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          </Typography>
        </CardContent> }
      </Collapse> 
      */}
    </Card>
  ));
}
