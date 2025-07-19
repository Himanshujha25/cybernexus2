import React, { useState } from "react";
import { Card, CardContent, Icon } from "../components/Background";

const initialTestimonials = [
  {
    quote: "The full-stack solution delivered was nothing short of exceptional. From an intuitive UI to a reliable backend and seamless deployment — everything was handled with precision and care.",
    author: "Anjali Mehra",
    role: "CEO, RecipeNest"
  },
  {
    quote: "Partnering with CyberNexus was a game-changer. The attention to detail, testing, and performance blew us away.",
    author: "Akash Yadav",
    role: "CEO, TaskFlow"
  },
  {
    quote: "CyberNexus brought our SmartCV vision to life with a perfect blend of design and engineering. Highly recommended!",
    author: "Neha Sinha",
    role: "Product Lead, SmartCV"
  }
];

const Review = () => {
  const [testimonials, setTestimonials] = useState(() => {
    const saved = localStorage.getItem("cyber-reviews");
    return saved ? JSON.parse(saved) : initialTestimonials;
  });

  const [showModal, setShowModal] = useState(false);
  const [newReview, setNewReview] = useState({ quote: "", author: "", role: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.quote || !newReview.author || !newReview.role) return;

    const updated = [...testimonials, newReview];
    setTestimonials(updated);
    localStorage.setItem("cyber-reviews", JSON.stringify(updated));

    setNewReview({ quote: "", author: "", role: "" });
    setShowModal(false);
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 text-zinc-200">
      <div className="max-w-full mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-zinc-200 tracking-tight">What People Say</h2>
          <p className="text-gray-400 max-w-6xl mx-auto text-lg leading-relaxed">
            At CyberNexus, we believe that the voice of our clients and collaborators speaks louder than any advertisement. Their honest feedback, shared from real experiences, reflects the trust, transparency, and transformation we aim to deliver with every project. Here's what our partners have to say about working with us.
          </p>
        </div>

        {/* Continuous Scroll */}
        <div className="overflow-hidden w-full">
          <div className="scroll-track">
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <Card
                key={i}
                className="min-w-[270px] sm:min-w-[320px] md:min-w-[350px] lg:min-w-[380px] p-5 rounded-xl bg-gradient-to-br from-gray-900 to-black h-[300px] flex flex-col"
              >
                <CardContent className="flex flex-col h-full">
                  {/* Quote Section */}
                  <div className="flex-1 overflow-hidden">
                    <Icon className="text-4xl text-blue-400 mb-3">“</Icon>
                    <p className="text-gray-200 italic text-sm sm:text-base leading-relaxed line-clamp-6 overflow-hidden">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Author at Bottom */}
                  <div className="mt-auto flex items-center gap-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-zinc-900/50 rounded-full flex items-center justify-center text-blue-700 font-bold text-lg">
                      {testimonial.author.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <h4 className="text-zinc-100 font-semibold text-base sm:text-lg">{testimonial.author}</h4>
                      <p className="text-sm text-zinc-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Review Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowModal(true)}
            className="px-7 py-3 bg-blue-700 hover:bg-blue-800 text-white text-base font-medium rounded-full shadow-md"
          >
            Share Your Testimonial
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gradient-to-br to-gray-900 w-full max-w-xl mx-auto rounded-2xl shadow-2xl p-8 border border-zinc-900">
              <h3 className="text-zinc-300 text-2xl font-bold mb-6 text-center">Share Your Testimonial</h3>
              <form onSubmit={handleSubmit}>
                <textarea
                  placeholder="Write your feedback here..."
                  className="w-full p-4 rounded-lg bg-gray-900 text-white border border-gray-800 mb-5 focus:outline-none focus:ring-1 focus:ring-zinc-800"
                  rows="4"
                  value={newReview.quote}
                  onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                />
                <div className="flex flex-col sm:flex-row gap-4 mb-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-800 focus:outline-none focus:ring-1 focus:ring-zinc-800"
                    value={newReview.author}
                    onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Role/Company"
                    className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-800 focus:outline-none focus:ring-1 focus:ring-zinc-800"
                    value={newReview.role}
                    onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-5 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Scroll Animation Style */}
      <style>
        {`
          .scroll-track {
            display: flex;
            gap: 2rem;
            animation: scrollLeft 30s linear infinite;
            will-change: transform;
          }

          @keyframes scrollLeft {
            from { transform: translateX(0%); }
            to { transform: translateX(-100%); }
          }
        `}
      </style>
    </section>
  );
};

export default Review;
