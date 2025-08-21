import { useState } from "react";
import { animate, motion } from "framer-motion";
import { IoMenuOutline, IoClose } from "react-icons/io5";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY;
      animate(window.scrollY, y, {
        duration: 0.8,
        ease: "easeInOut",
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
      setIsOpen(false); // close mobile menu after clicking
    }
  };

  const links = [
    { id: "intro", label: "Intro" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className=" p-px-nav-px sm:px-container-px flex flex-row  gap-2 relative-6 w-full rounded-full bg-secondary text-white z-50 justify-between items-center px-nav-px">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          delay: 0.3,
          duration: 1.2,
        }}
        className="flex items-center py-nav-py pl-2"
      >
        <div className="h-10 w-10 rounded-xl bg-gradient-to-b from-primary to-heading flex items-center justify-center text-white font-bold text-xl mr-3">
          EK
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-primary to-heading bg-clip-text text-transparent">
          EmaKelly
        </span>
      </motion.div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 pr-4">
        {links.map((link, index) => (
          <motion.a
            key={link.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.7 + index * 0.2, // ✅ FIXED: index is defined now
            }}
            href={`#${link.id}`}
            onClick={(e) => handleSmoothScroll(e, link.id)}
            className="text-link hover:text-link-hover transition-colors group relative hover:font-bold duration-300"
          >
            {link.label}
            <div className="mx-auto bg-link-hover w-0 group-hover:w-full h-[2px] transition-all duration-300"></div>
          </motion.a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          delay: 0.3,
          duration: 1.2,
        }}
        className="md:hidden p-2 rounded-lg bg-primary/10"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <IoClose className="text-link hover:text-link-hover h-7 w-7" />
        ) : (
          <IoMenuOutline className="text-link hover:text-link-hover h-7 w-7" />
        )}
      </motion.button>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-30 left-0 w-full bg-secondary text-link flex flex-col items-center gap-6 py-6 md:hidden z-50 rounded-2xl"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleSmoothScroll(e, link.id)}
              className="hover:text-primary-hover text-lg group"
            >
              {link.label}
              <div className="mx-auto bg-link-hover w-0 group-hover:w-full h-[2px] transition-all duration-300"></div>
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
