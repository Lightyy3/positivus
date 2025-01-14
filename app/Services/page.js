import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

export default function Services() {
  const plans = [
    {
      title: "Starter",
      price: "$199/month",
      features: [
        "Custom Strategy Development",
        "Search Engine Optimization",
        "Basic Analytics and Reporting",
      ],
    },
    {
      title: "Professional",
      price: "$499/month",
      features: [
        "Custom Strategy Development",
        "Search Engine Optimization",
        "Social Media Communication",
        "Content Marketing",
        "Detailed Analytics and Reporting",
      ],
    },
    {
      title: "Enterprise",
      price: "$999/month",
      features: [
        "Custom Strategy Development",
        "Search Engine Optimization",
        "Social Media Communication",
        "Content Marketing",
        "Video Production and Marketing",
        "Dedicated Account Manager",
        "Priority Support",
      ],
    },
  ];
  return (
    <>
      <Header />
      <div className=" py-16 px-8 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Services and Pricing Plans
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Choose a plan that best fits your business needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-3xl border p-6 flex flex-col"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4 break-words">
                  {plan.title}
                </h3>
                <p className="text-2xl md:text-3xl font-extrabold text-green-600 mb-6 break-words text-center  max-w-full md:max-w-lg">
                  {plan.price}
                </p>
                <ul className="flex-1 text-gray-600 space-y-3 mb-6 break-words">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center break-words pr-2"
                    >
                      <svg
                        className="w-5 h-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/Quote"
                  className="bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
}
