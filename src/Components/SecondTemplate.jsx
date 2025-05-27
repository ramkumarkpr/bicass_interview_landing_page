import React from "react";
import { motion } from "framer-motion";
import Publishing from "../assets/Images/graph.png";
import Analytics from "../assets/Images/analytics.png";
import Enage from "../assets/Images/enage.png";
import StarRatings from "./StarRatings";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SecondTemplate = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-br from-green-100 via-white to-green-200">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
        {/* Left Text Section */}
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-bold mb-6">
            How we support our partner all over the world
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed">
            SaaS has become a common delivery model for many business
            applications, including office software, messaging software, payroll
            processing software, DBMS software, and management software.
          </p>

          {/* Star Ratings */}
          <StarRatings />
        </motion.div>

        {/* Right Features Section */}
        <motion.div
          className="md:w-1/2 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          {[
            {
              img: Publishing,
              title: "Publishing",
              desc: "Plan, collaborate, and publish your content that drives meaningful engagement and growth for your brand.",
            },
            {
              img: Analytics,
              title: "Analytics",
              desc: "Analyze your performance and create gorgeous reports.",
            },
            {
              img: Enage,
              title: "Engagement",
              desc: "Quickly navigate and engage with your audience.",
            },
          ].map(({ img, title, desc }, i) => (
            <div key={i} className="flex items-start gap-4">
              <img src={img} alt={title} width={50} height={50} />
              <div>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SecondTemplate;
