import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Gagas Amukti Nandaka </span>
            an IT Student at <span className="purple"> Electronics Engineering Polytechnic Institute of Surabaya</span> 
            <br></br><br></br>with a proven track record in developing & deploying website also mobile apps, good with understanding agile scrum methods with 2 times
            becoming the best final project in SanberCode Indonesia.<br></br><br></br> I am interested pursue Career in Mobile/Fullstack Development
            
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
