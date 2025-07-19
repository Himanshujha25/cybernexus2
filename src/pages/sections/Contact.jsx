import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import emailLottie from "../../assets/lotties/email.json"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const formValues = Object.fromEntries(formData.entries());
    console.log("📤 Sending this data to EmailJS:", formValues);

    emailjs
      .sendForm(
        "service_62jdiid",        
        "template_37ip728",       
        formRef.current,
        "okQYRQZKg96YTe1fg"      
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("Failed to send:", error);
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black border-t border-zinc-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-zinc-200 mb-4 tracking-tight">
            Let’s Build Something Great
          </h2>
          <p className="text-gray-400 max-w-4xl mx-auto text-lg">
            Whether you’ve got an idea, a project to build, or just wanna say
            hey — the team at{" "}
            <span className="text-blue-700 font-semibold">CyberNexus</span> is
            always just one message away.
          </p>
        </div>

        {/* Form + Lottie */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-zinc-900/20 border border-zinc-700 p-8 rounded-2xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                defaultValue=""
                className="w-full p-3 rounded-lg bg-zinc-900/50 text-white border border-zinc-800"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                defaultValue=""
                className="w-full p-3 rounded-lg bg-zinc-900/50 text-white border border-zinc-800"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                defaultValue=""
                className="w-full p-3 rounded-lg bg-zinc-900/50 text-white border border-zinc-800"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Lottie Animation */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="max-w-[1000px] w-full">
              <Lottie animationData={emailLottie} loop autoplay />
            </div>
          </div>
        </div>

        {/* Toast Container for Notifications */}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </section>
  );
};

export default Contact;
