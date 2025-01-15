"use client";
import { useState, useEffect } from "react";

export default function Logo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "/images/28.png",
    "/images/33.png",
    "/images/32.png",
    "/images/31.png",
    "/images/29.png",
    "/images/30.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Slide changes every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="bg-white mt-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-0">
          <div className="flex items-center">
            <h2 className="hidden sm:block text-2xl text-white bg-green-500 p-6 rounded-3xl">
              Check Out Our Partners
            </h2>

            <div className="flex-1 relative overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full flex justify-center items-center"
                  >
                    <img src={slide} className="h-32" />
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full ${
                      currentIndex === index ? "bg-green-600" : "bg-gray-400"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
