import "./globals.css";
import { Space_Grotesk } from "next/font/google";

export const metadata = {
  title: "Positivus",
  description: "Digital Marketing",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
