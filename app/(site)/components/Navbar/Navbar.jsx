// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// // Styles
// import styles from "./styles.module.scss";
// import logo from "@/public/assets/palmtrees_icon_white.png";
// import AccountProfil from "../AccountProfil/AccountProfil";
// // import { useSession } from "next-auth/react";
// import useCartStore from "@/cartStore";
// import { FaShoppingCart } from "react-icons/fa";
// // import Contact from "../Contact/Contact";
// import { MdLocalShipping } from "react-icons/md";

// const navLinks = [
//   { name: "Guide du palmier", href: "/" },
//   { name: "Qui sommes-nous", href: "/" },
//   { name: "Contact", href: "#footer" },
// ];

// const Navbar = () => {
//   const totalItems = useCartStore((state) => state.totalItems);
//   const pathname = usePathname();
//   return (
//     <>
//       <nav className={styles.navbar}>
//         <ul className={styles.__navbar_container}>
//           <div className={styles.__logo}>
//             <a href="/">
//               <Image
//                 className={styles.__img}
//                 src={logo}
//                 alt="Palm trees affair la ferme des palmiers "
//                 width={140}
//                 height={140}
//                 style={{
//                   display: "block",
//                   objectFit: "cover",
//                   width: "100%",
//                   height: "auto",
//                 }}
//               />
//             </a>
//           </div>
//           <div className={styles.__link_navbar}>
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <Link
//                   href={link.href}
//                   className={
//                     pathname === link.href
//                       ? `${styles.active_link} ${styles.autre_classe_link_hover_transition}`
//                       : styles.autre_classe_link_hover_transition
//                   }
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </div>
//           <span className={styles.__link_navbar_user_cart}>
//             {" "}
//             <div>
//               <AccountProfil />
//             </div>
//             <div className={styles.btn_cart}>
//               <Link href="/cart">
//                 <FaShoppingCart
//                   style={{
//                     width: "34px",
//                     height: "auto",
//                   }}
//                 />
//               </Link>
//               <div className={styles.btn_cart__items_number}>{totalItems}</div>
//             </div>
//           </span>

//           <div className={styles.btn_cart__items_delivery}>
//             <Link href="/order">
//               <MdLocalShipping
//                 style={{
//                   width: "34px",
//                   height: "auto",
//                 }}
//               />
//             </Link>
//           </div>
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./styles.module.scss";
import logo from "@/public/assets/palmtrees_icon_white.png";
import arrowIcon from "@/public/assets/arrow-colored.png";
import AccountProfil from "../AccountProfil/AccountProfil";
import useCartStore from "@/cartStore";
import { FaShoppingCart } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const mainNavLinks = [
  { name: "Guide du palmier", href: "/" },
  { name: "Qui sommes-nous", href: "/" },
  { name: "Contact", href: "#footer" },
];

const detailedNavLinks = [
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

const Navbar = () => {
  const totalItems = useCartStore((state) => state.totalItems);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(null);

  const handleMouseEnter = (link) => {
    setActiveLink(link);
  };

  const handleMouseLeave = () => {
    setActiveLink(null);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.__navbar_container}>
        {/* <div className={styles.__logo}>
          <a href="/">
            <Image
              className={styles.__img}
              src={logo}
              alt="Palm trees affair la ferme des palmiers "
              width={140}
              height={140}
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: "auto",
              }}
            />
          </a>
        </div> */}
        <div className={styles.__link_navbar}>
          <div className={styles.__logo}>
            <a href="/">
              <Image
                className={styles.__img}
                src={logo}
                alt="Palm trees affair la ferme des palmiers "
                width={140}
                height={140}
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                }}
              />
            </a>
          </div>
          <div className={styles.__link}>
            {mainNavLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href
                      ? `${styles.active_link} `
                      : styles.autre_classe_link_hover_transition
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </div>
          <span className={styles.__link_navbar_user_cart}>
            <div>
              <AccountProfil />
            </div>
            <div className={styles.btn_cart}>
              <Link href="/cart">
                <FaShoppingCart
                  style={{
                    width: "34px",
                    height: "auto",
                  }}
                />
              </Link>
              <div className={styles.btn_cart__items_number}>{totalItems}</div>
            </div>
            <div className={styles.btn_cart__items_delivery}>
              <Link href="/order">
                <MdLocalShipping
                  style={{
                    width: "34px",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
          </span>
        </div>
      </ul>
      <div className={styles.__link_navbar__test}>
        {detailedNavLinks.map((link, index) => (
          <div
            key={index}
            className={`${styles.__navbarMenu_container__link} ${activeLink?.name === link.name ? styles.active : ""}`}
            onMouseEnter={() => handleMouseEnter(link)}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className={styles.__navbarMenu_container__link}
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
                  alt="flêche"
                  className="arrow_icon__img"
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

export default Navbar;
