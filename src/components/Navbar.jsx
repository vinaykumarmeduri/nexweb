import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  return (
    <>
      {/* PREMIUM CONTACT BAR */}
      <motion.div
        className="top-contact-bar"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        📧
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=technologiesnexweb@gmail.com&su=NexWeb%20Website%20Enquiry"
  target="_blank"
  rel="noopener noreferrer"
>
  technologiesnexweb@gmail.com
</a>

      </motion.div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">

          {/* LOGO */}
          <Link to="/" className="logo-container">
            <img
              src="/src/assets/NexWeb_logo.png"
              alt="NexWeb Logo"
              className="logo-img"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="nav-links desktop">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          {/* HAMBURGER */}
          <div
            className={open ? "hamburger open" : "hamburger"}
            onClick={() => setOpen(!open)}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.ul
              className="nav-links mobile"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
              <li><NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink></li>
              <li><NavLink to="/portfolio" onClick={() => setOpen(false)}>Portfolio</NavLink></li>
              <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
