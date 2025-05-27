import React from "react";
import { motion } from "framer-motion";
import CollborationteamImg from "../assets/Images/thirdtemp_img1.png";
import CloudStorage from "../assets/Images/thirdtemp_img2.png";
import DataAnalytics from "../assets/Images/thirdtemp_img3.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const buttonGlow = {
  rest: {
    boxShadow: "0 0 8px rgba(34,197,94, 0.7), 0 0 20px rgba(34,197,94, 0.4)",
    scale: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  hover: {
    boxShadow: "0 0 12px rgba(34,197,94, 1), 0 0 30px rgba(34,197,94, 0.7)",
    scale: 1.05,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const ThirdTemplate = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-green-100 via-white to-green-200">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row md:space-x-12 space-y-10 md:space-y-0 items-center justify-between">
        {/* Col 1 */}
        <motion.div
          className="flex flex-col items-center md:items-start md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left leading-tight">
            Our Features you can get
          </h2>
          <motion.img
            src={CollborationteamImg}
            alt="Collaboration Team"
            className="mb-6 max-w-full h-auto rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <h4 className="text-xl font-semibold mb-2">Collaboration Teams</h4>
          <p className="text-gray-700 text-center md:text-left max-w-md leading-relaxed">
            Handle projects together with your team virtually and efficiently.
          </p>
        </motion.div>

        {/* Col 2 */}
        <motion.div
          className="flex flex-col items-center md:items-start md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <p className="text-gray-700 mb-6 max-w-md text-center md:text-left leading-relaxed">
            We offer a variety of features designed to help increase your
            productivity at work and manage your projects easily.
          </p>
          <motion.img
            src={CloudStorage}
            alt="Cloud Storage"
            className="mb-6 max-w-full h-auto rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <h4 className="text-xl font-semibold mb-2">Cloud Storage</h4>
          <p className="text-gray-700 max-w-md text-center md:text-left leading-relaxed">
            No need to worry about storage—we provide up to 2 TB of secure cloud
            storage.
          </p>
        </motion.div>

        {/* Col 3 */}
        <motion.div
          className="flex flex-col items-center md:items-start md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.button
            className="bg-green-400 text-white font-semibold px-8 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400"
            variants={buttonGlow}
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            aria-label="Get Started"
          >
            Get Started
          </motion.button>
          <motion.img
            src={DataAnalytics}
            alt="Data Analytics"
            className="my-6 max-w-full h-auto rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <h4 className="text-xl font-semibold mb-2">Daily Analytics</h4>
          <p className="text-gray-700 max-w-md text-center md:text-left leading-relaxed">
            We provide useful information daily to help you make better
            decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ThirdTemplate;
