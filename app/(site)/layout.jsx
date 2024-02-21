import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Toast from "./components/Toasts/Toasts";
import { NextAuthProvider } from "./components/AuthProvider/AuthProvider";
// import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Vibes CBD",
  description: "Découvrez la boutique Vibes saint-Tropez",
};

export default async function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session={session}>
          <Toast />
          <main className="main">
            <Navbar />
            <Header />
            {children}
            <Footer />
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
