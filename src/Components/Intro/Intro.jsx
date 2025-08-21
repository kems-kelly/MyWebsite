import image from "../../assets/Images/img.png";
import { motion } from "framer-motion";

function Intro() {
  return (
    <section className="py-section-py px-section-px">
      <div className="max-w-[var(--container-max)] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-10 py-10">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 1.3,
                duration: 1.5,
              }}
              className=" bg-gradient-to-b from-primary to-heading bg-clip-text text-transparent text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6 "
            >
              Hey!, I'm Ema
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 1.6,
                duration: 1.5,
              }}
              className="text-xl md:text-1x1 lg:text-2xl text-paragraph max-w-2xl"
            >
              UX/UI Designer & Front-End Developer skilled in Webflow, React,
              Next.js, and Figma — creating digital products people love
            </motion.p>
          </div>
          <div className="mt-4">
            <motion.a
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 2.0,
                duration: 1.5,
              }}
              href="#contact"
              className="bg-gradient-to-b from-primary to-heading
             hover:from-heading hover:to-primary 
             text-sm md:text-base lg:text-lg 
             py-2 px-4 md:py-4 md:px-6 lg:py-5 lg:px-8 
             rounded-xl md:rounded-2xl
             transition-all duration-300 ease-in-out  text-white border-0 font-bold cursor-pointer"
            >
              Contact me
            </motion.a>
          </div>
        </div>

        {/* Image */}
        <div>
          <motion.img
            whileHover={{
              scale: 1.03,
              transition: { type: "spring", stiffness: 300, damping: 10 },
            }}
            whileInView={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            viewport={{
              margin: "-15%",
              once: false,
            }}
            src={image}
            alt="my profile"
            className="border-10 border-primary rounded-full shadow-2xl "
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
