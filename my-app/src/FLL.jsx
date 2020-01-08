import React from 'react';
import './FLL.css';
import director from './pictures/Jean-Luc.jpg';

function FLL() {
  return (
    <div className="Main">
   		<body> 
  	<h1 className="header"> FLL'S MISSION </h1>
  	<p className="paragraph">
  	First Lego League's mission is to inspire young adults to be science and technology innovators
  	, by engaging them in exciting programs that help them build the necessaries skills in science,
  	engineering, and technology.
 	  </p>
 	  <h1 className="header"> Our Director </h1>
 	  <img className="Convention-Pic"
 	  src={director} alt="Convention Group Picture"
 	  />
 	  <p className="paragraph"> _________________
 	  hey
 	  </p>
 	  <p className="paragraph"> _________________
 	  hey
 	  </p>

  </body>

    </div>

  );
}
export default FLL;
