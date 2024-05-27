"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import arrowIcon from "@/public/assets/arrow-colored.png";
import Image from "next/image";
import Link from "next/link";
// Styles
import styles from "./styles.module.scss";
export const dynamic = "force-dynamic";

const fleursCBD = {
  name: "Fleurs CBD",
  href: "/products/fleurs-cbd",
  types: [
    { name: "Toutes nos Fleurs", href: "/products/fleurs-cbd" },
    { name: "Sativa", href: "/categories?categoryType=sativa" },
    { name: "Indica", href: "/categories?categoryType=indica" },
    { name: "Indoor", href: "/categories?categoryType=indoor" },
    { name: "Outdoor", href: "/categories?categoryType=outdoor" },
    { name: "Hybride", href: "/categories?categoryType=hybride" },
  ],
};

const hashCBD = {
  name: "Hash CBD",
  href: "/products/hash-cbd",
  categories: [
    { name: "SSC", href: "/categories/ssc" },
    { name: "White Russian Hash", href: "/categories/white-russian-hash" },
    { name: "Charas", href: "/categories/charas" },
    { name: "Durban Poison Hash", href: "/categories/durban-poison-hash" },
    { name: "Yellow Kief", href: "/categories/yellow-kief" },
    { name: "Hash Hollandais", href: "/categories/hash-hollandais" },
    { name: "Bubble Green", href: "/categories/bubble-green" },
    { name: "Afghan", href: "/categories/afghan" },
    { name: "Nepalais", href: "/categories/nepalais" },
  ],
};

const huilesCBD = {
  name: "Huiles CBD",
  href: "/products/huiles-cbd",
  categories: [
    { name: "Huile 10%", href: "/categories/huile-10" },
    { name: "Huile 20%", href: "/categories/huile-20" },
    { name: "Huile 30%", href: "/categories/huile-30" },
    { name: "Huile 40%", href: "/categories/huile-40" },
  ],
};

const cosmetiquesCBD = {
  name: "Cosmétiques CBD",
  href: "/products/cosmetique-cbd",
  categories: [
    {
      name: "Chanvria crème visage",
      href: "/categories/chanvria-creme-visage",
    },
    {
      name: "Chanvria Serum visage",
      href: "/categories/chanvria-serum-visage",
    },
    { name: "Chanvria Baume corps", href: "/categories/chanvria-baume-corps" },
    { name: "Chanvria crème mains", href: "/categories/chanvria-creme-mains" },
    {
      name: "Chanvria serum huile de chanvre bio",
      href: "/categories/chanvria-serum-huile-chanvre-bio",
    },
    { name: "Baume", href: "/categories/baume" },
    { name: "Roller", href: "/categories/roller" },
    { name: "Huile Massage", href: "/categories/huile-massage" },
  ],
};

const vapesCBD = {
  name: "Vapes CBD",
  href: "/products/vapes-cbd",
  categories: [
    { name: "Toutes nos Vapes", href: "/products/vapes-cbd" },
    { name: "Vape", href: "/categories?categoryType=vape" },
    { name: "Pen", href: "/categories?categoryType=pen" },
  ],
};

const infusionsCBD = {
  name: "Infusions CBD",
  href: "/products/infusions-cbd",
  categories: [
    {
      name: "Infusion Hexazen",
      href: "/categories/infusion-hexazen",
    },
    {
      name: "Infusion Herboristerie Alexandra",
      href: "/categories/infusion-herboristerie-alexandra",
    },
  ],
};

const navLinks = [
  fleursCBD,
  hashCBD,
  vapesCBD,
  huilesCBD,
  infusionsCBD,
  cosmetiquesCBD,
];
//console.log(navLinks);
const NavbarMenu = () => {
  const pathname = usePathname();
  const [categoryTypeFilter, setCategoryTypeFilter] = useState("");
  const [showCategories, setShowCategories] = useState(null);
  const [currentCategories, setCurrentCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleLinkClick = (link) => {
    if (showCategories === link.name) {
      setShowCategories(null);
    } else {
      setShowCategories(link.name);
      setCurrentCategories(link.types || link.categories);
    }
    console.log("Current categories:", link.types || link.categories);
    console.log("Show categories state:", showCategories);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.__navbar_container}>
        {navLinks.map((link, index) => (
          <div
            key={index}
            className={`${styles.__navbar_container__link} ${
              showCategories === link.name ? styles.active : ""
            }`}
          >
            <span
              className={
                pathname === link.href ? styles.__link_active : styles.__link
              }
              onClick={() => handleLinkClick(link)}
            >
              <span>{link.name}</span>
              <span className={styles.icon}>
                <Image
                  src={arrowIcon}
                  alt="les produits de la boutiques vibes cbd"
                  className="cana_icon__img"
                  width={16}
                  height={16}
                  style={{
                    objectFit: "cover",
                    paddingTop: "9px",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </span>
            </span>
            {showCategories === link.name && currentCategories && (
              <ul className={styles.submenu}>
                {currentCategories.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href}>
                      <span className={styles.categoryLink}>{item.name}</span>
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
