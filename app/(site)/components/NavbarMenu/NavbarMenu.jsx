"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import arrowIcon from "@/public/assets/arrow-colored.png";
import backgroundImg from "@/public/assets/vibes_front_shop.webp";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

const navLinks = [
  {
    name: "Fleurs CBD",
    href: "/products/fleurs-cbd",
    categories: [
      "Tropical",
      "White Russian Weed",
      "Amnesia XXL",
      "Lemoncello",
      "Gorilla Mandarine",
      "Durban Poison Weed",
      "Orange Tonic",
      "Straw Mango",
      "Lemon Super",
      "Lifter",
      "Gelato",
      "Purple Haze",
      "Cryo",
      "Gandalf",
      "Mac",
    ],
  },
  {
    name: "Hash CBD",
    href: "/products/hash-cbd",
    categories: [
      "SSC",
      "White Russian Hash",
      "Charas",
      "Durban Poison Hash",
      "Yellow Kief",
      "Hash Hollandais",
      "Bubble Green",
      "Afghan",
      "Nepalais",
    ],
  },
  {
    name: "Vapes CBD",
    href: "/products/hash-cbd",
    categories: [
      "Happease Cartridge Mountain River",
      "Happease Cartridge Tropical sunrise",
      "Happease Cartridge Lemon Tree",
      "Happeasey Pen Mountain River",
      "Happease Pen Tropical sunrise",
      "Happease Pen Lemon Tree",
      "Kush Vape Pen Amnesia Haze",
      "Kush Vape Pen OG Kush",
      "Kush Vape Pen Orange Runtz",
      "Kush Vape Pen super Lemon Haze",
      "Kush Vape Pen White Widow",
      "Kush Vape Pen Skittles",
    ],
  },
  {
    name: "Huiles CBD",
    href: "/products/huiles-cbd",
    categories: ["Huile 10%", "Huile 20%", "Huile 30%", "Huile 40%"],
  },
  {
    name: "Infusions CBD",
    href: "/products/infusions-cbd",
    categories: ["Infusion Hexazen", "Infusion Herboristerie Alexandra"],
  },
  {
    name: "Cosmétiques CBD",
    href: "/products/cosmetique-cbd",
    categories: [
      "Chanvria crème visage",
      "Chanvria Serum visage",
      "Chanvria Baume corps",
      "Chanvria crème mains",
      "Chanvria serum huile de chanvre bio",
      "Baume",
      "Roller",
      "Huile Massage",
    ],
  },
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

  const handleCategoryClick = (category) => {
    router.push(`/categories?searchQuery=${encodeURIComponent(category)}`);
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
                      <Link
                        href={`/categories?searchQuery=${encodeURIComponent(
                          category
                        )}`}
                      >
                        <span className={styles.categoryLink}>{category}</span>
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
