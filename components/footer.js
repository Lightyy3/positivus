import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex space-x-4 mt-2">
            {/* <img src="/images/100.svg" alt="Logo" className="h-8" /> */}
            <Link href="/" className="text-2xl font-bold text-white">
              Positivus
            </Link>
          </div>
          <button className="bg-lime-400 text-black px-4 py-2 rounded-md font-medium">
            Contact Us
          </button>
          <p>
            Email:{" "}
            <a href="mailto:info@positivus.com" className="text-lime-400">
              info@positivus.com
            </a>
          </p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 1234 Main St, Townsville City, Industry State 12345</p>
        </div>

        <div className="flex flex-col gap-2 md:gap-4">
          {/* <div className="flex gap-6">
            <Link href="/About" className="hover:underline">
              About us
            </Link>
            <Link href="/Services" className="hover:underline">
              Services
            </Link>
            <Link href="/Usecases" className="hover:underline">
              Use Cases
            </Link>
            <Link href="/Request" className="hover:underline">
              Request
            </Link>
            <Link href="/Blog" className="hover:underline">
              Blog
            </Link>
          </div> */}
          <div className="flex gap-4 mt-4">
            <Link href="#">
              <Image
                src="/images/107.png"
                alt="LinkedIn"
                width={36}
                height={36}
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/106.png"
                alt="Facebook"
                width={36}
                height={36}
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/105.png"
                alt="Twitter"
                width={36}
                height={36}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4  mt-4 rounded-md">
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded-md text-black"
          />
          <button className="bg-lime-400 text-black px-4 py-2 rounded-md font-medium">
            Subscribe to news
          </button>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400">
        <p>
          &copy; 2025 Positivus. All Rights Reserved.{" "}
          <Link href="/privacy-policy" className="underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
