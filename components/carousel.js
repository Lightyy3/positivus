"use client";
import { useState } from "react";

export default function Carousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <>
      <section className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col items-center space-y-8">
            {/* Testimonial Card */}
            <div className="relative bg-gray-800 rounded-xl p-6 shadow-lg max-w-3xl text-center">
              <p className="text-lg font-light ">
                {testimonials[currentIndex].text}
              </p>
              <div className="mt-6">
                <h4 className="font-semibold">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-gray-400">
                  {testimonials[currentIndex].title}
                </p>
              </div>
              {/* Green Border */}
              <div className="absolute inset-0 border-2 border-lime-400 rounded-xl "></div>
            </div>

            {/* Navigation and Indicators */}
            <div className="flex items-center justify-between w-full max-w-xs">
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-5 h-5 rotate-180"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Star Indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-4 h-4 rounded-full ${
                      index === currentIndex ? "bg-white" : "bg-gray-500"
                    }`}
                  ></div>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-5 h-5"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
