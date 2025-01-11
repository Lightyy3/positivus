import Header from "@/components/header";
import Hero from "@/components/hero";
import Logo from "@/components/logo";
import Services from "@/components/services";

export default function HomePage() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Logo />
      <Services />
      <footer className="bg-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          &copy; 2025 My Website. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
