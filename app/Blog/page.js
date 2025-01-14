import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import Carousel from "@/components/carousel";
export default function Blog() {
  const testimonials = [
    {
      text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
      name: "John Smith",
      title: "Marketing Director at XYZ Corp",
    },
    {
      text: `"For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales. Their expertise has been instrumental in our growth."`,
      name: "Jane Doe",
      title: "CEO at Retail Inc.",
    },
    {
      text: `"Working with Positivus has been a game-changer for our business. Their SEO strategy resulted in a 200% increase in organic traffic and a significant boost in conversions. Highly recommend!"`,
      name: "Michael Lee",
      title: "Founder at Software Solutions",
    },
  ];

  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-6 py-2 flex flex-col">
        <section className="bg-gray-900 text-white mt-28 py-12 rounded-3xl ">
          <div className="px-6">
            <div className="bg-gray-900 rounded-lg py-2">
              <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
                <div className="flex-1 flex-col space-y-4 lg:ml-4">
                  <p className="text-gray-300">
                    For a B2B software company, we developed an SEO strategy
                    that resulted in a first-page ranking for key keywords and a
                    200% increase in organic traffic.
                  </p>
                  <Link
                    href="/Services"
                    className="flex text-green-400 hover:text-green-500 space-x-2"
                  >
                    <span>Learn more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 -rotate-45 mt-1"
                    >
                      <path d="M17.25 6.75L21 12l-3.75 5.25M3 12h18" />
                    </svg>
                  </Link>
                </div>

                <hr className="w-48 bg-white  lg:-rotate-90 rotate-0" />

                <div className="flex-1 flex-col space-y-4 lg:ml-4">
                  <p className="text-gray-300">
                    For a B2B software company, we developed an SEO strategy
                    that resulted in a first-page ranking for key keywords and a
                    200% increase in organic traffic.
                  </p>
                  <Link
                    href="/Services"
                    className="flex text-green-400 hover:text-green-500 space-x-2"
                  >
                    <span>Learn more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 -rotate-45 mt-1"
                    >
                      <path d="M17.25 6.75L21 12l-3.75 5.25M3 12h18" />
                    </svg>
                  </Link>
                </div>
                <hr className="w-48 bg-white lg:-rotate-90 rotate-0" />
                <div className="flex-1 flex-col space-y-4 lg:mr-4">
                  <p className="text-gray-300">
                    For a national retail chain, we created a social media
                    marketing campaign that increased followers by 25% and
                    generated a 20% increase in online sales.
                  </p>
                  <Link
                    href="/Services"
                    className="flex text-green-400 hover:text-green-500 space-x-2"
                  >
                    <span>Learn more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 -rotate-45 mt-1"
                    >
                      <path d="M17.25 6.75L21 12l-3.75 5.25M3 12h18" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="mx-auto max-w-screen-xl py-12 mt-24 rounded-3xl pl-4">
        <div className="container  px-6 flex flex-row items-center space-y-0 mx-auto max-w-screen-xl">
          <div className="flex-1 w-1/2 space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl  font-bold text-gray-900">
              Let's make things happen
            </h2>
            <p className="text-sm  md:text-base text-gray-700">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <div className="mt-8 flex justify-center sm:justify-start">
              <Link
                href="/Quote"
                className="bg-black text-white px-4 py-2 ml-6 sm:px-6 sm:py-3 rounded-3xl hover:bg-green-500 whitespace-nowrap max-w-screen-xl"
              >
                Get your free proposal
              </Link>
            </div>
          </div>

          <div className="flex-1 relative mx-auto max-w-screen-sm">
            <div className="w-20 h-20  bg-black rounded-full absolute top-6 left-12"></div>

            <div className="w-16 h-16  bg-white border border-gray-400 rounded-full absolute top-0 left-28"></div>

            <div className="w-14 h-14  bg-lime-400 rotate-45 absolute top-20 left-16"></div>

            <div className="w-12 h-12  bg-gray-200 rounded-full absolute top-10 left-36"></div>
          </div>
        </div>
      </section>

      <Carousel testimonials={testimonials} />
      <Footer />
    </>
  );
}
