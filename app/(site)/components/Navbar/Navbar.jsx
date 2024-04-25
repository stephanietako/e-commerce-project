"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Styles
import styles from "./styles.module.scss";
import logo from "@/public/assets/vibes.png";
import cart from "@/public/assets/cart.png";
import CartBtn from "../CartBtn/Cartbtn";
import AccountProfil from "../AccountProfil/AccountProfil";
import NavContactAboutLink from "../NavContactAboutLink/NavContactAboutLink";

// const navLinks = [{ name: "Accueil", href: "/" }];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.__navbar_container}>
          <div className={styles.__link_navbar}>
            {/* {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href
                      ? `${styles.active_link} ${styles.autre_classe_link_hover_transition}`
                      : styles.autre_classe_link_hover_transition
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))} */}
            <li>
              <div className={styles.__logo}>
                <a href="/">
                  <Image
                    className={styles.__img}
                    src={logo}
                    alt="les fleurs"
                    width={110}
                    height={110}
                    style={{
                      display: "block",
                      objectFit: "cover",
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </a>
              </div>
            </li>
            <li>
              <NavContactAboutLink />
            </li>
            <li>
              <AccountProfil />
            </li>
            <li>
              <div className={styles.btn_cart}>
                <CartBtn img={cart} />
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
