import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

function Skills() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const paraRef = useRef(null);

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
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      lineRef.current,
      { width: "0%", opacity: 0 },
      {
        width: "50%",
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
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.9,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
  return (
    <section ref={sectionRef} className="py-section-py px-section-px">
      <div className="max-w-[var(--container-max)] mx-auto flex flex-col items-center justify-center ">
        <div className="mb-10 p-4 justify-center items-center">
          <h2
            ref={titleRef}
            className=" text-4xl md:text-5xl lg:text-6xl font-thin text-center text-heading opacity-0"
          >
            Capabilities
          </h2>
          <div
            ref={lineRef}
            className="w-0 h-1 bg-gradient-to-r from-primary to-primary-hover mx-auto my-4 opacity-0"
          ></div>
          <p
            ref={paraRef}
            className="text-lg md:text-xl lg:text-2xl max-w-2xl text-center text-paragraph mt-2 w-fit "
          >
            My passion and goal is to help you make your business standout.
          </p>
        </div>
        <div className="w-[100%] ">
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 0.3,
                duration: 1.3,
              }}
              className="bg-[var(--card-bgs)] p-6 rounded-[var(--card-radius)] shadow-[var(--card-shadow)] hover:shadow-xl transition-shadow duration-300 border border-border w-80 md:w-96 sm:w-full   "
            >
              <h1 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-accent mb-2">
                01.
              </h1>
              <h2 className="text-lg sm:text-sm md:text-xl lg:text-2xl font-medium mb-3">
                Responsive Design
              </h2>
              <p className="text-paragraph text-sm leading-relaxed">
                Creating layouts that adapt seamlessly to all screen sizes.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 0.4,
                duration: 1.4,
              }}
              className="bg-[var(--card-bgs)] p-6 rounded-[var(--card-radius)] shadow-[var(--card-shadow)] hover:shadow-xl transition-shadow duration-300 border border-border w-80 md:w-96 sm:w-full   "
            >
              <h1 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-accent mb-2">
                02.
              </h1>
              <h2 className="text-lg sm:text-sm md:text-xl lg:text-2xl font-medium mb-3">
                Frontend Development
              </h2>
              <p className="text-paragraph text-sm leading-relaxed">
                Building dynamic, interactive UIs with React and Next.js.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 0.5,
                duration: 1.5,
              }}
              className="bg-[var(--card-bgs)] p-6 rounded-[var(--card-radius)] shadow-[var(--card-shadow)] hover:shadow-xl transition-shadow duration-300 border border-border w-80 md:w-96 sm:w-full  "
            >
              <h1 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-accent mb-2">
                03.
              </h1>
              <h2 className="text-lg sm:text-sm md:text-xl lg:text-2xl font-medium mb-3">
                UI/UX Design
              </h2>
              <p className="text-paragraph text-sm leading-relaxed">
                Designing intuitive, user-centered interfaces in Figma.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 0.6,
                duration: 1.6,
              }}
              className="bg-[var(--card-bgs)] p-6 rounded-[var(--card-radius)] shadow-[var(--card-shadow)] hover:shadow-xl transition-shadow duration-300 border border-border w-80 md:w-96 sm:w-full   "
            >
              <h1 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-accent mb-2">
                04.
              </h1>
              <h2 className="text-lg sm:text-sm md:text-xl lg:text-2xl font-medium mb-3">
                Webflow Specialist
              </h2>
              <p className="text-paragraph text-sm leading-relaxed">
                Building clean, responsive websites without code using Webflow.
              </p>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 0.7,
                duration: 1.7,
              }}
              className="bg-[var(--card-bgs)] p-6 rounded-[var(--card-radius)] shadow-[var(--card-shadow)] hover:shadow-xl transition-shadow duration-300 border border-border w-80 md:w-96 sm:w-full  "
            >
              <h1 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-accent mb-2">
                05.
              </h1>
              <h2 className="text-lg sm:text-sm md:text-xl lg:text-2xl font-medium mb-3">
                API Integration
              </h2>
              <p className="text-paragraph text-sm leading-relaxed">
                Connecting apps with external data using REST and GraphQL APIs.
              </p>
            </motion.div>

            {/* Card 6 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 0.8,
                duration: 1.8,
              }}
              className="bg-[var(--card-bgs)] p-6 rounded-[var(--card-radius)] shadow-[var(--card-shadow)] hover:shadow-xl transition-shadow duration-300 border border-border w-80 md:w-96 sm:w-full  "
            >
              <h1 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-accent mb-2">
                06.
              </h1>
              <h2 className="text-lg sm:text-[1rem]  md:text-xl lg:text-2xl font-medium mb-3">
                Performance Optimization
              </h2>
              <p className="text-paragraph text-sm leading-relaxed">
                Improving web speed and accessibility for a better user
                experience.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
