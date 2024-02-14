import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Toast from "./components/Toasts/Toasts";
// import NavCart from "./components/NavCart/NavCart";
import { getDataProducts } from "@/sanity/lib/client";
import { getCategories } from "@/sanity/lib/client";
import { NextAuthProvider } from "./components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Vibes CBD",
  description: "Découvrez la boutique Vibes saint-Tropez",
};

export default async function RootLayout({ children, session }) {
  // get all of our pages
  const products = await getDataProducts();
  const categories = await getCategories();

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session={session}>
          <Toast />
          <main className="main">
            <header className="header">
              <Header />
              <Navbar />
              <div className="links">
                {products.map((product) => (
                  <Link
                    key={product._id}
                    href={`/products/${product.slug}`}
                    className="link"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
              {/* /////// */}
              <div className="links">
                {categories.map((category) => (
                  <Link
                    key={category._id}
                    href={`/categories/${category.slug}`}
                    className="link"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </header>
            {children}
            <Footer />
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
