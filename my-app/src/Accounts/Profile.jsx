import React from "react";

// https://material-ui.com/components/cards/
// taken from the link above
// http://jquense.github.io/react-big-calendar/examples/index.html#prop-getNow
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

// import "./CardProfiles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "none",
    // width: "50%",
    backgroundColor: "#72a9be",
    textAlign: "center",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "20px",
    paddingBottom: "30px",
    // border: "solid"
    // maxheight: "760px"
  },
  //css for the pictures
  media: {
    objectFit: "cover",
    height: "150px",
    width: "190px",
    // paddingLeft:"100px",
    paddingBottom: "30px",
    // paddingTop: "30px",
    borderRadius: "50%",
    // border:"solid"
    // objectPosition: "10px 30%",
    // margin: "auto"
    float: "left",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  text: {
    color: "black",
    clear: "both",
    padding:"15px",
    textAlign:"left"
  },
  title: {
    width: "60%",
    float: "left",
  },
  lists:{
    textAlign:"left",
    listStyle: "none"

  }

}));

export default function Profiles(props) {
  const classes = useStyles();
  return props.Members.map((members) => (
    <Card className={classes.root} style={members.styles} key={members.id}>
      {/* GETS THE PICTURE TO ADD TO THE PFP CAN PROB EDIT THIS USING CLASSNAME */}
      <div className={classes.media}>
        <CardMedia
          className={classes.media}
          image={members.Picture}
          title={members.alts}
        />
        {/* <Typography className={classes.text} variant="h5">Points:{members.Points}</Typography> */}
      </div>
      <div className={classes.title}>
        <CardHeader
          // component="h2"
          //   className={classes.title}
          titleTypographyProps={{ variant: "h3" }}
          title={members.Name}
          subheader={members.Title}
          subheaderTypographyProps={{ variant: "h6", color: "inherit" }}
        />
        <CardContent>
          <Typography
            className={classes.text}
            style={members.newColor}
            variant="h5"
          >
            {/* {member?s.Bio}?  */}
            <ul className={classes.lists}>
              <li>Major:{members.Major}</li>
              <li></li>

            </ul>
          </Typography>
        </CardContent>
      </div>
    </Card>
  ));
}
