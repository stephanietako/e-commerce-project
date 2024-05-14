"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
// Styles
import styles from "./styles.module.scss";
export const dynamic = "force-dynamic";
const navLinks = [
  {
    name: "Fleurs CBD",
    href: "/products/fleurs-cbd",
    categories: ["Tropical", "White Russian", "Amnesia XXL"],
  },
  {
    name: "Hash CBD",
    href: "/products/hash-cbd",
    categories: ["Category4", "Category5", "Category6"],
  },
  {
    name: "Hash CBD",
    href: "/products/hash-cbd",
    categories: ["Category4", "Category5", "Category6"],
  },
  {
    name: "Vapes CBD",
    href: "/products/hash-cbd",
    categories: ["Category4", "Category5", "Category6"],
  },
  {
    name: "Huiles CBD",
    href: "/products/hash-cbd",
    categories: ["Category4", "Category5", "Category6"],
  },
  {
    name: "Infusions CBD",
    href: "/products/hash-cbd",
    categories: ["Category4", "Category5", "Category6"],
  },
  {
    name: "Cosmétiques CBD",
    href: "/products/hash-cbd",
    categories: ["Category4", "Category5", "Category6"],
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
                {link.name}
              </span>
              {showCategories === link.categories && (
                <ul className={styles.submenu}>
                  {link.categories.map((category, idx) => (
                    <li key={idx}>{category}</li>
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
