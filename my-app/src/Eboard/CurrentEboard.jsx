import React, { Component } from "react";

// Eboard 2019 - 2020
import Luis from "./../pictures/Luis.png";
import Gloria from "./../pictures/Gloria.jpeg";
import Evan from "./../pictures/Evan.JPG";
import Richard from "./../pictures/Richard.png";
import Keivon from "./../pictures/Keivon.jpg";

// Eboard 2018-2019
// import Rafa from "./../pictures/Luis.png";
import Kayley from "./../pictures/Kayley.jpg";
import Arelis from "./../pictures/Arelis.png";
import Valentin from "./../pictures/Valentin.jpg";
import Brenda from "./../pictures/Brenda.jpg";

// Eboard 2020 - 2021
import Alex from "./../pictures/Alex.jpg";

// import President3 from "./../pictures/Luis.png";
// import Secretary3 from "./../pictures/Gloria.jpeg";
// import EVicePresident3 from "./../pictures/Evan.JPG";
// import IVicePresident23 from "./../pictures/Richard.png";
// import Treasurer3 from "./../pictures/Keivon.jpg";

import CardProfiles from "../Events/CardProfiles";
import profilePlaceHolder from "../pictures/SHPE-logo.png";

import easterEgg1 from "../pictures/Big-Bird.jpeg";
import easterEgg2 from "../pictures/Bert.jpeg";
import easterEgg3 from "../pictures/Cookie-Monster.jpeg";
import easterEgg4 from "../pictures/Kermit.jpeg";
import easterEgg5 from "../pictures/Abby.jpeg";

