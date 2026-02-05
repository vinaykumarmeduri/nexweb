import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home-hero">

      {/* HERO BANNER WITH OVERLAY */}
      <motion.section
        className="home-banner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* DARK OVERLAY */}
        <div className="home-overlay"></div>

        {/* HERO CONTENT */}
        <motion.div
          className="home-banner-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Websites That Help <span>Local Businesses</span> Grow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            NexWeb builds modern, fast, and mobile-friendly websites for
            restaurants, hotels, salons, and local businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/contact" className="btn hero-btn">
              Get a Free Website Quote
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* FEATURES */}
<motion.section
  className="features page"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }}
>
  {[
    "Affordable for Small Businesses",
    "Mobile & SEO Friendly",
    "Fast Delivery",
    "Ongoing Support"
  ].map((text, index) => (
    <motion.div
      key={index}
      className="feature-card"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{
        y: -12,
        scale: 1.04,
        boxShadow: "0px 25px 50px rgba(10, 37, 64, 0.25)"
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18
      }}
    >
      ✔ {text}
    </motion.div>
  ))}
</motion.section>

    </div>
  );
}
