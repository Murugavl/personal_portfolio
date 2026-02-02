import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">MURUGAVEL V </span>
            from <span className="purple"> Virudhunagar, India.</span>
            <br />
            I am a B.Tech student at Hindusthan Institute of Technology, specializing in Artificial Intelligence and Data Science.
            <br />
            <br />
            Apart from coding, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming & Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be the light in the world of Darkness!"{" "}
          </p>
          <footer className="blockquote-footer">MURUGAVEL V</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
