import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_f5kbbbm",     // ✅ Your Service ID
        "template_ipeomzp",    // ✅ Your Template ID
        formRef.current,
        "Gc3LU24zYMqMQARZZ"      // ⚠️ Replace with EmailJS Public Key
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <PageWrapper>
      {/* CONTACT BANNER */}
      <motion.section
        className="page-banner contact-banner"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Contact NexWeb</h1>
        <p>Let’s discuss your project and bring it to life</p>
      </motion.section>

      <div className="page">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* NAME */}
          <div className="input-group">
            <span className="input-icon">👤</span>
            <input name="name" type="text" placeholder="Your Name" required />
          </div>

          {/* EMAIL */}
          <div className="input-group">
            <span className="input-icon">📧</span>
            <input name="email" type="email" placeholder="Your Email" required />
          </div>

          {/* PHONE */}
          <div className="input-group">
            <span className="input-icon">📞</span>
            <input name="phone" type="tel" placeholder="Phone Number" required />
          </div>

          {/* BUSINESS TYPE */}
          <div className="input-group">
            <span className="input-icon">🏢</span>
            <select name="business" required>
              <option value="">Select Business Type</option>
              <option>Restaurant</option>
              <option>Hotel / Resort</option>
              <option>Salon / Spa</option>
              <option>Consulting / Corporate</option>
              <option>Startup</option>
              <option>Other</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div className="input-group textarea-group">
            <span className="input-icon">💬</span>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your project"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>

          {/* STATUS MESSAGE */}
          {status === "success" && (
            <p className="form-success">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="form-error">❌ Failed to send. Try again.</p>
          )}
        </motion.form>
      </div>
    </PageWrapper>
  );
}
