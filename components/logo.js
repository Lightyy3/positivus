"use client";
import { useState } from "react";

import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Logo() {
  useGSAP(() => {
    gsap.to("#logo", {
      opacity: 1,
      delay: 1.5,
      y: 0,
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "/images/28.png",
    "/images/33.png",
    "/images/32.png",
    "/images/31.png",
    "/images/29.png",
    "/images/30.png",
  ];

  // State-based timing logic
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNextSlide = () => {
    setIsAnimating(true); // Start animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Move to the next slide
      setIsAnimating(false); // End animation after the transition
    }, 3000); // Delay time for slide change
  };

  // Trigger automatic slide change after rendering
  if (!isAnimating) {
    handleNextSlide();
  }

  return (
    <section className="bg-white mt-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-0">
          <div className="flex items-center">
            {/* <h2 className="hidden sm:block text-2xl text-white bg-green-500 p-6 rounded-3xl">
              Check Out Our Partners
            </h2> */}

            <div
              id="logo"
              className="flex-1 relative overflow-hidden opacity-0 translate-y-20"
            >
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
                      currentIndex === index ? "bg-lime-400" : "bg-gray-400"
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
