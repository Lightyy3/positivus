import Footer from "@/components/footer";
import Header from "@/components/header";
export default function RootLayout({ children }) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
