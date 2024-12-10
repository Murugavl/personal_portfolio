import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiAndroidstudio,
  SiPycharm,
  SiJupyter,
  SiAnaconda,
  SiEclipseche,
  SiGithub,
  SiFigma,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="h6">SiVisualstudio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <p className="h6">Pycharm</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
        <p className="h6">Anaconda</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <p className="h6">Jupyter Notebook</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseche />
        <p className="h6">Eclipse</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        <p className="h6">Androidstudio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p className="h6">Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <p className="h6">Figma</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p className="h6">Vercel</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
