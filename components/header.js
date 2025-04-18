"use client";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import gsap from "gsap";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoRef = useRef(null); // Create a reference for the logo

  const path = usePathname();
  const files = [
    { href: "/About", label: "About us" },
    { href: "/Services", label: "Services and Pricing" },
    { href: "/Usecases", label: "Use Cases" },
    { href: "/List", label: "Request List" },
    { href: "/Blog", label: "Blog" },
  ];

  useGSAP(() => {
    gsap.to(logoRef.current, {
      x: 150, // Move 20px right
      duration: 2, // 1 second duration
      repeat: -1, // Infinite repeat
      yoyo: true, // Move back and forth
      rotation: 360,
      ease: "bounce.out", // Smooth transition
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0  w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex  justify-between">
        <div className="flex space-x-4 mt-2">
          <img ref={logoRef} src="/images/110.svg" alt="Logo" className="h-8" />
          <Link href="/" className="text-xl font-bold text-gray-800">
            Positivus
          </Link>
        </div>
        <SignedIn>
          {/* </SignedIn> */}
          <nav className="hidden lg:flex space-x-10">
            {files.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  path === item.href
                    ? "text-lime-400 hover:text-lime-500 font-semibold border-b-2 border-lime-400 py-2"
                    : "text-gray-700 hover:text-lime-500 py-2"
                }
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/Quote"
              className={
                path === "/Quote"
                  ? "text-lime-400 hover:text-lime-500 font-semibold border-b-2 border-lime-400 py-2"
                  : "text-black border-black border-2  bg-lime-400 hover:bg-black hover:text-white py-2  rounded-full px-4"
              }
            >
              Request a quote
            </Link>
          </nav>
        </SignedIn>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          {/* <MobileNav /> */}
        </SignedIn>

        <SignedOut>
          <button asChild className="rounded-full" size="lg">
            <Link
              href="/sign-in"
              className="text-black border-black border-2  bg-lime-400 py-2 hover:bg-black hover:text-white rounded-full px-4"
            >
              Login
            </Link>
          </button>
        </SignedOut>
        <SignedIn>
          <button
            onClick={toggleMenu}
            className="lg:hidden flex text-gray-700 mt-3"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </SignedIn>
      </div>

      {isMenuOpen && (
        <nav className="lg:hidden bg-white shadow-md rounded-md">
          <div className="space-y-2 px-4 py-4">
            <hr className="w-full h-1 bg-lime-400" />
            {files.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-700 hover:text-lime-500 py-2 text-center"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/Quote"
              className="block bg-lime-400 text-white px-4 py-2 rounded-full hover:bg-lime-500 text-center"
            >
              Request a quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
