import React from "react";
import "./Projects.css";
import project1 from "../../public/images/Banner.png";
import project2 from "../../public/images/todo.jpg";
import project3 from "../../public/images/portfolio.jpg";
import Country_tour from "../../public/images/Country_tour.jpg";
// import Spin from "react-reveal/Spin";
import Fade from "react-reveal/Fade";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          These are my top recent projects showcased in the project section of
          my portfolio application.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Fade right>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN stack</span>
                  <a href="https://github.com/laxmankh?tab=repositories">
                    <img src={project1} alt="project1" />
                  </a>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Bookstore Web Application
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://bookstore-web-app-delta.vercel.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">React</span>
                  <a href="https://github.com/laxmankh/Todo_react">
                    <img src={project2} alt="project2" />
                  </a>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>

                  <span className="card-detail-badge">Git</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">ToDo Application</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://todo-react-pi-taupe.vercel.app/ "
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">React</span>
                  <a href="https://github.com/laxmankh/Portfolio">
                    {" "}
                    <img src={project3} alt="project1" />
                  </a>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Bootstrap</span>

                  <span className="card-detail-badge">Web3Form</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Personal Portfolio Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://portfolio-lt46.vercel.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 temp">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">React</span>
                  <a href="https://github.com/laxmankh/Country_tour">
                    <img src={Country_tour} alt="Country_tour" />
                  </a>
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Axios</span>
                  <span className="card-detail-badge">React-Icons</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Country_Tour</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/laxmankh/Country_tour"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Projects;
