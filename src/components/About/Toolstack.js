import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiPycharm,
  SiJupyter,
  SiAnaconda,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="h6">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <p className="h6">PyCharm</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
        <p className="h6">Anaconda</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <p className="h6">Jupyter</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p className="h6">GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p className="h6">Vercel</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
