"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import arrowIcon from "@/public/assets/arrow-colored.png";
import Image from "next/image";
import Link from "next/link";
// Styles
import styles from "./styles.module.scss";
export const dynamic = "force-dynamic";

const navLinks = [
  {
    name: "Palmiers",
    href: "/products/palmiers",
    types: [
      { name: "Toutes nos tailles de palmiers", href: "/products/palmiers" },
      { name: "Grands", href: "/categories?categoryType=grands" },
      { name: "Moyens", href: "/categories?categoryType=moyens" },
    ],
  },
  {
    name: "Palmiers Tropicaux",
    href: "/products/palmiers-tropicaux",
    categories: [
      { name: "Cocos nucifera", href: "/categories/cocos-nucifera" },
      { name: "Areca catechu", href: "/categories/areca-catechu" },
      { name: "Phoenix roebelenii", href: "/categories/phoenix-roebelenii" },
      { name: "Dypsis lutescens", href: "/categories/dypsis-lutescens" },
    ],
  },
  {
    name: "Palmiers Méditerranéens",
    href: "/products/palmiers-méditerranéens",
    categories: [
      { name: "Phoenix dactylifera", href: "/categories/phoenix-dactylifera" },
      { name: "Chamaerops humilis", href: "/categories/chamaerops-humilis" },
      {
        name: "Trachycarpus fortunei",
        href: "/categories/trachycarpus-fortunei",
      },
      {
        name: "Washingtonia filifera",
        href: "/categories/washingtonia-filifera",
      },
    ],
  },
];

const NavbarMenu = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(null);

  const handleMouseEnter = (link) => {
    setActiveLink(link);
  };

  const handleMouseLeave = () => {
    setActiveLink(null);
  };

  return (
    <nav className={styles.navbarMenu}>
      <div className={styles.__navbarMenu_container}>
        {navLinks.map((link, index) => (
          <div
            key={index}
            className={`${styles.__navbarMenu_container__link} ${activeLink?.name === link.name ? styles.active : ""}`}
            onMouseEnter={() => handleMouseEnter(link)}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className={
                styles.menu_link
                // pathname === link.href ? styles.__link_active : styles.__link
              }
              style={{
                display: "flex",
                alignItems: "center",
                padding: "1rem",
              }}
            >
              <h2>{link.name}</h2>
              <span className={styles.icon}>
                <Image
                  src={arrowIcon}
                  alt="les produits de la boutiques vibes cbd"
                  className="cana_icon__img"
                  width={18}
                  height={18}
                  style={{
                    objectFit: "cover",
                    paddingTop: "34px",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </span>
            </span>
            {activeLink?.name === link.name && (
              <ul className={styles.submenu}>
                {(link.types || link.categories).map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href}>
                      <p className={styles.categoryLink}>{item.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavbarMenu;
