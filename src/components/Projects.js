import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Pryde",
      description: "A safe and inclusive space designed for the LGBTQ+ community to learn and talk about sexual health",
      imgUrl: projImg1,
      projectUrl: "",
      githubUrl: "https://github.com/i-am-SnehaChauhan/Pryde",
      documentationUrl: "https://github.com/i-am-SnehaChauhan/Pryde/blob/main/README.md",

    },
    {
      title: "No-Cotine",
      description: "No-cotine is a digital haven designed to support and uplift individuals in their journey to quit smoking.",
      imgUrl: "https://res.cloudinary.com/dx0dgujbj/image/upload/v1712386095/Portfolio/Projects/Screenshot_2024-04-06_121755_gbfpwh.png",
      projectUrl: "",
      githubUrl: "https://github.com/i-am-SnehaChauhan/no-cotine",
      documentationUrl: "https://github.com/i-am-SnehaChauhan/no-cotine?tab=readme-ov-file#introducti",
    },
    {
      title: "TravelSafe",
      description: "Empowering Women's Journeys with Virtual Protection",
      imgUrl: "https://res.cloudinary.com/dx0dgujbj/image/upload/v1712385902/Portfolio/Projects/Screenshot_2024-04-06_121439_ezhpr1.png",
      projectUrl: "",
      githubUrl: "https://github.com/i-am-SnehaChauhan/travel-safe",
      documentationUrl: "https://github.com/i-am-SnehaChauhan/travel-safe?tab=readme-ov-file#travelsafe-empowering-womens-journeys-with-virtual-protection",
    },
    {
      title: "TransCare",
      description: "Web Application committed to providing support and inclusivity for marginalized genders, specifically transgenders.",
      imgUrl: "https://res.cloudinary.com/dx0dgujbj/image/upload/v1712385562/Portfolio/Projects/Screenshot_2024-04-06_120858_g4auws.png",
      projectUrl: "https://trans-care.vercel.app/",
      githubUrl: "https://github.com/i-am-SnehaChauhan/TransCare-Project",
      documentationUrl: "https://github.com/i-am-SnehaChauhan/TransCare-Project?tab=readme-ov-file#transcare---your-journey-our-priority",
    },
    {
      title: "Devcation-24",
      description: "Devcation is a week-long technical festival organized by GDSC - IGDTUW for Women that celebrates diversity in the Tech",
      imgUrl: "https://res.cloudinary.com/dx0dgujbj/image/upload/v1712385086/Portfolio/Projects/WhatsApp_Image_2024-02-29_at_12.43.20_AM.jpeg_vzv4hd.jpg",
      projectUrl: "https://devcation-24.vercel.app/",
      githubUrl: "https://github.com/i-am-SnehaChauhan/devcation-24",
      documentationUrl: "",
    },
    {
      title: "Cervicare",
      description: "Your Partner in Cervical Wellness, Every Step of the Way.",
      imgUrl: "https://res.cloudinary.com/dx0dgujbj/image/upload/v1712386407/Portfolio/Projects/Screenshot_2024-04-06_122310_zeppfp.png",
      projectUrl: "",
      githubUrl: "https://github.com/i-am-SnehaChauhan/cervi-care",
      documentationUrl: "https://github.com/i-am-SnehaChauhan/cervi-care/blob/main/README.md",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below are some of the projects I've worked on, showcasing my skills and experiences in action</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">UI/UX projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Game Development</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
