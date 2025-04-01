import "./globals.css";
import { Space_Grotesk } from "next/font/google";
// import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";

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
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* This ensures the favicon is included in the head */}
          <link rel="icon" href="/images/110.svg" />
        </head>
        <body className={spaceGrotesk.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
