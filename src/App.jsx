import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Project from "./pages/Projects";
import Tech from "./pages/Tech";
import WorkExp from "./pages/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import Tada from "react-reveal/Tada";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import MobileNav from "./components/MobileNav";

function App() {
  return (
    <>
      <MobileNav />
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Tech />
        <Projects />
        <WorkExp />
        <Contact />
      </div>
      <Tada>
        <div className="footer pb-3 ms-3">
          <h4 className="text-center">Made By 😍 Laxman 2024</h4>
        </div>
      </Tada>

      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
