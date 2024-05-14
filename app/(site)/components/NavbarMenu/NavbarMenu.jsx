"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
// Styles
import styles from "./styles.module.scss";

const navLinks = [
  { name: "Fleurs CBD", href: "/products/fleurs-cbd" },
  { name: "Hash CBD", href: "/products/hash-cbd" },
  { name: "Vapes CBD", href: "/products/vapes-cbd" },
  { name: "Huiles CBD", href: "/products/huiles-cbd" },
  { name: "infusions CBD", href: "/products/Infusions-cbd" },
  { name: "Cosmétiques CBD", href: "/products/cosmetiques-cbd" },
];
const NavbarMenu = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.__navbar_container}>
          <div className={styles.__navbar_container__link}>
            {navLinks.map((link, index) => (
              <div key={index}>
                {pathname === link.href ? (
                  <Link className={styles.__link} href={link.href}>
                    {link.name}
                  </Link>
                ) : (
                  <Link href={link.href} className={styles.__link}>
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarMenu;
