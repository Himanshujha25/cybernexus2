import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaChevronDown,
  FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaCloud, FaPaintBrush,
} from "react-icons/fa";
import {
  SiMongodb, SiTailwindcss, SiExpress, SiDocker, SiFigma, SiJavascript,
} from "react-icons/si";

// Icons map
const skillIcons = {
  React: <FaReact className="text-cyan-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  Express: <SiExpress className="text-gray-400" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  Docker: <SiDocker className="text-blue-400" />,
  "CI/CD": <FaCloud className="text-purple-400" />,
  Figma: <SiFigma className="text-pink-400" />,
  "UI/UX": <FaPaintBrush className="text-yellow-200" />,
};

// Developer info
const team = [
  {
    name: "Frontend Developer",
    image: "https://imgs.search.brave.com/LtxOvPaJKCzmRuRIWOq7Dszis3MzyWQWiSjhvrcR2_o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZ2V0aW1nLmFp/L21lZGlhL2ltZy1I/TFljVDFxcW1oU1Zl/Y3hUS2taN0cuanBl/Zw",
    description: "Skilled in crafting responsive, high-performance user interfaces using React.js and Tailwind CSS — delivering seamless, interactive, and visually polished web experiences across all device",
    experience: "2+ years experience",
    skills: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    socials: {
      github: "https://github.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Backend Developer",
    image: "https://imgs.search.brave.com/jrVPEUsBZHeOKh_rsFbBpyBh5FbINuuiw3tC7SoScnE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZ2V0aW1nLmFp/L21lZGlhL2dldGlt/Z19haV9pbWcteWVD/YkthcXlUd01XSE5v/YzRJdkdELmpwZWc",
    description: "Expert in building secure, scalable, and high-performance server-side architectures using Node.js, Express, and modern databases — ensuring reliability, clean APIs, and seamless backend operations.",
    experience: "1.5+ years experience",
    skills: ["Node.js", "Express", "MongoDB"],
    socials: {
      github: "https://github.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "Full Stack Developer",
    image: "https://imgs.search.brave.com/IrjgiyF3I-oFw4LF97bz6b6xV2BPgdlEvUPK_-y1KAM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZ2V0aW1nLmFp/L21lZGlhL2ltZy1x/Z0tlOFRxUXJKZzJy/R1dnek9DTXcuanBl/Zw",
    description: "Delivers end-to-end MERN stack solutions—combining MongoDB, Express, React, and Node.js—to build scalable, real-world web applications that drive performance, usability, and business results.",
    experience: "2+ years experience",
    skills: ["React", "Node.js", "MongoDB", "Express", "Docker"],
    socials: {
      github: "https://github.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
  },
  {
    name: "DevOps Engineer",
    image: "https://imgs.search.brave.com/e0Xu-JmfomgzbRvSW1LCpjrTT30HeMb_dhBTB11jaPE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZ2V0aW1nLmFp/L21lZGlhL2ltZy1l/WXRYT0hrWjB6cVky/cFNqeEdLU1cuanBl/Zw",
    description: "Automates seamless cloud deployments and CI/CD pipelines using tools like Docker, GitHub Actions, and AWS—ensuring rapid delivery, version control, and zero-downtime production releases.",
    experience: "1+ years experience",
    skills: ["Docker", "CI/CD", "AWS"],
    socials: {
      github: "https://github.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
  },
];

const DeveloperCard = ({ dev }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="bg-zinc-900/50 text-white overflow-hidden shadow-md hover:shadow-lg transition-all"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={dev.image}
        alt={`Profile photo of ${dev.name}`}
        loading="lazy"
        className="w-full h-60 object-cover"
      />
      <div className="p-4 space-y-2 border-t border-zinc-700">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl text-zinc-200 font-bold">{dev.name}</h3>
            <p className="text-sm text-gray-400">{dev.experience}</p>
          </div>
          <FaChevronDown
            className={`text-gray-400 cursor-pointer transition-transform ${expanded ? "rotate-180" : ""}`}
            onClick={() => setExpanded(!expanded)}
          />
        </div>
        <p className="text-gray-400 text-xs">{dev.description}</p>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-2 space-y-1 text-xs text-gray-300"
            >
              {dev.skills.map((skill, i) => (
                <li key={i} className="flex items-center gap-2">{skillIcons[skill]} {skill}</li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="flex gap-3 mt-4 text-md">
          <a
            href={dev.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub className="hover:text-zinc-500" />
          </a>
          <a
            href={dev.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
          >
            <FaTwitter className="hover:text-zinc-300" />
          </a>
          <a
            href={dev.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="hover:text-blue-400" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const DeveloperTeamSection = () => {
  return (
    <section id="services" className="bg-gradient-to-b from-gray-900 to-black py-20 px-4 sm:px-8 text-white border-t-1 border-zinc-800">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-30 items-start">
        
        {/* Left Large Trust Section */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-5  leading-none bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            Hardest Working Freelancers <br />
            Trusted, Reliable, Best Quality.
          </h2>
          <p className="text-base sm:text-md border p-4  border-zinc-800 rounded-lg text-gray-300 leading-relaxed text-balance">
            At CyberNexus, we don’t just develop websites — we craft digital experiences that leave a lasting impact. 
            We are not ordinary freelancers. We are a specialized, battle-tested team of full-stack developers, designers, 
            DevOps engineers, and cloud architects — each handpicked for technical excellence, strategic thinking, and 
            relentless commitment to quality.
            <br /><br />
            Whether it’s a complex SaaS platform, a real-time dashboard, or a stunning frontend interface, 
            we bring unmatched attention to performance, scalability, and user experience. Every project is 
            treated like a mission — from initial discovery to final deployment — with modern stacks, clean 
            code, and design systems that work across devices and audiences.
      We're not just coders or designers. We're problem solvers, storytellers, and builders of digital futures.
      <br /><br />
      Our mission isn't about trends — it's about timeless impact. We work for meaning, for mastery, and for those
            who believe in creating something that lasts.
            
             <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <a
              href="#contact"
              className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-800 transition-colors duration-300 text-white rounded-md text-sm sm:text-base font-semibold"
            >
              Hire Our Freelancers
            </a>
          </motion.div>
    </p>

        </motion.div>

        {/* Right Grid of Cards */}
        <motion.div
          className="lg:col-span-3 bg-zinc-900/50 p-5 gap-5 rounded-xl grid grid-cols-1 sm:grid-cols-2"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {team.map((dev, i) => (
            <DeveloperCard key={i} dev={dev} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperTeamSection;
