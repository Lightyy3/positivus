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

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // Store formData in localStorage or pass it through query parameters
  //     const storedData = JSON.parse(localStorage.getItem("requests")) || [];
  //     storedData.push(formData);
  //     localStorage.setItem("requests", JSON.stringify(storedData));

  //     // Redirect to RequestList page
  //     router.push("/List");
  //   };

  //   async function shareItem(formData) {
  //     "use server";

  //     const item = {
  //       name: formData.get("name"),
  //       email: formData.get("email"),
  //       service: formData.get("service"),
  //       details: formData.get("details"),
  //       budget: formData.get("budget"),
  //     };
  //   }

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
              className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
            className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
            className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
            className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mt-8 text-center">
          <button className="bg-green-600 text-white px-8 py-4 text-lg rounded-full hover:bg-green-700 ">
            Submit Request
          </button>
        </div>
      </form>
    </>
  );
}