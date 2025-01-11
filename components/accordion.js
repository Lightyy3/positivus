"use client";

import { useState } from "react";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleAccordion(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  const items = [
    {
      title: "Custom Strategy Development",
      description:
        "We analyze your business goals and objectives, target audience, and current marketing needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Search Engine Optimization",
      description:
        "Improve your website's visibility and ranking on search engines.",
    },
    {
      title: "Social Media Communication",
      description:
        "Engage with your audience on social media platforms effectively.",
    },
    {
      title: "Content Marketing",
      description:
        "Create and distribute valuable, relevant, and consistent content to attract and retain a clearly defined audience.",
    },
    {
      title: "Pay-Per-Click Advertising",
      description:
        "Drive targeted traffic to your website through paid advertising campaigns with measurable results.",
    },
    {
      title: "Email Marketing Campaigns",
      description:
        "Craft personalized email campaigns to nurture leads and build lasting customer relationships.",
    },
    {
      title: "Web Development",
      description:
        "Design and develop responsive and user-friendly websites that align with your brand and business goals.",
    },
    {
      title: "Analytics and Reporting",
      description:
        "Track your marketing performance with detailed analytics and actionable insights for optimization.",
    },
  ];

  return (
    <>
      <div className="max-w-3xl mx-auto mt-16 p-16">
        {items.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-md border-2 ${
              openIndex === index
                ? "border-green-500 bg-green-100"
                : "border-gray-300 bg-gray-50"
            } mb-4 `}
          >
            {/* Accordion Header */}
            <div
              className="flex justify-between  p-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3
                className={`text-lg font-semibold ${
                  openIndex === index ? "text-gray-900" : "text-gray-700"
                }`}
              >
                {item.title}
              </h3>
              <button
                className={`text-lg font-bold ${
                  openIndex === index ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {openIndex === index ? "-" : "+"}
              </button>
            </div>

            {/* Accordion Description */}
            {openIndex === index && (
              <div>
                {/* Delimiting Line */}
                <div className="p-4 text-gray-600 border-t-2 border-gray-300 mx-4">
                  <p>{item.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
