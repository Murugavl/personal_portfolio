import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/Code Convertor.png";
import chatify from "../../Assets/Projects/liver-cancer-detection.jpg";
import loan_image from "../../Assets/Projects/Loan_Approval_Prediction.png";
import churn_image from "../../Assets/Projects/Customer_Churn_Prediction.png";
import crop_image from "../../Assets/Projects/crop-prediction.png";
import flower_image from "../../Assets/Projects/flower-prediction.png";
import smartkart_image from "../../Assets/Projects/smartkart.png";
import hospital_image from "../../Assets/Projects/hospital_management_system.png";
import bitsOfCode from "../../Assets/Projects/Calculator.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Liver-Cancer Detection"
              description="Developed a machine learning model to detect liver cancer based on patient health markers. The system utilizes advanced classification algorithms to predict diagnosis with high accuracy, assisting in early detection and treatment planning."
              ghLink="https://github.com/Murugavl/liver_cancer_detection.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loan_image}
              isBlog={false}
              title="Loan Approval Prediction"
              description="Built a predictive system using ML to assess loan eligibility based on applicant profiles. Deployed via Streamlit, it provides real-time approval probability, helping financial institutions automate and streamline decision-making."
              ghLink="https://github.com/Murugavl/Loan_Approval_Prediction.git"
              demoLink="https://loan--approval--prediction.streamlit.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={churn_image}
              isBlog={false}
              title="Customer Churn Prediction"
              description="Designed an ML solution to predict customer churn for businesses. By analyzing behavioral patterns, the model identifies at-risk customers, enabling companies to take proactive retention measures. Includes a Streamlit dashboard."
              ghLink="https://github.com/Murugavl/Customer_churn_Prediction.git"
              demoLink="https://customer-churnprediction.streamlit.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crop_image}
              isBlog={false}
              title="Crop Prediction System"
              description="Developed an intelligent agricultural recommender system that analyzes soil and climate data to suggest the most suitable crops. This tool aims to optimize yield and sustainable farming practices."
              ghLink="https://github.com/Murugavl/Crop-Prediction.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flower_image}
              isBlog={false}
              title="Flower Species Classification"
              description="Implemented a multi-class classification model using the Iris dataset to identify flower species. The project demonstrates end-to-end ML workflow from data preprocessing to Flask-based web deployment."
              ghLink="https://github.com/Murugavl/Flower-Prediction.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartkart_image}
              isBlog={false}
              title="SmartKart E-Commerce"
              description="Built a full-featured Django e-commerce platform with secure user authentication, product management, and cart functionality. The system offers a responsive UI and efficient backend for seamless online shopping."
              ghLink="https://github.com/Murugavl/SmartKart.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital_image}
              isBlog={false}
              title="Hospital Management System"
              description="Created a robust desktop application using Python Tkinter for managing hospital records. Features include patient registration, doctor scheduling, and record maintenance, simplifying administrative workflows."
              ghLink="https://github.com/Murugavl/Tkinter-Hospital_Management_System.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Code & Markdown Editor"
              description="Developed a browser-based code and Markdown editor using React.js. Features live privacy, custom HTML tag support for README generation, and local storage auto-save functionality for a seamless developer experience."
              ghLink="https://github.com/Murugavl/Code-Converter.git"
              demoLink="https://code-converter.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Scientific Calculator App"
              description="Engineered an Android calculator app using Java, featuring comprehensive mathematical functions and an intuitive UI. Designed for performance and usability on mobile devices."
              ghLink="https://github.com/Murugavl/ScientificCalculator.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
