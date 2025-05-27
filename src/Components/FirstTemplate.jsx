import React from "react";
import "../index.css";
import { motion } from "framer-motion";
import FirstTempImg from "../assets/Images/Bicass_img1.png";
import Unsplash from "../assets/Images/unsplash.png";
import Notion from "../assets/Images/notion.png";
import Intercom from "../assets/Images/intercom.png";
import Descript from "../assets/Images/descript.png";
import Grammerly from "../assets/Images/grammerly.png";

const FirstTemplate = () => {
  return (
    <section className="py-10 px-4 bg-gradient-to-br from-green-100 via-white to-green-200">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            We're here to <br /> Increase your{" "}
            <span className="text-green-500">Productivity</span>
          </h1>
          <p className="py-4 text-gray-700">
            Let’s make your work more organized and easily using the Taskio
            Dashboard with many of the latest features in managing work every
            day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <button className="bg-green-400 text-white px-5 py-2 rounded font-semibold hover:bg-green-500 transition duration-300">
              Try free trial
            </button>
            <button className="text-green-500 font-semibold hover:underline glow-text">
              View Demo
            </button>
          </div>
        </motion.div>

        {/* Right Image with Floating Elements */}
        <motion.div
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={FirstTempImg}
            alt="Hero Illustration"
            className="w-full max-w-md mx-auto relative z-10 bg-green-300 p-2 rounded-xl"
          />
          {/* Floating Elements */}
          <div className="absolute top-10 left-10 bg-white shadow-2xl z-10 rounded-xl px-3 py-7  text-sm font-medium">
            $450.00{" "}
            <button className="ml-2 bg-green-400 text-white px-2 py-1 rounded">
              Send
            </button>
          </div>
          <div className="absolute bottom-10 left-7 z-10 bg-white  px-3 py-7 rounded-xl shadow-2xl text-sm font-medium">
            Total income: $245.00
          </div>
          <div className="absolute top-1/2 right-0 bg-gradient-to-br from-gray-800 to-black text-white px-4 py-12 rounded-lg shadow z-10 rotate-45">
            Credit Card
            <br />
            **** 1234
          </div>
        </motion.div>
      </div>

      {/* Logos Section */}
      <div className="py-10">
        <h4 className="text-xl font-bold text-center">
          More than 25,000 teams use Collabs
        </h4>
        <div className="flex flex-wrap justify-center items-center gap-6 py-6">
          <div className="flex gap-2 items-center">
            <img src={Unsplash} width={50} alt="Unsplash" />
            <span>Unsplash</span>
          </div>
          <div className="flex gap-2 items-center">
            <img src={Notion} width={30} alt="Notion" />
            <span>Notion</span>
          </div>
          <div className="flex gap-2 items-center">
            <img src={Intercom} width={30} alt="Intercom" />
            <span>Intercom</span>
          </div>
          <div className="flex gap-2 items-center">
            <img src={Descript} width={30} alt="Descript" />
            <span>Descript</span>
          </div>
          <div className="flex gap-2 items-center">
            <img src={Grammerly} width={30} alt="Grammerly" />
            <span>Grammerly</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstTemplate;
