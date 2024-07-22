import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Toast from "./components/Toasts/Toasts";
import { NextAuthProvider } from "./components/AuthProvider/AuthProvider";
// import { Suspense } from "react";
import Cursor from "./components/Cursor/Cursor";
//import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const roboto_init = Roboto({
  weight: ["100", "300", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const poppins_init = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Palm Trees Affair la ferme des palmiers",
  description: "Découvrez notre ferme à palmiers de Saint-Tropez",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="fr">
      <body className={`${roboto_init.variable} ${poppins_init.variable}`}>
        <NextAuthProvider session={session}>
          <Toast />
          <main className="main">
            <Navbar />
            {/* <div className="menu">
              <NavbarMenu />{" "}
            </div> */}
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
