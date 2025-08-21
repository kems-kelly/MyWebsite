import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Nav from "./Components/Nav/Nav";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

export default function App() {
  return (
    <>
      <Nav />
      <section id="intro" className="h-auto">
        <Intro />
      </section>
      <section id="about" className="h-auto ">
        <About />
      </section>
      <section id="skills" className="h-auto">
        <Skills />
      </section>
      <section id="projects" className="auto bg-gray-500">
        <Projects />
      </section>
      <section className="h-auto">
        <CustomCursor />
      </section>
      <section id="contact" className="h-auto">
        <Contact />
      </section>
      <section id="footer" className="h-auto">
        <Footer />
      </section>
    </>
  );
}
