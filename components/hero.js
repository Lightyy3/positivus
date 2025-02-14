"use client";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  useGSAP(() => {
    gsap.to("#consult", {
      opacity: 1,
      delay: 1,
    });
    gsap.to("#p", {
      opacity: 1,
      delay: 1.5,
      y: 0,
    });
    gsap.to("#img", {
      opacity: 1,
      delay: 1.5,
      y: 0,
      // x: 50, // Move 20px right
      duration: 1, // 1 second duration
      // repeat: -1, // Infinite repeat
      yoyo: true, // Move back and forth

      ease: "circ.in", // Smooth transition
    });
  }, []);
  return (
    <>
      <section className="hero bg-white py-16 md:py-24 ">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center">
          <div className="lg:w-1/2 ">
            <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
              Navigating the digital landscape for success
            </h1>
            <p
              id="p"
              className="mt-4 text-gray-600 text-lg md:text-xl opacity-0 translate-y-20"
            >
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation
            </p>

            <div className="mt-6 flex space-x-4 items-center ">
              <Link
                href="/Quote"
                id="consult"
                className="bg-black hover:bg-lime-400 text-white text-2xl px-6 py-3 text-center rounded-3xl opacity-0"
              >
                Book a consultation
              </Link>
            </div>
          </div>

          <div
            id="img"
            className="flex justify-center mt-12 lg:mt-0 lg:w-1/2 max-w-screen-xl opacity-0 trnaslate-y-20"
          >
            <img src={`/images/9.png`} className="h-64" />
          </div>
        </div>
      </section>
    </>
  );
}