import "./Eboard.css";
import Button from "react-bootstrap/Button";
class EboardMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thisPage: 2,
      count: 1,
      EboardList: [
        {
          id: 1,
          Title: "President",
          Name: "Luis Rodriguez",
          Picture: Luis,
          Bio:
            "Hello my name is Luis Rodriguez, I am the acting President for LAESA-SHPE here at CCNY. I study electrical engineering along with mathematics and Portuguese. I have been involved in LAESA for the last two years, during which I have grown at a personal, professional and academic level. A lot of really bright-minded people gravitate towards LAESA, many of whom have taught me lessons I would not have otherwise found within the classroom. If I were to start giving shoutouts to the people that have helped develop this would pan out into an essay and not a small paragraph. I would say that my two favorite things to do after school are biking and playing music. Can’t wait to see how LAESA keeps growing as an organization and how It’ll continue to bring people from all types of background into the fold.",
          styles: {
            backgroundColor: "#72a9be",
            color: "black"
          }
        },
        {
          id: 2,
          Title: "Internal Vice-President",
          Name: "Richard Martinez",
          Picture: Richard,
          Bio:
            "My name is Richard Martinez and I am this year’s Internal Vice President. I am currently a sophomore studying Electrical Engineering. Something interesting about myself Is that I was previously an electrician and got the opportunity to work in a Union named Local 3. This opportunity helped me realize that I wanted to explore the depths of what an electrician truly does and that was to learn the mathematical methods and not just the technical skills.",
          styles: {
            backgroundColor: "rgb(0, 31, 91, 100)",
            color: "#f26534"
          },
          newColor: { color: "aliceblue" }
        },
        {
          id: 3,
          Title: "External Vice-President",
          Name: "Evan Vazquez",
          Picture: Evan,
          Bio:
            "Hello everyone, my name is Evan Vasquez and I am this year’s External Vice President. I am a Senior studying Computer Science with a minor in Mathematics, I am excited to have this opportunity and finally give back to the chapter that gave me so much throughout my years as a member. Fun fact about me , I am the undefeated chess champion of LAESA.",
          styles: {
            backgroundColor: "#72a9be",
            color: "black"
          }
        },
        {
          id: 4,
          Title: "Treasurer",
          Name: "Keivon Yang",
          Picture: Keivon,
          Bio:
            "Currently, I am a Sophomore Electrical Engineering major. I have had the privilege of being recognized as someone despite the difference in the background but as a member of the amazing Familia of LAESA. Despite my time with LAESA I have committed to multiple positions and found the value of being an active member of this organization. I am a firm believer that everyone who I have met or encountered, no matter how brief, has had an impact on my life and helped in my search of the ideal version of myself for better or for worse.",
          styles: {
            backgroundColor: "rgb(0, 31, 91, 100)",
            color: "#f26534"
          },
          newColor: { color: "aliceblue" }
        },
        {
          id: 5,
          Title: "Secretary",
          Name: "Gloria Hernandez",
          Picture: Gloria,
          Bio:
            "My name is Gloria Hernandez Navarrete and I am a fourth-year civil engineering student at the City College of New York. I am on the Executive Board of LAESA-SHPE as secretary for the 2019-2020 academic school year. I can proudly say that thanks to the sacrifices of my parents and those before me, I am pursuing my childhood dreams. Education is a basic human right that no individual should be denied. A lot is to come this year for our team, but I am looking forward to it all!",
          styles: {
            backgroundColor: "#72a9be",
            color: "black"
          }
        }
      ],
      EboardList2: [
        {
          id: 1,
          Title: "President",
          Name: "Rafael Barinas",
          Picture: profilePlaceHolder,
          Bio: "",
          styles: {
            backgroundColor: "#72a9be",
            color: "black"
          }
        },
        {
          id: 2,
          Title: "Internal Vice-President",
          Name: "Valentin Martinez",
          Picture: Valentin,
          Bio:
            "My name is Valentin Martinez a Civil Engineering Graduate 19’ with a focus on Structural Engineering. I’ve been involved with LAESA-SHPE since my sophomore year and have held multiple positions within the organization: FIRST Lego League Director 17’ and, SHPE Jr. Director 17’.  LAESA-SHPE changes lives by impacting and influencing the Hispanic community, and building you up to become a professional leader. And, I’ve had the privilege to be part of this movement #SHPE4LIFE",

          styles: {
            backgroundColor: "rgb(0, 31, 91, 100)",
            color: "#f26534"
          },
          newColor: { color: "aliceblue" }
        },
        {
          id: 3,
          Title: "External Vice-President",
          Name: "Arelis Fienco",
          Picture: Arelis,
          Bio:
            "I was born and raised in Guayaquil, Ecuador. I have been part of LAESA-SHPE since my freshman year in 2016 at The City College of New York. I started fulfilling SHPE's mission by starting with SHPE Jr. and directing Noche de Ciencias at Manhattan Bridges High School in April 2017. The following academic year, I became part of the PCED 2018 team by creating a meaningful project along with my  team that exposed high school students to leadership and real-life experiences.",
          styles: {
            backgroundColor: "#72a9be",
            color: "black"
          }
        },
        {
          id: 4,
          Title: "Treasurer",
          Name: "Brenda Valbuena",
          Picture: Brenda,
          Bio:
            "Hi, my name is Brenda Valbuena and I am a senior majoring in Mechanical Engineering. I joined LAESA-SHPE in 2017 and since then, I have been the former director of SHPE Jr (2017 - 2018) and the former Executive Board - Treasurer for the 2018-2019 academic year. During my time with LAESA-SHPE I had the opportunity to talk and encourage high school and current engineering students from NYC about STEM fields. This organization has become a life-time family, where I have had the opportunity to receive mentorship, improve my interpersonal skills, and become a better professional. My goal with LAESA-SHPE is to continue giving back to my club with resources, opportunities, and mentorship to create more successful students in the professional world.",
          styles: {
            backgroundColor: "rgb(0, 31, 91, 100)",
            color: "#f26534"
          },
          newColor: { color: "aliceblue" }
        },
        {
          id: 5,
          Title: "Secretary",
          Name: "Kayley Arias",
          Picture: Kayley,
          Bio:
            "Hi my name is Kayley Arias and I am a senior majoring in chemical engineering. I joined LAESA-SHPE in my second year in college. Upon joining this organization, I volunteered at numerous events and obtained various leadership position. I had the opportunity to speak to high school students, middle school students, and their parents about SHPE, college, and what a career in engineering entails. This organization has provided me with mentors, scholarships, and has helped me acquire the professional skills to land internships and full-time opportunities. LAESA-SHPE has taught me so much which is why I continue to be actively involved to make sure that others acquire the resources and skills they need to become successful professionals. I will continue to be actively involved even after I graduate.",

          styles: {
            backgroundColor: "#72a9be",
            color: "black"
          }
        }
      ],
      EboardList3: [
        {
          id: 1,
          Title: "President",
          Name: "Richard Martinez",
          Picture: Richard,
          Bio: "",
          styles: {
            backgroundColor: "#72a9be",
            color: "black"
          }
        },
        {
          id: 2,
          Title: "Internal Vice-President",
          Name: "Alex Guerrero",
          Picture: profilePlaceHolder,
          Bio: "Hello Familia,    My name is Alex Guerrero and I am LAESA-SHPE’s Internal-Vice President\
           for the academic year 2020-2021. I am 2nd year Electrical Engineering student with a minor in\
          Economics. I am very excited and grateful for the opportunity to give back and help out the\
          chapter which has helped me out throughout the year professionally and academically. Across\
          the year I have learned how to write a resume, how to write a cover letter, participated in\
          multiple mock interviews, met amazing people all thanks to this club. LAESA-SHPE has touched\
          everyone's heart in its own way, that’s the best thing about the club. A fun fact about me\
          is that I like to play soccer, no matter the time I am always down for a game of soccer.\
          At last, some goals I have for this year are the following:  1) I plan on helping out with\
          the construction of our website and deploying it. Throughout the year a team of members is\
          working on the website that will display LAESA-SHPE history across all platforms, such as\
          Macs, Windows, Tablets, and phone. 2) I am  also looking forward to working with directors\
          to try to establish a solid mentorship program for members. We going to keep working on\
          professional-development and  self-development.   This year is going to be an exciting one,\
          hopefully everything gets back to normal soon. Stay safe everyone!",
          styles: {
            backgroundColor: "rgb(0, 31, 91, 100)",
            color: "#f26534"
          },
          newColor: { color: "aliceblue" }
        },
        {
          id: 3,
          Title: "External Vice-President",
          Name: "Mauricio Almonte",
          Picture: profilePlaceHolder,
          Bio: "",
          styles: {
            backgroundColor: "#72a9be",
            color: "black"
          }
        },
        {
          id: 4,
          Title: "Treasurer",
          Name: "Kyle Persuad",
          Picture: profilePlaceHolder,
          Bio: "",
          styles: {
            backgroundColor: "rgb(0, 31, 91, 100)",
            color: "#f26534"
          },
          newColor: { color: "aliceblue" }
        },
        {
          id: 5,
          Title: "Secretary",
          Name: "Estefany Gomez",
          Picture: profilePlaceHolder,
          Bio: "",
          styles: {
            backgroundColor: "#72a9be",
            color: "black"
          }
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.pageOutput = this.pageOutput.bind(this);
  }
  handleClick = pageNum => {
    this.setState({ thisPage: pageNum });
    var temp = this.state.count;
    temp++;
    if (pageNum === 2) this.setState({ count: temp });
    else this.setState({ count: 1 });
    if (this.state.count % 4 === 0) {
      var subArr = [...this.state.EboardList];
      subArr[0] = { ...subArr[0], Picture: easterEgg1 };
      subArr[1] = { ...subArr[1], Picture: easterEgg2 };
      subArr[2] = { ...subArr[2], Picture: easterEgg3 };
      subArr[3] = { ...subArr[3], Picture: easterEgg4 };
      subArr[4] = { ...subArr[4], Picture: easterEgg5 };
      this.setState({ EboardList: subArr });
    } else {
      var subArr = [...this.state.EboardList];
      subArr[0] = { ...subArr[0], Picture: Luis };
      subArr[1] = { ...subArr[1], Picture: Richard };
      subArr[2] = { ...subArr[2], Picture: Evan };
      subArr[3] = { ...subArr[3], Picture: Keivon };
      subArr[4] = { ...subArr[4], Picture: Gloria };
      this.setState({ EboardList: subArr });
    }
  };
  pageOutput() {
    if (this.state.thisPage === 2) {
      return (
        <React.Fragment>
          <h2 className="eboard-title">
            Our Eboard from <br />
            2019-2020
          </h2>
          <CardProfiles DirectorListName={this.state.EboardList} />
        </React.Fragment>
      );
    } else if (this.state.thisPage === 3) {
      return (
        <React.Fragment>
          <h2 className="eboard-title">
            Our Eboard from <br />
            2018-2019
          </h2>
          <CardProfiles DirectorListName={this.state.EboardList2} />
        </React.Fragment>
      );
    } else if (this.state.thisPage === 1) {
      return (
        <React.Fragment>
          <h2 className="eboard-title">
            Our Eboard from <br />
            2020-2021
          </h2>
          <CardProfiles DirectorListName={this.state.EboardList3} />
        </React.Fragment>
      );
    }
  }
  render() {
    return (
      <React.Fragment>
        <header className="Eboard-header">
          <div style={{ background: "#72a9be" }}>
            <div className="buttons">
              <Button
                size="lg"
                className=" btn btn-default btn-circle"
                onClick={() => this.handleClick(1)}
                style={{
                  backgroundColor: "rgb(0, 31, 91, 100)"
                }}
              >
                <span className="itemNums">1</span>
              </Button>
              <Button
                size="lg"
                className=" btn btn-default btn-circle"
                onClick={() => this.handleClick(2)}
                style={{ backgroundColor: "rgb(0, 31, 91, 100)" }}
              >
                <span className="itemNums">2</span>
              </Button>
              <Button
                size="lg"
                className=" btn btn-default btn-circle"
                onClick={() => this.handleClick(3)}
                style={{ backgroundColor: "rgb(0, 31, 91, 100)" }}
              >
                <span className="itemNums">3</span>
              </Button>
            </div>
          </div>
          {this.pageOutput()}
          <div style={{ background: "#72a9be" }}>
            <div className="buttons">
              <Button
                size="lg"
                className=" btn btn-default btn-circle"
                onClick={() => this.handleClick(1)}
                style={{
                  backgroundColor: "rgb(0, 31, 91, 100)"
                }}
              >
                <span className="itemNums">1</span>
              </Button>
              <Button
                size="lg"
                className=" btn btn-default btn-circle"
                onClick={() => this.handleClick(2)}
                style={{ backgroundColor: "rgb(0, 31, 91, 100)" }}
              >
                <span className="itemNums">2</span>
              </Button>
              <Button
                size="lg"
                className=" btn btn-default btn-circle"
                onClick={() => this.handleClick(3)}
                style={{ backgroundColor: "rgb(0, 31, 91, 100)" }}
              >
                <span className="itemNums">3</span>
              </Button>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
export default EboardMembers;
