"use client";

import { useState } from "react";
import { shareItem } from "@/lib/actions";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    details: "",
    budget: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <form action={shareItem}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
              required
            />
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <label className="text-lg font-medium text-gray-700 mb-2">
            Service Type
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
            required
          >
            <option value="">Select a service</option>
            <option>SEO Services</option>
            <option>Social Media Marketing</option>
            <option>Content Creation</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex flex-col mt-6">
          <label className="text-lg font-medium text-gray-700 mb-2">
            Project Details
          </label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleInputChange}
            placeholder="Describe your project..."
            rows="6"
            className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
            required
          ></textarea>
        </div>
        <div className="flex flex-col mt-6">
          <label className="text-lg font-medium text-gray-700 mb-2">
            Estimated Budget
          </label>
          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            placeholder="Enter your budget (optional)"
            className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
          />
        </div>
        <div className="mt-8 text-center ">
          <button className="bg-lime-400 text-black px-2 xs:px-8 p-4 text-lg rounded-full hover:bg-lime-500 max-w-screen-xl mx-auto">
            Submit Request
          </button>
        </div>
      </form>
    </>
  );
}
