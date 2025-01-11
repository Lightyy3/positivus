import Link from "next/link";

export default function Card({
  title,
  descriptionColor,
  icon,
  textColor,
  bgColor,
}) {
  return (
    <>
      <div
        className={`p-6 bg-gray-100 rounded-lg shadow-lg border border-gray-200 flex items-center space-x-4 ${bgColor}`}
      >
        <div>
          <h3 className="text-lg font-semibold bg-green-200 text-green-800 inline-block px-2 py-1 rounded">
            {title}
          </h3>
        </div>
        {/* Right Section: Icon and Link */}
        <div className="flex-1 text-right">
          <img src={icon} alt="Service Icon" className="h-12 w-12 mx-auto" />
          <Link
            href="#"
            className={`mt-4  inline-flex items-center text-sm ${
              (descriptionColor, textColor)
            }  hover:text-green-600`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L21 12l-3.75 5.25M3 12h18"
              />
            </svg>
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
}
