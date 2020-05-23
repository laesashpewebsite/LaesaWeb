import React from "react";
import { Fade } from "react-slideshow-image";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { fontWeight, fontSize } from "@material-ui/system";

const fadeProperties = {
  duration: 500000,
  transitionDuration: 500,
  indicators: true,
  infinite: true,
  pauseOnHover: true
};

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
  text: {
    minWidth: "50%",
    color: "Black",
    fontWeight: "700",
    fontSize: "medium"
  }
}));
export default function Graduates(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Fade {...fadeProperties}>
        {props.tileData.map(dl => (
          <Card className={classes.root} style={dl.styles} key={dl.id}>
            <div className="Pics">
              <CardMedia
                className={classes.media}
                image={dl.Picture}
                title={dl.alts}
              />
            </div>
            <CardHeader
              component="h2"
              titleTypographyProps={{ variant: "h2" }}
              title={dl.Name}
              subheader={dl.Title}
              subheaderTypographyProps={{ variant: "h6", color: "inherit" }}
            />
            <CardContent>
              <Typography
                className={classes.text}
                variant="body2"
                component="p"
              >
                <p>What does LAESA-SHPE Mean to you?</p>
                <br />
                {dl.Bio}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Fade>
    </React.Fragment>
  );
}
