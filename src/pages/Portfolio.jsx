import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function Portfolio() {
  const ourProjects = [
    {
      title: "Apex Consulting – Business Website",
      link: "https://apexconsulting.online/",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      description:
        "A professional consulting website designed to showcase services, expertise, and brand presence."
    }
  ];

  const demoProjects = [
    {
      title: "Urban Bites – Restaurant Website",
      image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9"
    },
    {
      title: "BlueWave Hotel – Hotel Website",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
    },
    {
      title: "Glow Salon – Salon Website",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
    }
  ];

  return (
    <PageWrapper>
      {/* PORTFOLIO BANNER */}
      <motion.section
        className="page-banner portfolio-banner"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Our Portfolio</h1>
        <p>Real projects and demos showcasing our expertise</p>
      </motion.section>

      <div className="page">
        {/* OUR PROJECTS */}
        <h2 className="section-title">Our Projects</h2>

        <div className="portfolio-grid">
  {ourProjects.map((project, index) => (
    <motion.div
      key={index}
      className="portfolio-card"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -8 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
    >
      {/* CLICKABLE IMAGE ONLY */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={project.image}
          alt={project.title}
          className="portfolio-img"
        />
        
      </a>

      {/* NON-CLICKABLE CONTENT */}
      <div className="portfolio-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
              <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      ><span className="portfolio-link">View Live Website →</span></a>
      </div>
    </motion.div>
  ))}
</div>


        {/* DEMO PROJECTS */}
        <h2 className="section-title" style={{ marginTop: "80px" }}>
          Demo Projects
        </h2>

        <div className="portfolio-grid">
          {demoProjects.map((project, index) => (
            <motion.div
              key={index}
              className="portfolio-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.04, y: -6 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-img"
              />
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>
                  Demo project created to showcase NexWeb’s design and
                  development capabilities.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
