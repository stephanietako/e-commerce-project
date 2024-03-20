"use client";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
// Styles
import styles from "./styles.module.scss";
import logo from "@/public/assets/logo192.png";
import cart from "@/public/assets/cart.png";
import CartBtn from "../CartBtn/Cartbtn";

const navLinks = [{ name: "Home", href: "/" }];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.__logo}>
          <a href="/">
            <Image className={styles.__img} src={logo} alt="les fleurs" />
          </a>
        </div>
        <ul>
          <div className={styles.__link_container}>
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
                    className={styles.autre_classe_link_hover_transition}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}

            <div className={styles.btn_cart}>
              <CartBtn
                img={cart}
                // onClick={() => console.log("Button clicked!")}
              />
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
