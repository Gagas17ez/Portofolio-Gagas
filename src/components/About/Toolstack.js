import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  RiTeamFill,
} from "react-icons/ri";

import {
  AiOutlineTeam,
} from "react-icons/ai";

import {
  MdReportProblem,
} from "react-icons/md";

import {
  FaBrain,
} from "react-icons/fa";

import {
  DiScrum
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum />
        <h4>Agile Scrum</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiTeamFill />
        <h4>Team Leadership</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineTeam />
        <h4>Team Management</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdReportProblem />
        <h4>Problem Solving</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBrain />
        <h4>Analytical Thinking,</h4>
      </Col>
    </Row>
  );
}

export default Toolstack;
