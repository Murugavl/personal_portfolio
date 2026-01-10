import { Col, Row } from "react-bootstrap";
import { FaCode } from "react-icons/fa";
import {
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p className="h6">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCode />
        <p className="h6">R</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p className="h6">Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p className="h6">MySql</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p className="h6">Mongodb</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="h6">Git</p>
      </Col>
    </Row>
  );
}

export default Techstack;

