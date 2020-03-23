import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from '@material-ui/core/CardActionArea';
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

var num = 0;
const DirectorList = [
  {
    Title: "PCED Director",
    Name: "Arelis Fienco",
    Picture: PCED_Director,
    Bio:
      "Born and raised in Guayaquil, Ecuador. Arelis has been part of LAESA-SHPE since her freshman year in 2016 at The City College of New York. She started fulfilling SHPE's mission by starting with SHPE Jr. and directing Noche de Ciencias at Manhattan Bridges High"
    // School in April 2017. The following academic year, she became part
    // of the PCED 2018 team by creating a meaningful project along her
    // team that exposed high school students to leadership and real-life
    // experiences. Last academic year, Arelis was part of the Executive
    // Board for LAESA, serving as the External Vice-President. This year
    // Arelis is the SHPE-NYC Sub-Regional Student Representative where she
    // forms the bridge of communication between chapters across NYC. She
    // is also directing Pre-College Engineering Day 2020 where her team's
    // goals are listed below"
  },
  {
    Title: "PCED CoDirector",
    Name: "Derwick ",
    Picture: PCED_Director2,
    Bio: "I'm a Civil Engineering major at CCNY, some of my contributions for"
    // the club are Co-director for the 26th PCED and Office manager, some
    // the reasons I picked these positions are because I like to be
    // organized and also work on self-development. Some hobbies that I'm
    // into are basketball, health ( mental and physical), reading books on
    // personal growth and listening to podcast. Laesa-shpe has opened many
    // doors for new opportunities, adventures and friends. I am grateful
    // for coming across this great organization."
  }
];

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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

 function getName() {
    return DirectorList[num].Name;
  }
  function getBio() {
    return DirectorList[num].Bio;
  }
  function getPic() {
    return DirectorList[num].Picture;
  }
  function getTitle() {
    return DirectorList[num].Title;
  }
  function inc() {
    if (num === 1) num = 0;
    else num++;
  }


return (
<React.Fragment>
  <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <Typography>
          Pre College Engineering Day
        </Typography>
      </Toolbar>
    </AppBar>

<main>

  <div className={classes.heroContent}>
  <Container maxWidth="sm">
    <Typography
      component="h1"
      variant="h2"
      align="center"
      color="textPrimary"
      gutterBottom>
        Pre College Engineering Day Album
    </Typography>
    <Typography
      variant="h5"
      align="center"
      color="textSecondary"
      paragraph>
        One of LAESA-SHPE's many big event hosted in City College of New York
    </Typography>
  </Container>
  </div>

  <div className={classes.heroContent}> 
    <Grid container spacing={5}>
    <Grid container item xs={4} spacing={3}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={DirectorList[0].Picture}
          title=" "/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {DirectorList[0].Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </Card>
    </Grid>

    <Grid container item xs={4} spacing={3}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={DirectorList[0].Picture}
          title=" "/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {DirectorList[0].Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </Card>
    </Grid>

    <Grid container item xs={4} spacing={3}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={DirectorList[0].Picture}
          title=" "/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {DirectorList[0].Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </Card>
    </Grid>
    
    </Grid>
  </div>

  <div> 
    <Grid container spacing={5}>
    <Grid container item xs={6} spacing={3}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={DirectorList[0].Picture}
          title="Contemplative Reptile"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {DirectorList[0].Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {DirectorList[0].Bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid container item xs={6} spacing={3}>
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={DirectorList[1].Picture}
          title=""/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {DirectorList[1].Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {DirectorList[1].Bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </Card>
    </Grid>
    </Grid>
  </div>
</main>


<footer className={classes.footer}>
  <Typography variant="h6" align="center" gutterBottom>
    Director Contact Info
  </Typography>
  <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
    P: 917-392-4710
  </Typography>
  <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
    Email: laesa.pced@gmail.com
  </Typography>
  <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
    Personal: arelisfienco@outlook.com
  </Typography>
  <Copyright />
 </footer>

   
  </React.Fragment>
  );
}
