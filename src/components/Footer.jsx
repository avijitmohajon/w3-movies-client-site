import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaFilm } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.footer 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="footer footer-center bg-base-300 pt-10 pb-6 text-base-content relative overflow-hidden"
    >
      

      <div className="max-w-7xl mx-auto px-4">
        <motion.aside variants={itemVariants} className="mb-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center mb-2">
              <FaFilm className="text-3xl md:text-4xl mr-2 text-primary" />
              <span className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                W3 <span className="text-lg md:text-2xl">Movies</span>
              </span>
            </div>
            <p className="text-lg italic text-center">
              "Bringing stories to life, one frame at a time"
            </p>
          </motion.div>
        </motion.aside>

        <motion.div 
          variants={itemVariants}
          className="border-x-4 border-base-content rounded-2xl px-4 md:px-8 py-6 mb-6"
        >
          <motion.nav 
            variants={itemVariants}
            className="flex flex-col items-center gap-4 mb-6"
          >
            <h2 className="text-xl font-bold">Explore More:</h2>
           <div className="flex flex-wrap justify-center gap-4 md:gap-8">
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    <Link
      className="link link-hover text-lg hover:text-primary transition-colors"
      to="/release"
    >
       New Releases
    </Link>
  </motion.div>

  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    <Link
      className="link link-hover text-lg hover:text-primary transition-colors"
      to="#"
    >
      Reviews
    </Link>
  </motion.div>

  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    <Link
      className="link link-hover text-lg hover:text-primary transition-colors"
      to="#"
    >
      Privacy Policy
    </Link>
  </motion.div>

  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    <Link
      className="link link-hover text-lg hover:text-primary transition-colors"
      to="#"
    >
      About Us
    </Link>
  </motion.div>
</div>

          </motion.nav>

          <motion.nav 
            variants={itemVariants}
            className="border-dotted border-t-2 border-base-content pt-6"
          >
            <motion.p 
              whileHover={{ scale: 1.05 }}
              className="text-lg text-center mb-6"
            >
              Stay Connected With Us:
            </motion.p>
            <div className="flex justify-center gap-6">
              {[
                { icon: <FaFacebook size={24} />, url: "https://www.facebook.com/profile.php?id=100039609890568" },
                { icon: <FaXTwitter size={24} />, url: "https://x.com/AJ_AVI_JIT" },
                { icon: <FaYoutube size={24} />, url: "https://www.youtube.com/@SuvroShuvoLyrics" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2,
                    color: '#9cff5f'
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl hover:text-primary transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="border-t-2 border-base-content pt-4 w-full text-center"
        >
          Copyright © {currentYear} - All rights reserved
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;