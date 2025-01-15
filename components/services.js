import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Search engine",
      titleBottom: "Optimization",
      bgColor: "bg-gray-100",
      textColor: "text-black-600  rounded ",
      icon: `/images/8.png`,
      descriptionColor: "text-black-600",
      titleBg: "bg-green-400 rounded-lg",
    },
    {
      title: "Pay-per-click",
      titleBottom: "Advertising",
      bgColor: "bg-green-400",
      textColor: "text-black  rounded",
      icon: `/images/8.png`,
      descriptionColor: "text-black-600",
      titleBg: "bg-white rounded-lg",
    },
    {
      title: "Social Media",
      titleBottom: "Marketing",
      bgColor: "bg-gray-800",
      textColor: "text-black  rounded ",
      icon: `/images/8.png`,
      descriptionColor: "text-white",
      titleBg: "bg-white rounded-lg",
    },
    {
      title: "Email",
      titleBottom: "Marketing",
      bgColor: "bg-gray-100",
      textColor: "text-black rounded",
      icon: `/images/8.png`,
      descriptionColor: "text-black-600",
      titleBg: "bg-green-400 rounded-lg",
    },
    {
      title: "Content",
      titleBottom: "Creation",
      bgColor: "bg-green-400",
      textColor: "text-black rounded",
      icon: `/images/8.png`,
      descriptionColor: "text-black-600",
      titleBg: "bg-white rounded-lg",
    },
    {
      title: "Analytics and",
      titleBottom: "Tracking",
      bgColor: "bg-gray-800",
      textColor: "text-black rounded",
      icon: `/images/8.png`,
      descriptionColor: "text-white",
      titleBg: "bg-green-400 rounded-lg",
    },
  ];
  return (
    <>
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:space-x-6">
            <h2 className="text-4xl font-bold text-gray-900 bg-green-500 p-3 rounded-3xl">
              Services
            </h2>
            <p className="mt-6 md:mt-0 text-md text-gray-700 max-w-2xl text-center ">
              We provide a comprehensive suite of digital marketing solutions
              designed to help your business thrive in the online world. Explore
              our offerings below:
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="mt-24 grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative p-4 rounded-3xl border-b-2 h-56 border-b-black ${service.bgColor}`}
              >
                <div className="flex justify-between gap-4">
                  <div
                    className={`block ${service.textColor} ${service.titleBg}`}
                  >
                    <div
                      className={`text-2xl px-1 text-h3Mobile md:text-h3 font-semibold p-2 rounded-3xl max-w-44`}
                    >
                      {service.title}
                    </div>

                    <div
                      className={`inline-block text-2xl px-1 text-h3Mobile md:text-h3 font-semibold p-2 rounded-3xl max-w-44`}
                    >
                      {service.titleBottom}
                    </div>
                  </div>
                  <div className="relative">
                    {/* <img
                      src={`/images/7.png`}
                      alt="Service icon"
                      className="z-10 relative"
                    /> */}

                    <div className="absolute top-0 right-0 w-full h-full sm:flex justify-center items-center hidden">
                      <div className="relative">
                        <div className="w-20 h-20  bg-black rounded-full absolute  right-12"></div>
                        <div className="w-16 h-16  bg-white border border-gray-400 rounded-full absolute top-4 right-1"></div>
                        <div className="w-14 h-14  bg-lime-400 rotate-45 absolute top-12 right-12"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/Usecases"
                  className={`flex gap-2 pb-3 items-center mt-4 text-xl ${service.descriptionColor} hover:text-green-300`}
                >
                  <p>Learn more</p>
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
