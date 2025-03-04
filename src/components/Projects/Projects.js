import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Login Form.png";
import emotion from "../../Assets/Projects/News App.png";
import editor from "../../Assets/Projects/Code Convertor.png";
import chatify from "../../Assets/Projects/liver-cancer-detection.jpg";
import loan_image from "../../Assets/Projects/Loan_Approval_Prediction.png";
import churn_image from "../../Assets/Projects/Customer_Churn_Prediction.png";
import crop_image from "../../Assets/Projects/crop-prediction.png";
import flower_image from "../../Assets/Projects/flower-prediction.png";
import smartkart_image from "../../Assets/Projects/smartkart.png";
import hospital_image from "../../Assets/Projects/hospital_management_system.png";
import suicide from "../../Assets/Projects/Landing Page.png";
import bitsOfCode from "../../Assets/Projects/Calculator.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
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
              description="This project focuses on detecting liver cancer using various machine learning algorithms. The dataset contains features relevant to liver health, and the goal is to predict whether a patient has liver cancer or not based on these features."
              ghLink="https://github.com/Murugavl/liver_cancer_detection.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loan_image}
              isBlog={false}
              title="Loan Approval Prediction"
              description="This project is a Loan Approval Prediction System that uses Machine Learning to determine whether a loan application should be approved or rejected based on various factors. It is deployed using Streamlit for an interactive user experience."
              ghLink="https://github.com/Murugavl/Loan_Approval_Prediction.git"     
              demoLink="https://loan--approval--prediction.streamlit.app" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={churn_image}
              isBlog={false}
              title="Customer Churn Prediction"
              description="Customer churn prediction is a crucial task in business analytics, helping companies identify customers who are likely to leave and take preventive actions. This project utilizes Machine Learning (ML) techniques to analyze customer behavior and predict churn."
              ghLink="https://github.com/Murugavl/Customer_churn_Prediction.git"  
              demoLink="https://customer-churnprediction.streamlit.app"     
            />
          </Col>         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crop_image}
              isBlog={false}
              title="Crop Prediction"
              description="This Crop Prediction System utilizes machine learning to recommend suitable crops based on environmental data. It helps farmers make informed decisions by analyzing factors like soil type and climate. The system aims to enhance agricultural efficiency and productivity."
              ghLink="https://github.com/Murugavl/Crop-Prediction.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flower_image}
              isBlog={false}
              title="Flower Prediction"
              description="Flower Prediction is a machine learning project that uses the Iris dataset to classify iris flowers into three species: Setosa, Versicolor, and Virginica. The project includes data analysis, model training with various algorithms, and deployment via a Flask web application for user-friendly predictions."
              ghLink="https://github.com/Murugavl/Flower-Prediction.git"      
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartkart_image}
              isBlog={false}
              title="SmartKart"
              description="I have developed a Django-based e-commerce website that features a wide range of items for sale. It provides users with a seamless shopping experience, including product browsing, cart management, and secure checkout. The platform is designed to cater to diverse customer needs with a user-friendly interface and efficient backend management."
              ghLink="https://github.com/Murugavl/SmartKart.git"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital_image}
              isBlog={false}
              title="Hospital Management System"
              description="This is a Hospital Management System (HMS) developed using Tkinter, the standard GUI toolkit for Python. The system is designed to help hospital staff manage various administrative tasks such as patient records."
              ghLink="https://github.com/Murugavl/Tkinter-Hospital_Management_System.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Code Converter"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Murugavl/Code-Converter.git"
              demoLink="https://code-converter.streamlit.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Scientific Calculator"
              description="The ScientificCalculator app is a powerful tool designed for Android devices that allows users to perform a wide range of mathematical calculations, including basic arithmetic, trigonometric functions, logarithms, and more. Built using Java in Android Studio, this app provides an intuitive user interface and efficient performance."
              ghLink="https://github.com/Murugavl/ScientificCalculator.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Login Form"
              description="Designed and created a user-friendly login form in Figma, focusing on clean UI/UX with attention to accessibility and responsiveness. The form includes input fields for username and password, along with a 'Submit' button, and a 'Forgot Password' link for added functionality."
              demoLink="https://www.figma.com/proto/RnSLA1hVHzTmRmEbjyMl6V/Login-Form?node-id=0-3&scaling=scale-down&content-scaling=fixed&t=r3Ksw6Vrcx7rjk4H-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Landing Page"
              description="Designed and created a visually appealing landing page in Figma, focusing on clean UI/UX with emphasis on accessibility and responsiveness. The page includes sections like a hero image, a clear call-to-action button, and product details, ensuring a smooth user experience across devices.  The design also incorporates strategic use of typography, color schemes, and visual hierarchy to engage visitors and drive conversions."
              demoLink="https://www.figma.com/proto/wnJx9ImnwR0sixcxBtT4Df/Landing-Page?content-scaling=fixed&kind=proto&node-id=1-5&scaling=scale-down" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="News App"
              description="Designed and created an engaging news app in Figma, focusing on intuitive UI/UX with emphasis on microinteractions for a dynamic user experience.  The app includes features like smooth transitions between articles, interactive buttons."
              demoLink="https://www.figma.com/proto/uM1IeZwAChYe3oHc4b3BzK/Cognifyz-Projects?node-id=82-101&starting-point-node-id=82%3A101&t=ZGGyhbfKgXw4X86I-1  "      
            />
          </Col>  

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
