import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
export default function About() {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "Director of Operations",
      description:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      description:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
      name: "Brian Williams",
      role: "Social Media Specialist",
      description:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      name: "Sarah Kim",
      role: "Content Creator",
      description:
        "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    },
  ];
  return (
    <>
      <Header />
      <div className="pt-4 bg-gray-50  flex flex-col mt-8">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mt-14">
            <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
            <p className="mt-4 text-lg text-gray-700">
              Welcome to our website! We are a team of dedicated professionals
              committed to providing top-notch digital marketing solutions. Our
              mission is to empower businesses to achieve their full potential
              in the online world.
            </p>
          </section>

          <section className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            <p className="mt-4 text-gray-700">
              To be the leading provider of innovative and effective digital
              marketing strategies, helping businesses grow and succeed in the
              ever-changing online landscape.
            </p>
          </section>

          <section className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800">Our Values</h3>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
              <li>Commitment to excellence</li>
              <li>Transparency and integrity</li>
              <li>Customer-centric approach</li>
              <li>Continuous innovation</li>
            </ul>
          </section>

          <section className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800">Our Team</h3>
            <p className="mt-4 text-gray-700">
              Our team is composed of experienced professionals with diverse
              backgrounds in marketing, design, and technology. We work
              collaboratively to deliver exceptional results for our clients.
            </p>
          </section>
        </main>

        <div className=" max-w-screen-xl mx-auto py-10 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 ">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="shadow-md p-6 text-center rounded-3xl"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                    <span className="text-3xl font-semibold text-lime-400">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>

                <p className="text-sm text-gray-500">{member.role} </p>
                <div className="mt-4 container ">
                  <Link
                    href="/Services"
                    className="text-lime-400 hover:text-lime-500 "
                  >
                    <svg
                      className="w-6 h-6 inline"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.268c.825-.977 2.075-1.268 3.292-1.268 2.206 0 4.708 1.502 4.708 4.5v5.5z" />
                    </svg>
                  </Link>
                </div>
                <hr className="md:block w-64  h-4" />
                <p className="mt-2 text-sm text-gray-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              className="bg-lime-400 text-white px-6 py-2 rounded-full hover:bg-lime-500 "
              href="/Services"
            >
              See more
            </Link>
          </div>
        </div>

        <Footer />
      </div>
      <Header />
    </>
  );
}
