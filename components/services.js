import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Search engine optimization",
      bgColor: "bg-gray-100",
      textColor: "text-black-600  rounded ",
      icon: `/images/8.png`,
      descriptionColor: "text-black-600",
      titleBg: "bg-green-400 rounded-lg",
    },
    {
      title: "Pay-per-click advertising",
      bgColor: "bg-green-400",
      textColor: "text-black  rounded",
      icon: `/images/8.png`,
      descriptionColor: "text-black-600",
      titleBg: "bg-white rounded-lg",
    },
    {
      title: "Social Media Marketing",
      bgColor: "bg-gray-800",
      textColor: "text-black  rounded ",
      icon: `/images/8.png`,
      descriptionColor: "text-white",
      titleBg: "bg-white rounded-lg",
    },
    {
      title: "Email Marketing",
      bgColor: "bg-gray-100",
      textColor: "text-black rounded",
      icon: `/images/8.png`,
      descriptionColor: "text-black-600",
      titleBg: "bg-green-400 rounded-lg",
    },
    {
      title: "Content Creation",
      bgColor: "bg-green-400",
      textColor: "text-black rounded",
      icon: `/images/8.png`,
      descriptionColor: "text-black-600",
      titleBg: "bg-white rounded-lg",
    },
    {
      title: "Analytics and Tracking",
      bgColor: "bg-gray-800",
      textColor: "text-black rounded",
      icon: `/images/8.png`,
      descriptionColor: "text-white",
      titleBg: "bg-green-400 rounded-lg",
    },
  ];
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row  md:space-x-6 ">
          <h2 className="text-4xl font-bold text-gray-900  bg-green-500 p-2 rounded-xl">
            Services
          </h2>
          <p className="mt-4 md:mt-0 text-md text-gray-700 max-w-2xl">
            We provide a comprehensive suite of digital marketing solutions
            designed to help your business thrive in the online world. Explore
            our offerings below:
          </p>
        </div>

        <div className="mt-24 grid  md:grid-cols-2 gap-14">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex p-6 rounded-3xl border-2 border-black h-44 ${service.bgColor}`}
            >
              <div>
                <div className="space-x-4">
                  <h3
                    className={`text-2xl  relative font-semibold p-2 rounded-3xl max-w-44 ${service.textColor} ${service.titleBg}`}
                  >
                    {service.title}
                  </h3>
                </div>
                <Link
                  href="/Usecases"
                  className={`flex items-center mt-4 ml-1 text-xl ${service.descriptionColor} hover:text-green-300 space-x-2`}
                >
                  <span>Learn more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 mt-2 rounded-3xl -rotate-45"
                  >
                    <path d="M17.25 6.75L21 12l-3.75 5.25M3 12h18" />
                  </svg>
                </Link>
              </div>
              <div className="absolute ml-60 md:ml-100 md:pl-24 mt-auto md:mt-0">
                <img
                  src={service.icon}
                  alt="icon"
                  className=" rounded-xl h-28 w-28 md:h-32 md:w-32 "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
