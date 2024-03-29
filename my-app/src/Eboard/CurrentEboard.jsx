import React, { Component } from "react";

// Eboard 2019 - 2020
import Luis from "./../pictures/Luis.png";
import Gloria from "./../pictures/Gloria.jpeg";
import Evan from "./../pictures/Evan.JPG";
import Richard from "./../pictures/Richard.png";
import Keivon from "./../pictures/Keivon.jpg";

// Eboard 2018-2019
import Rafa from "./../pictures/Rafa.png";
import Kayley from "./../pictures/Kayley.jpg";
import Arelis from "./../pictures/Arelis.png";
import Valentin from "./../pictures/Valentin.jpg";
import Brenda from "./../pictures/Brenda.jpg";

// Eboard 2020 - 2021
import Alex from "./../pictures/Alex_Guerrero.jpg";
import Estefany from "./../pictures/Estefany_Gomez.jpg";
import Kyle from "./../pictures/Kyle_Persaud.jpg";
import Mauricio from "./../pictures/Mauricio_Almonte.png";

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
      thisPage: 1,
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
            color: "#282c34"
          },
          newColor: { color: "black" }
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
            color: "#282c34"
          },
          newColor: { color: "black" }
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
            color: "#282c34"
          },
          newColor: { color: "black" }
        }
      ],
      EboardList2: [
        {
          id: 1,
          Title: "President",
          Name: "Rafael Barinas",
          Picture: Rafa,
          Bio: "",
          styles: {
            backgroundColor: "#72a9be",
            color: "#282c34"
          },
          newColor: { color: "black" }
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
            color: "#282c34"
          },
          newColor: { color: "black" }
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
            color: "#282c34"
          },
          newColor: { color: "black" }
        }
      ],
      EboardList3: [
        {
          id: 1,
          Title: "President",
          Name: "Richard Martinez",
          Picture: Richard,
          Bio:
            "Hello Everyone, Hopefully your having a great day and staying safe from this virus.\
           My name is Richard Martinez and I am the new President of LAESA-SHPE, I am currently a\
          sophomore in Electrical Engineering and I am looking forward to meeting everyone!.\
          One of the many things that influenced me to run for the president position was the goal\
          to grow LAESA and expands its connections so that it can help people in need of information.\
          LAESA-SHPE has impacted me in many ways, one of the ways it has impacted me was the events\
          building up to the SHPE convention. Another was the career summit, what both of these\
          events did was teach me the skills to be able to talk to recruiters, learn how to network and\
          finally how to build a solid resume. So I greatly appreciate the skills and I thank LAESA\
          and those I have met on the way. Warm Regards, Richard Martinez",
          styles: {
            backgroundColor: "#72a9be",
            color: "#282c34"
          },
          newColor: { color: "black" }
        },
        {
          id: 2,
          Title: "Internal Vice-President",
          Name: "Alex Guerrero",
          Picture: Alex,
          Bio:
            "Hello Familia,  My name is Alex Guerrero and I am LAESA-SHPE’s Internal-Vice President\
           for the academic year 2020-2021. I'm a 2nd year Electrical Engineering student with a minor in\
          Economics. I am very excited and grateful for the opportunity to give back and help out the\
          chapter which has helped me out throughout the year professionally and academically. Across\
          the year I have learned how to write a resume, how to write a cover letter, participated in\
          multiple mock interviews, met amazing people all thanks to this club. LAESA-SHPE has touched\
          everyone's heart in its own way, that’s the best thing about the club. A fun fact about me\
          is that I like to play soccer, no matter the time I am always down for a game of soccer.\
          At last, some goals I have for this year are the following: 1) I plan on helping out with\
          the construction of our website and deploying it. Throughout the year a team of members is\
          working on the website that will display LAESA-SHPE history across all platforms.\
           2) I am  also looking forward to working with directors\
          to try to establish a solid mentorship program for members. We going to keep working on\
          professional-development and  self-development. This year is going to be an exciting one,\
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
          Picture: Mauricio,
          Bio:
            "Hello, my name is Mauricio Mino. I am currently a senior studying mechanical\
           Engineering. This year my Familia has elected me as External Vice President and I am\
            honored. My personal experience with LAESA has helped me experience a home away\
            from home. I am surrounded by individuals, who like me, seek to not just represent\
            mi gente but uplift my community. I advocate for immigration reforms, strive for\
            academic excellence and extend a hand to my peers so we all eat. If im not in the\
            books you can catch me riding through the streets of NYC on my bike, if you can\
            keep up that is.",

          styles: {
            backgroundColor: "#72a9be",
            color: "#282c34"
          },
          newColor: { color: "black" }
        },
        {
          id: 4,
          Title: "Treasurer",
          Name: "Kyle Persuad",
          Picture: Kyle,
          Bio:
            "Hello everyone! My name is Kyle Persaud and I am currently a third-year mechanical\
           engineering student at the City College of New York. I am on this year's Executive Board\
          as the Treasurer. I am enthusiastic to be able to give back to the community and chapter\
          that has brought many great people into my life. All the people that I have interacted with\
          during my time with LAESA-SHPE, have shown me the ways of the engineer and to prosper as one\
          in our environment. Some of my favorite things to do are blasting music and going on long\
          runs. There is a lot to come this year for us, so stay tuned!",
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
          Picture: Estefany,
          Bio:
            "Hola Familia, my name is Estefany Gomez and I am secretary of LAESA-SHPE 2020-2021. I am\
           currently a fourth-year Multidisciplinary Civil Engineering student, with a minor in Mathematics.\
            LAESA-SHPE has provided me with the resources I need to succeed professionally and academically.\
             As a member of LAESA-SHPE, I gained the confidence to submit my resume, cover letter, and network.\
              I learned how to present myself and the skills I gained through experience, and continue to gain\
               as a member. I am glad to have met everyone because I found a family who is always rooting me\
                and helping me grow. As secretary, I want to create more events and programs that will allow\
                 members to strengthen or develop skills that they can add to their resume.\
                 Thank you, Estefany Gomez",
          styles: {
            backgroundColor: "#72a9be",
            color: "#282c34"
          },
          newColor: { color: "black" }
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
