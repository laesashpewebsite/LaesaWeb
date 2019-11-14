import React from 'react';
import './PCED.css'
import PCED_Director from './pictures/Arelis.png';

function PCED() {
  return (
    <div className="PCED-main">
   		<header className="PCED-header">
   		<div className="PCED-info">
        	<h2>Pre-College Engineering Day</h2>
        	<div className="card-color">
        	<h3> About </h3>
        	<p>
        	LAESA–SHPE is the largest and most prominent undergraduate student organization 
       		at The City College of New York. In 1983, a group of dedicated students, with the 
        	goal to unite all Latino and other minority engineering students, share cultural ideas,
        	and promote leadership, founded LAESA within City College. In 1986, LAESA joined forces 
        	with the Society of Hispanic Professional Engineers (SHPE) to better achieve their goals 
        	and connect with a larger body of professionals. This partnership has flourished over the
        	years and today, LAESA is a firm supporter of the SHPE core values, while remaining true to
        	its original mission. With over 150 members, LAESA-SHPE has been able to gather motivated 
        	students from all engineering disciplines and a diverse pool of cultural backgrounds. This
        	dynamic group of students, alongside their highly supportive alumni members, has had many 
        	achievements at The City College of New York and within the community 
        	</p>
        	</div>
        	<div className="card-color">
        		<h3>Goal</h3>
        		<p>"The goal of PCED is to expose the younger Latino community to  STEM related careers 
        		(Science, Technology, Engineering and Mathematics) while obtaining real-life project experience, 
        		and developing team-building and leadership skills"
        		</p>
        	</div>
        	<div className="card-color">
        		<h3>About the Director</h3>
      			<img src={PCED_Director} className="PCED-Director-Photo" alt="PCED-Director"/>
	       		<p>
				Born and raised in Guayaquil, Ecuador. Arelis has been part of LAESA-SHPE since her freshman year 
				in 2016 at The City College of New York. She started fulfilling SHPE's mission by starting with 
				SHPE Jr. and directing Noche de Ciencias at Manhattan Bridges High School in April 2017. The following 
				academic year, she became part of the PCED 2018 team by creating a meaningful project along her 
				team that exposed high school students to leadership and real-life experiences. Last academic year, 
				Arelis was part of the Executive Board for LAESA, serving as the External Vice-President. This year
				Arelis is the SHPE-NYC Sub-Regional Student Representative where she forms the bridge of communication 
				between chapters across NYC. She is also directing Pre-College Engineering Day 2020 where her team's 
				goals are listed below: 
				</p>
				<ul>
					<li>Host event for 350+ students.</li>
					<li>Provide leadership, team-building, and managing experience to both attendees and volunteers. </li>
					<li>Establish a stronger relationship with alumni and corporations to be involved in future PCED events.</li>
					<li>Raise female ratio by 10%.</li>
					<li>Introduce the importance of sustainability.</li>
					<li>Provide a diversity of minority ethnicities for future STEM jobs. </li>

				</ul>
			</div>
			</div>
      </header>
    </div>
  );
}
export default PCED;