"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// Styles
import "../Navbar/navbar.scss";
import logo from "@/public/logo192.png";
import cart from "@/public/cart.png";
import CartBtn from "../CartBtn/Cartbtn";

// const navLinks = [
//   { href: "/", text: "Home" },
//   { href: "/shopping", text: "Shopping" },
//   { href: "/shopping/products", text: "Products" },
//   { href: "/shopping/categories", text: "Categories" },
//   { href: "/shopping/order", text: "Order" },
//   { href: "/auth", text: "Authentification" },
// ];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Fleurs bleues", href: "/Fleurs-bleues" },
  { name: "Fleurs jaunes", href: "/Fleurs-jaunes" },
  { name: "Fleurs roses", href: "/Fleurs-roses" },
];
const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="navbar">
        <div className="__logo">
          <a href="/">
            <Image className="__img" src={logo} alt="les fleurs" />
          </a>
        </div>
        <ul>
          <div className="__link_container">
            {navLinks.map((link, index) => (
              <li key={index}>
                {pathname === link.href ? (
                  <Link
                    className={`${link} ${link.className}`}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="autre_classe_link_hover_transition"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
            <div className="btn_cart">
              <CartBtn
                img={cart}
                onClick={() => console.log("Button clicked!")}
              />
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
