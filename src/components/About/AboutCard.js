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
            an IT Undergraduate at <span className="purple"> Electronics Engineering Polytechnic Institute of Surabaya</span> 
            <br></br><br></br>with a strong background in full-stack development and project management. Successfully led innovative projects and
            startups, including RakitPC, and contributed significantly to digital solutions in various sectors.
            
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
