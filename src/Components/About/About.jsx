// import React from "react";

// function About() {
//   return (
//     <section className="py-section-py px-section-px ">
//       <div className="max-w-[var(--container-max)] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-10 py-10"></div>
//     </section>
//   );
// }

// export default About;

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myImage from "../../assets/images/img.png";

function AboutUs() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const lineRef = useRef(null);
  const paraRef = useRef();
  const imageRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      titleRef.current,
      { y: 300, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      lineRef.current,
      { width: "0%", opacity: 0 },
      {
        width: "20%",
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      paraRef.current,
      { y: 200, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      paraRef.current,
      { y: 200, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      buttonRef.current,
      { y: 300, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-section-py px-section-px"
    >
      {/* Content */}
      <div
        className="w-full 
               max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[var(--container-max)] 
               mx-auto flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 "
      >
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl  font-thin text-center text-heading opacity-0"
        >
          About Me
        </h2>
        <div
          ref={lineRef}
          className="w-0 h-1 bg-gradient-to-r from-primary to-primary-hover mx-auto mt-0 opacity-0 "
        ></div>

        <div
          ref={introRef}
          className="w-full flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-12 opacity-0"
        >
          {/* Image */}
          <div ref={imageRef} className="w-full max-w-md">
            <img
              className="w-full h-auto max-h-[40rem] object-contain mix-blend-multiply mt-8"
              src={myImage}
              alt="Ema Kelechi"
            />
          </div>

          {/* Paragraph */}
          <div>
            <div>
              <p
                ref={paraRef}
                className="text-sm md:text-xl max-w-full md:max-w-full lg:max-w-[40rem] tracking-wider text-paragraph"
              >
                A UX/UI Designer, Frontend Developer, and Webflow Specialist
                with a physicist's precision and a computer scientist's logic.
                My journey began with Bachelor's and Master's degrees in
                Computer Science, where I mastered the art of transforming
                complex problems into elegant systems. Today, I fuse these
                technical roots with design sensibility to build digital
                experiences that are as functional as they are beautiful.
              </p>
            </div>
            <div className="mt-8">
              <a
                ref={buttonRef}
                href="https://drive.google.com/file/d/1gK-KtPax47f6ChLnzn0uEcRQGMd2UHds/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base lg:text-lg 
             text-white bg-primary hover:bg-primary-hover 
             transition-colors duration-300 
             py-3 px-4 md:py-4 md:px-6 lg:py-5 lg:px-8 
             rounded-xl md:rounded-2xl"
              >
                View My CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
