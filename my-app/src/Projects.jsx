import React from "react";

function Projects() {
  return (
    <React.Fragment>
      <div>
        <h2>LAESA Projects</h2>
        <p>
          LAESA-SHPE has always excelled at preparing our members academically
          and professionally. LAESA Projects is one of our new programs that we
          are introducing to LEASA. Our goal is for our members to gain
          experience that you cannot achieve in a classrrom environment by
          creating meaningful projects that could benefit everyone! This website
          is an example of what can come out of it. You will have the oportunity
          to learn how to work with teammates and engineer your project as you
          see fit. This is also becomes a great resume booster and a topic to
          talk about with recruitters at conferences! So join one of the current
          projects that are being run or propose your own and pitch to members
          of the club to join in on the project!
        </p>
        <h3> Projects you can currently join </h3>
        <ul>
          <li className="list">
            <span className="project-names">LAESA Website:</span> We are
            currently looking for anyone interested in frontend or backend
            development. You do not need any web experience to join!
            <br />
            If interested contact{" "}
            <span className="names">Ostavo Palacios </span>
            <br />
            Phone: 347-320-3164
          </li>
        </ul>
        {/* <h3>Got a Project Idea of Your Own?</h3>
        <p>Submit your proposal below and we will get back in touch with you</p> */}
      </div>
    </React.Fragment>
  );
}
export default Projects;
