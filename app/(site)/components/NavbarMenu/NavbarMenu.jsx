"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import arrowIcon from "@/public/assets/arrow-colored.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

const fleursCBD = {
  name: "Fleurs CBD",
  href: "/products/fleurs-cbd",
  categories: [
    { name: "Tropical", href: "/categories/tropical" },
    { name: "White Russian Weed", href: "/categories/white-russian-weed" },
    { name: "Amnesia XXL", href: "/categories/amnesia-xxl" },
    { name: "Lemoncello", href: "/categories/lemoncello" },
    { name: "Gorilla Mandarine", href: "/categories/gorilla-mandarine" },
    { name: "Durban Poison Weed", href: "/categories/durban-poison-weed" },
    { name: "Orange Tonic", href: "/categories/orange-tonic" },
    { name: "Straw Mango", href: "/categories/straw-mango" },
    { name: "Lemon Super", href: "/categories/lemon-super" },
    { name: "Lifter", href: "/categories/lifter" },
    { name: "Gelato", href: "/categories/gelato" },
    { name: "Purple Haze", href: "/categories/purple-haze" },
    { name: "Cryo", href: "/categories/cryo" },
    { name: "Gandalf", href: "/categories/gandalf" },
    { name: "Mac", href: "/categories/mac" },
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

const vapesCBD = {
  name: "Vapes CBD",
  href: "/products/vapes-cbd",
  categories: [
    {
      name: "Happease Cartridge Mountain River",
      href: "/categories/happease-cartridge-mountain-river",
    },
    {
      name: "Happease Cartridge Tropical Sunrise",
      href: "/categories/happease-cartridge-tropical-sunrise",
    },
    {
      name: "Happease Cartridge Lemon Tree",
      href: "/categories/happease-cartridge-lemon-tree",
    },
    {
      name: "Happease Pen Mountain River",
      href: "/categories/happease-pen-mountain-river",
    },
    {
      name: "Happease Pen Tropical Sunrise",
      href: "/categories/happease-pen-tropical-sunrise",
    },
    {
      name: "Happease Pen Lemon Tree",
      href: "/categories/happease-pen-lemon-tree",
    },
    {
      name: "Kush Vape Pen Amnesia Haze",
      href: "/categories/kush-vape-pen-amnesia-haze",
    },
    {
      name: "Kush Vape Pen OG Kush",
      href: "/categories/kush-vape-pen-og-kush",
    },
    {
      name: "Kush Vape Pen Orange Runtz",
      href: "/categories/kush-vape-pen-orange-runtz",
    },
    {
      name: "Kush Vape Pen Super Lemon Haze",
      href: "/categories/kush-vape-pen-super-lemon-haze",
    },
    {
      name: "Kush Vape Pen White Widow",
      href: "/categories/kush-vape-pen-white-widow",
    },
    {
      name: "Kush Vape Pen Skittles",
      href: "/categories/kush-vape-pen-skittles",
    },
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

const infusionsCBD = {
  name: "Infusions CBD",
  href: "/products/infusions-cbd",
  categories: [
    { name: "Infusion Hexazen", href: "/categories/infusion-hexazen" },
    {
      name: "Infusion Herboristerie Alexandra",
      href: "/categories/infusion-herboristerie-alexandra",
    },
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

const navLinks = [
  fleursCBD,
  hashCBD,
  vapesCBD,
  huilesCBD,
  infusionsCBD,
  cosmetiquesCBD,
];

const NavbarMenu = () => {
  const pathname = usePathname();
  const [showCategories, setShowCategories] = useState(null);
  const [currentCategories, setCurrentCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleLinkClick = (categories) => {
    if (showCategories === categories) {
      setShowCategories(null);
    } else {
      setShowCategories(categories);
      setCurrentCategories(categories);
    }
  };

  const handleSearchQueryChange = (event) => {
    const selectedQuery = event.target.value;
    setSearchQuery(selectedQuery);
    router.push(`/categories?searchQuery=${selectedQuery}`);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.__navbar_container}>
        <div className={styles.__navbar_container__link}>
          {navLinks.map((link, index) => (
            <div key={index}>
              <span
                className={
                  pathname === link.href ? styles.__link_active : styles.__link
                }
                onClick={() => handleLinkClick(link.categories)}
              >
                <span>{link.name}</span>
                <span className={styles.icon}>
                  <Image
                    src={arrowIcon}
                    alt="les produits de la boutiques vibes cbd"
                    className="cana_icon__img"
                    width={25}
                    height={25}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </span>
              </span>
              {showCategories === link.categories && (
                <ul className={styles.submenu}>
                  {link.categories.map((category, idx) => (
                    <li key={idx}>
                      <Link href={category.href}>
                        <span className={styles.categoryLink}>
                          {category.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarMenu;
