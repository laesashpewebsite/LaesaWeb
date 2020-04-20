import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import PCED_Director from "./pictures/Arelis.png";
import PCED_Director2 from "./pictures/Derwick.jpg";
import PCED_Group_25 from "./pictures/PCED-GROUP1.JPG";

// FUNCTION NOT BEING USED
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              26th Pre College Engineering Day
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              One of LAESA-SHPE's many big event hosted in City College of New
              York
            </Typography>
          </Container>
        </div>
        <Card>
          <CardMedia
            component="img"
            alt="25th PCED GROUP PIC"
            height="400"
            image={PCED_Group_25}
            title="25th PCED GROUP PIC"
          />
        </Card>
        /br
        <Card>
          <Typography variant="h3" align="center" gutterBottom>
            Our mission
          </Typography>
          <Typography>
            "The goal of PCED is to expose the younger Latino community to STEM
            related careers (Science, Technology, Engineering and Mathematics)
            while obtaining real-life project experience, and developing
            team-building and leadership skills"
          </Typography>
        </Card>
        <div className={classes.heroContent}>
          <Typography variant="h3" align="center" gutterBottom>
            25th PCED
          </Typography>

          <Grid container spacing={5}>
            <Grid container item xs={4} spacing={0}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt=" fill out "
                    height="300"
                    image={DirectorList[0].Picture}
                    title=" fill out "
                  />
                </CardActionArea>
              </Card>
            </Grid>

            <Grid container item xs={4} spacing={0}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt=" fill out "
                    height="300"
                    image={DirectorList[0].Picture}
                    title=" fill out "
                  />
                </CardActionArea>
              </Card>
            </Grid>

            <Grid container item xs={4} spacing={0}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt=" fill out "
                    height="300"
                    image={DirectorList[0].Picture}
                    title=" fill out "
                  />
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div></div>
        <div>
          <Typography variant="h3" align="center" gutterBottom>
            Our PCED Directors!
          </Typography>

          <Grid container spacing={3}>
            // co-directos information, such as name, degree, something they
            would like to share
            <Grid container item xs={6} spacing={0}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="PCED Director's Profile Picture"
                    height="600"
                    image={DirectorList[0].Picture}
                    title="PCED Director's Profile Picture"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {DirectorList[0].Name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {DirectorList[0].Bio}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* // co-directos information, such as name, degree, something they
            would like to share */}
            <Grid container item xs={6} spacing={0}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="PCED CoDirector's Profile Picture"
                    height="600"
                    image={DirectorList[1].Picture}
                    title="PCED CoDirector's Profile Picture"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {DirectorList[1].Name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {DirectorList[1].Bio}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </div>
      </main>

      {/* // directors footer - their contact information */}

      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Director Contact Info
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          P: 917-392-4710
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Email: laesa.pced@gmail.com
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Personal: arelisfienco@outlook.com
        </Typography>
        {/* <Copyright /> */}
      </footer>
    </React.Fragment>
  );
}
