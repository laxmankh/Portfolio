import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import Fade from "react-reveal/Fade";
//import Resume from "./public/images/Laxman_resume.pdf";
const Home = () => {
  // const [theme, setTheme] = useTheme();
  // //handle theme
  // const handleTheme = () => {
  //   setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  // };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        {/* <div className="theme-btn" onClick={handleTheme}>
          {" "}
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div> */}
        <div className="container home-content">
          <Fade right>
            <h1>Hi👋 I'm a</h1>
            <h2>
              <Typewriter
                options={{
                  strings: [
                    "Laxman Khandagale!",
                    "React Developer",
                    "MERN Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </Fade>
          <Fade top>
            <div className="home-button">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=7666019362"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>

              <a
                className="btn btn-cv"
                href="./public/images/Laxman_resume.pdf"
                download="resume.pdf"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
