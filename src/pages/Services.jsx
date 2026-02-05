import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function Services() {
  const services = [
    {
      title: "Website Design & Development",
      icon: "🌐",
      text: "Modern, responsive, and fast-loading websites built to convert visitors into customers."
    },
    {
      title: "Restaurant Websites",
      icon: "🍽",
      text: "Menus, Google Maps integration, and WhatsApp ordering for local restaurants."
    },
    {
      title: "Hotel & Resort Websites",
      icon: "🏨",
      text: "Professional room showcases, galleries, and booking enquiry systems."
    },
    {
      title: "Salon & Spa Websites",
      icon: "💇",
      text: "Service listings, pricing, and appointment booking solutions."
    },
    {
      title: "Maintenance & Support",
      icon: "🛠",
      text: "Website updates, bug fixes, security checks, and long-term support."
    },
    {
      title: "SEO & Performance Optimization",
      icon: "🚀",
      text: "Speed optimization, on-page SEO, and performance improvements to rank better on Google."
    }
  ];

  return (
    <PageWrapper>
      {/* SERVICES BANNER */}
      <motion.section
        className="page-banner services-banner"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Our Services</h1>
        <p>Everything you need to grow your business online</p>
      </motion.section>

      {/* SERVICES CONTENT */}
      <div className="page">
        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{
                scale: 1.05,
                y: -10
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18
              }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageWrapper>
  );
}
