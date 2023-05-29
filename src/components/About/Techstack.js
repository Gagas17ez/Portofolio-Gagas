import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJava
} from "react-icons/di";
import {
  SiReact,
  SiFirebase,
  SiGit,
  SiFlutter,
  SiDart,
  SiLaravel,
  SiPython,
  SiMysql,
  SiGo,
  SiC,
  SiCplusplus,
  SiAmazonaws
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <h4>Flutter</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
        <h4>Dart</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
        <h4>Laravel</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
        <h4>React</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <h4>AWS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <h4>MySql</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGo />
        <h4>Golang</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <h4>Git</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h4>Firebase</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
        <h4>C</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
        <h4>C++</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
        <h4>Python</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h4>Java</h4>
      </Col>
    </Row>
  );
}

export default Techstack;
