import Header from "@/components/header";
import Footer from "@/components/footer";
import Form from "@/components/form";
export default function Quote() {
  return (
    <>
      <Header />
      <div className=" flex  justify-center py-12 px-8 mt-8">
        <div className=" shadow-2xl rounded-3xl w-full max-w-3xl p-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6 break-words sm:break-normal">
            Request a Quote
          </h1>
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
}
