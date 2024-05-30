import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Toast from "./components/Toasts/Toasts";
import { NextAuthProvider } from "./components/AuthProvider/AuthProvider";
// import { Suspense } from "react";
import Cursor from "./components/Cursor/Cursor";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const robotoSlab = Roboto_Slab({
  weight: ["100", "900"],
  subsets: ["latin"],
  variable: "--roboto-slab",
});

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Vibes CBD Shop",
  description: "Découvrez la boutique Vibes CBD à Saint-Tropez",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={robotoSlab.variable}>
        <NextAuthProvider session={session}>
          <Toast />
          <main className="main">
            <Navbar />
            <div className="menu">
              <NavbarMenu />{" "}
            </div>
            <Cursor />
            {children}
            <div className="scroll">
              <ScrollToTop />
            </div>
            <Footer />
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
