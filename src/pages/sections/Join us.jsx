import React from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "../components/Common";
import { CircleBackground } from "../components/Background";

const WhyJoinUsSection = () => {
  return (
    <section
      id="Join us"
      className="relative py-28 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      {/* Background Circle */}
      <CircleBackground size={500} top="30%" right="-250px" opacity={0.08} />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Hardest Work <span className="text-blue-700">Elite Results</span>{" "}
            Global Trust
          </h2>
          <p className="text-gray-400 mx-auto  text-lg sm:text-xl">
            We're a global team of freelancers, full-stack devs, designers, and
            engineers delivering tech with purpose. We don't outsource —{" "}
            <span className="font-semibold text-zinc-400">
              we own every line of code, every pixel, every deadline.
            </span>
          </p>
        </motion.div>

        {/* Outer Border */}
        <div className="p-10 sm:p-10  rounded-2xl border-1 bg-transparent border-gray-800 ">
          {/* Inner Video Container */}
          <div className="rounded-2xl overflow-hidden border border-zinc-900/50 ">
            {/* Gradient Overlay */}
            <div className="absolute inset-0  z-0 pointer-events-none" />

            <video
              src="/video/cybervid.mp4"
              type="video/mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[400px] sm:h-[550px] md:h-[550px] object-cover rounded-2xl"
              style={{
                filter: "brightness(0.5) contrast(1.1)",
              }}
              onLoadedMetadata={(e) => {
                try {
                  e.target.playbackRate = 0.95;
                } catch (err) {
                  console.error("Playback rate error:", err);
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUsSection;
