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

import "./CardProfiles.css";

const useStyles = makeStyles(theme => ({
  root: {
    border: "none",
    borderRadius: 0,
    Width: "100%",
    backgroundColor: "#72a9be",
    textAlign: "center",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "20px",
    paddingBottom: "30px"
    // border: "solid"
    // maxheight: "760px"
  },
  //css for the pictures
  media: {
    objectFit: "cover",
    height: "350px",
    width: "290px",
    paddingBottom: "30px",
    // paddingTop: "30px",
    borderRadius: "50%",
    objectPosition: "10px 30%",
    margin: "auto"
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
  },
  text: {
    paddingLeft: "60px",
    paddingRight: "60px"
  }
}));

export default function CardProfiles(props) {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  // COMMENTS
  // how can I change the array that is being called here??
  // dl is the name of the array that is being run through
  // this is calling from the DirectorsList Array
  return props.DirectorListName.map(dl => (
    <Card className={classes.root} style={dl.styles} key={dl.id}>
      {/* GETS THE PICTURE TO ADD TO THE PFP CAN PROB EDIT THIS USING CLASSNAME */}
      <div className="Pics">
        <CardMedia
          className={classes.media}
          image={dl.Picture}
          title={dl.alts}
        />
      </div>
      <CardHeader
        // color="textPrimary"
        component="h2"
        titleTypographyProps={{ variant: "h2" }}
        title={dl.Name}
        subheader={dl.Title} ///add to array "subheaders"
        subheaderTypographyProps={{ variant: "h6", color: "inherit" }}
      />
      <CardContent>
        <Typography className={classes.text} variant="body2" component="p">
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
