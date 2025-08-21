import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import imageKolofund from "../../assets/Images/kolofund.jpg";
import checkai from "../../assets/Images/check Ai.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Fintech Website",
      imageSrc: imageKolofund,
      summary:
        "A disciplined savings platform designed to help users build financial stability with ease.",
      link: "https://kolofunds.framer.website/",
      behance:
        "https://www.behance.net/gallery/232525501/KoloFund-Fintech-Savings-App",
      figma:
        "https://www.figma.com/proto/zkTIMSB81MjlyctqnP1Vwv?content-scaling=fixed&kind=proto&node-id=588-32559&page-id=87%3A23054&scaling=min-zoom&starting-point-node-id=588%3A32543&fuid=1161588336221085992",
    },
    {
      id: 2,
      title: "3D Gaming Website",
      imageSrc: checkai,
      summary:
        "Immersive 3D gaming landing page showcasing interactivity and futuristic design.",
      link: "https://yourwebsite.com/portfolio",
      behance: "https://www.behance.net/gallery/123456789/Portfolio",
      figma:
        "https://www.behance.net/gallery/186984891/Check-AI-An-AI-Bias-Detection-Tool-(UI-UX-Case-Study)/modules/1057299783",
    },
    {
      id: 3,
      title: "Startup App",
      imageSrc: imageKolofund,
      summary:
        "A clean and modern mobile-first design for a startup platform, focusing on usability.",
      link: "https://yourwebsite.com/portfolio",
      behance: "https://www.behance.net/gallery/123456789/Portfolio",
      figma: "https://www.figma.com/proto/example1",
    },
    {
      id: 4,
      title: "E-commerce Dashboard",
      imageSrc: checkai,
      summary:
        "An analytics-driven admin dashboard for managing orders, inventory, and customer insights.",
      link: "https://yourwebsite.com/ecommerce-dashboard",
      behance: "https://www.behance.net/gallery/987654321/Ecommerce-Dashboard",
      figma: "https://www.figma.com/proto/example2",
    },
    {
      id: 5,
      title: "Portfolio Redesign",
      imageSrc: imageKolofund,
      summary:
        "A sleek portfolio redesign with smooth animations, accessibility, and responsive layouts.",
      link: "https://yourwebsite.com/portfolio-redesign",
      behance: "https://www.behance.net/gallery/543216789/Portfolio-Redesign",
      figma: "https://www.figma.com/proto/example3",
    },
    {
      id: 6,
      title: "AI Productivity Tool",
      imageSrc: checkai,
      summary:
        "An AI-powered web app to automate tasks and improve workflow efficiency for teams.",
      link: "https://yourwebsite.com/ai-tool",
      behance: "https://www.behance.net/gallery/192837465/AI-Productivity-Tool",
      figma: "https://www.figma.com/proto/example4",
    },
  ];

  // GSAP refs
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      titleRef.current,
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      lineRef.current,
      { width: "0%", opacity: 0 },
      {
        width: "60%",
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      paraRef.current,
      { y: 80, opacity: 0, filter: "blur(6px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-section-py px-section-px bg-secondary"
    >
      <div className="max-w-[var(--container-max)] mx-auto flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="text-center">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-heading opacity-0"
          >
            Selected Works
          </h2>
          <div
            ref={lineRef}
            className="w-0 h-1 bg-gradient-to-r from-primary to-primary-hover mx-auto mt-4 opacity-0"
          ></div>
          <p
            ref={paraRef}
            className="text-lg md:text-xl lg:text-2xl text-paragraph mt-6 max-w-2xl mx-auto leading-relaxed opacity-0"
          >
            Here are some of my selected works I have done lately. Feel free to
            check them out.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-6 p-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: index * 0.2,
                duration: 1.2,
              }}
              viewport={{ once: false, margin: "-50px" }}
              className="w-80 md:w-96 sm:w-full rounded-xl overflow-hidden shadow-lg bg-white"
            >
              {/* Image + Overlay */}
              <div className="relative h-60">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-fit"
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-primary/60 flex flex-col items-center justify-center text-white p-6"
                >
                  <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                  <div className="flex flex-wrap gap-3 text-sm">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent-hover transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.behance && (
                      <a
                        href={project.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent-hover transition-colors"
                      >
                        Behance
                      </a>
                    )}
                    {project.figma && (
                      <a
                        href={project.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent-hover transition-colors"
                      >
                        Figma
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* ✅ Summary below the image */}
              <div className="p-6 bg-secondary">
                <h3 className="text-lg font-semibold text-heading mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-paragraph">{project.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
