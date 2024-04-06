import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>My Skills</h2>
                        <p>Here's a glimpse of the skills I bring to the table</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" autoPlay={true} autoPlaySpeed={1000} keyBoardControl={true} showDots={true} arrows={true}>
                          
                            <div className="item">
                                <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1712378374/Portfolio/skills/html_mtvekr.png" alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1712378374/Portfolio/skills/css_dwovji.png" alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1712378773/Portfolio/skills/JS_iulfj9.webp" alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1712378375/Portfolio/skills/react_yqnl4j.png" alt="Image" />
                                <h5>ReactJs</h5>
                            </div>
                            <div className="item">
                                <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1712378375/Portfolio/skills/node_cbe2w0.png" alt="Image" />
                                <h5>NodeJs</h5>
                            </div>
                            <div className="item">
                                <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1712381971/Portfolio/skills/c_tzcyej.png" alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1712382126/Portfolio/skills/Tailwind_CSS_Logo.svg_hkayhb.png" alt="Image" />
                                <h5>Material UI</h5>
                            </div>
                            <div className="item">
                                <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1712382130/Portfolio/skills/material-ui-1_nlspbh.svg" alt="Image" />
                                <h5>Tailwindcss</h5>
                            </div>
                            <div className="item">
                                <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1712381581/Portfolio/skills/java_c1bi3l.png" alt="Image" />
                                <h5>Java</h5>
                            </div>
                            
                            <div className="item">
                                <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1712378374/Portfolio/skills/mongodb_rc0zx8.png" alt="Image" />
                                <h5>MongoDB</h5>
                            </div>

                            <div className="item">
                                <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1712378374/Portfolio/skills/figma_dodbxt.png" alt="Image" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1712381603/Portfolio/skills/docker_oau2he.png" alt="Image" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1712381974/Portfolio/skills/Git_icon_xuetxy.png" alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1712381967/Portfolio/skills/Github_rqi4wv.png" alt="Image" />
                                <h5>Github</h5>
                            </div>

                            <div className="item">
                                <img src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1712382285/Portfolio/skills/vercel_rnuj0z.png" alt="Image" />
                                <h5>Vercel</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} />
    </section>
  )
}
