import Header from "@/components/header";
import Footer from "@/components/footer";
import Request from "@/components/request";

export default function () {
  return (
    <>
      <Header />
      <div className="py-10 px-8 mt-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-lime-400 mb-6 text-center">
            Request List
          </h1>
          <Request />
        </div>
      </div>
      <div className="mt-64 pt-64">
        <Footer />
      </div>
    </>
  );
}
