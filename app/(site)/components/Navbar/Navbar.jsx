"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// Styles
import styles from "./styles.module.scss";
import logo from "@/public/assets/vibes.png";
// import cart from "@/public/assets/cart.png";
// import CartBtn from "../CartBtn/Cartbtn";
import AccountProfil from "../AccountProfil/AccountProfil";
// import { useSession } from "next-auth/react";
import useCartStore from "@/cartStore";
import { FaShoppingCart } from "react-icons/fa";
// import Contact from "../Contact/Contact";
import { MdLocalShipping } from "react-icons/md";

const navLinks = [
  { name: "Guide du CBD", href: "/" },
  { name: "Qui sommes-nous", href: "/" },
  { name: "Contact", href: "/" },
];

const Navbar = () => {
  // const { data: session } = useSession();
  //console.log("SESSION !!!!", session);
  const totalItems = useCartStore((state) => state.totalItems);
  const pathname = usePathname();
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.__navbar_container}>
          <div className={styles.__logo}>
            <a href="/">
              <Image
                className={styles.__img}
                src={logo}
                alt="Boutique Vibes CBD Saint-Troez "
                width={70}
                height={70}
                style={{
                  display: "block",
                  objectFit: "contain",
                  // width: "auto",
                  // height: "auto",
                }}
              />
            </a>
          </div>
          <div className={styles.__link_navbar}>
            {navLinks.map((link, index) => (
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
            ))}
          </div>
          <span className={styles.__link_navbar_user_cart}>
            {" "}
            <div>
              <AccountProfil />
            </div>
            <div className={styles.btn_cart}>
              <Link href="/cart">
                <FaShoppingCart
                  style={{
                    width: "34px",
                    height: "34px",
                    padding: "4px",
                  }}
                />
              </Link>
              <div className={styles.btn_cart__items_number}>{totalItems}</div>
            </div>
          </span>

          <div className={styles.btn_cart__items_delivery}>
            <Link href="/order">
              <MdLocalShipping
                style={{
                  width: "34px",
                  height: "34px",
                  padding: "4px",
                }}
              />
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
