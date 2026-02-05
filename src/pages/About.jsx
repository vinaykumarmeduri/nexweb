import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      {/* ABOUT BANNER */}
      <motion.section
        className="page-banner about-banner"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>About NexWeb</h1>
        <p>Who we are & why businesses trust us</p>
      </motion.section>

      {/* ABOUT CONTENT */}
      <div className="page">
        <p>
          NexWeb is a freelance web development team focused on building
          high-quality websites for local and growing businesses.
        </p>

        <p>
          We help businesses attract customers online with clean design,
          fast performance, and modern technology.
        </p>

        {/* MISSION & VISION */}
        <motion.div
          className="mv-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } }
          }}
        >
          {/* MISSION */}
          <motion.div
            className="mv-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="mv-icon">➤</div>
            <h2>Our Mission</h2>
            <p>
              To deliver affordable, reliable, and effective websites that
              help businesses grow digitally.
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            className="mv-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="mv-icon">👁</div>
            <h2>Our Vision</h2>
            <p>
              To become a trusted web partner for small and medium
              businesses worldwide.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
