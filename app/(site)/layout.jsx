import { Playfair_Display } from "@next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Toast from "./components/Toasts/Toasts";
import { NextAuthProvider } from "./components/AuthProvider/AuthProvider";
// import { Suspense } from "react";
import Cursor from "./components/Cursor/Cursor";

const playfair = Playfair_Display({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Vibes CBD Shop",
  description: "Découvrez la boutique Vibes CBD à Saint-Tropez",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={playfair.variable}>
        <NextAuthProvider session={session}>
          <Toast />
          <main className="main">
            <Navbar />
            <Cursor />
            {children}
            <Footer />
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
