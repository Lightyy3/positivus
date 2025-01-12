import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="hero bg-white py-16 md:py-24 ">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center">
          <div className="lg:w-1/2 ">
            <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
              Navigating the digital landscape for success
            </h1>
            <p className="mt-4 text-gray-600 text-lg md:text-xl">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation
            </p>

            <div className="mt-6 flex space-x-4 items-center">
              <a
                href="/Quote"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-center rounded-full"
              >
                Book a consultation
              </a>
            </div>
          </div>

          <div className="flex justify-center mt-12 lg:mt-0 lg:w-1/2 max-w-screen-xl">
            <img src={`/images/9.png`} />
          </div>
        </div>
      </section>
    </>
  );
}
