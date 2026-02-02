import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Murugavel V</span>, based in <span className="purple">Virudhunagar, India.</span>
            <br />
            I am currently pursuing a B.Tech degree in Artificial Intelligence and Data Science at the Hindusthan Institute of Technology.
            <br />
            I am driven by a passion for leveraging technology to solve complex problems.
            <br />
            <br />
            Beyond my technical pursuits, I value:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Continuous Learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Strategic Problem Solving
            </li>
            <li className="about-activity">
              <ImPointRight /> Creative Hobbies (Gaming & Music)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be the light in the world of darkness."{" "}
          </p>
          <footer className="blockquote-footer">Murugavel V</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
