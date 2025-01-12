import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import Spin from "react-reveal/Spin";
import myimages from "../../public/images/lakhan_ima.jpg";
const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <Jump>
              <img src={myimages} alt="profile_pic" />
            </Jump>
          </div>
          <Jump>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                <h5>
                  {" "}
                  {/* As an IT Engineer, I specialize in creating visually appealing
                  and intuitive user experiences with a good foundation in web
                  technologies. I excel at building responsive websites and
                  applications, continuously exploring new technologies like
                  React.js, Bootstrap, Tailwind, Node.js, Express.js, and
                  MongoDB. With internship experience at The Spark Foundation,
                  Internpe, Oasis Infobyte, and Celebal Summer Internship
                  focusing on React.js, my goal is to craft websites that are
                  both visually appealing and user-friendly. Let's connect to
                  drive your web development projects to success. */}
                  Motivated IT Engineer with a good foundation in data
                  structures, algorithms, and software development, eager to
                  drive impactful projects and tackle real-world challenges in a
                  growth-focused organization. Ready to deliver value through
                  innovation, collaboration, and continuous learning to
                  contribute meaningfully from day one.
                </h5>
              </p>
            </div>
          </Jump>
        </div>
      </div>
    </>
  );
};

export default About;
