import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaFigma, FaPaintBrush,
} from "react-icons/fa";
import {
  SiJavascript, SiMongodb, SiFirebase, SiTailwindcss, SiTypescript, SiDocker, SiFramer, SiAdobeaftereffects,
} from "react-icons/si";
import { GiCyberEye } from "react-icons/gi";
import { RiExpandUpDownFill } from "react-icons/ri";
import { Card } from "../components/Common";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" />, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" />, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-2xl" />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "React", icon: <FaReact className="text-cyan-400 text-2xl" />, url: "https://react.dev" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-2xl" />, url: "https://tailwindcss.com/docs" },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400 text-2xl" />, url: "https://www.typescriptlang.org/docs/",  },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" />, url: "https://nodejs.org/en/docs" },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-2xl" />, url: "https://www.mongodb.com/docs/" },
      { name: "Firebase", icon: <SiFirebase className="text-orange-400 text-2xl" />, url: "https://firebase.google.com/docs",  },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: <SiDocker className="text-blue-300 text-2xl" />, url: "https://docs.docker.com/",  },
      { name: "GitHub", icon: <FaGithub className="text-gray-400 text-2xl" />, url: "https://docs.github.com/en" },
      { name: "Kali Linux", icon: <GiCyberEye className="text-red-400 text-2xl" />, url: "https://www.kali.org/docs/" },
    ],
  },
  {
    title: "Design",
    skills: [
      { name: "Figma", icon: <FaFigma className="text-pink-400 text-2xl" />, url: "https://help.figma.com/hc/en-us" },
      { name: "UI/UX", icon: <FaPaintBrush className="text-yellow-200 text-2xl" />, url: "https://www.smashingmagazine.com/category/uxdesign/" },
    ],
  },
  {
    title: "Animation",
    skills: [
      { name: "Framer Motion", icon: <SiFramer className="text-white text-2xl" />, url: "https://www.framer.com/motion/" },
      { name: "After Effects", icon: <SiAdobeaftereffects className="text-purple-400 text-2xl" />, url: "https://helpx.adobe.com/after-effects/tutorials.html" },
    ],
  },
];

const TechStackSection = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const toggleCategory = (title) => setOpenCategory((prev) => (prev === title ? null : title));

  return (
    <section id="Tech" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900 border-t-1 border-zinc-900">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-semibold text-zinc-200 mb-4">Our Technology Stack</h2>
          <p className="text-gray-400 text-lg  mx-auto">
            Explore the tools, libraries, and platforms we use daily to craft scalable, performant, and stunning applications — from frontend to backend to DevOps.
          </p>
        </motion.div>

        {/* Category Lists */}
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Category Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-4">
              <h2 className="text-5xl sm:text-5xl font-semibold text-zinc-300">{cat.title}</h2>
              <RiExpandUpDownFill
                className={`text-zinc-400 text-3xl cursor-pointer transition-transform ${openCategory === cat.title ? "rotate-180" : ""}`}
                onClick={() => toggleCategory(cat.title)}
              />
            </div>

            {/* Skills List */}
            <AnimatePresence>
              {openCategory === cat.title && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-wrap gap-6"
                >
                  {cat.skills.map((skill, idx) => (
                    <motion.a
                      key={idx}
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="w-full sm:w-[48%] lg:w-[23%]"
                    >
                      <Card className="text-center group h-full flex flex-col cursor-pointer p-4">
                        <div className="w-16 h-16 rounded-full bg-blue-900 bg-opacity-50 mx-auto mb-4 border-2 border-blue-400 overflow-hidden p-1">
                          <div className=" bg-zinc-800/50 rounded-full h-full w-full flex items-center justify-center">
                            {skill.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-extrabold text-blue-600">{skill.name}</h3>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="text-md font-extrabold text-gray-500"
                        >
                          View Docs
                        </motion.button>
                      </Card>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
