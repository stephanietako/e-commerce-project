"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import AccountProfil from "../AccountProfil/AccountProfil";
import useCartStore from "@/cartStore";
import styles from "./styles.module.scss";
import logo from "@/public/assets/palmtrees_icon_white.png";
import arrowIcon from "@/public/assets/arrow-colored.png";

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
  const [isOpen, setIsOpen] = useState(false);
  const [navActive, setNavActive] = useState(false);
  //const [activeIdx, setActiveIdx] = useState(-1);
  const [activeLink, setActiveLink] = useState(null);
  const pathname = usePathname();
  const totalItems = useCartStore((state) => state.totalItems);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setNavActive(!navActive);
  };

  const handleMouseEnter = (link) => {
    setActiveLink(link);
  };

  const handleMouseLeave = () => {
    setActiveLink(null);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.topNavbarContainer}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src={logo}
                alt="Palm trees affair la ferme des palmiers"
                width={100}
                height={100}
                className={styles.logo__img}
              />
            </Link>
          </div>
          <div className={styles.links}>
            {mainNavLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={
                  pathname === link.href ? styles.activeLink : styles.link
                }
              >
                {link.name}
                ici !!!!!!!!!!!!!!!!
              </Link>
            ))}
          </div>
          <div className={styles.userCart}>
            <AccountProfil />
            <Link href="/cart" className={styles.cart}>
              <FaShoppingCart />
              <span className={styles.cartItems}>{totalItems}</span>
            </Link>
            <Link href="/order" className={styles.delivery}>
              <MdLocalShipping />
            </Link>
          </div>
          <div
            className={styles.burgerMenu}
            onClick={toggleMenu}
            onMouseEnter={toggleMenu}
          >
            {/* <div className={`menu__icon ${navActive ? "active" : "inactive"}`}> */}
            <div className={`menu__icon ${navActive ? "active" : ""}`}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className={styles.navLinksContainer}>
          {detailedNavLinks.map((link, index) => (
            <div
              key={index}
              className={`${styles.navLink} ${activeLink?.name === link.name ? styles.active : ""}`}
              onMouseEnter={() => handleMouseEnter(link)}
              onMouseLeave={handleMouseLeave}
            >
              <span>
                <h2>{link.name}</h2>
                <Image
                  src={arrowIcon}
                  alt="flèche"
                  className={styles.arrowIcon}
                  width={18}
                  height={18}
                />
                {activeLink?.name === link.name && (
                  <ul className={styles.submenu}>
                    {(link.types || link.categories).map((item, idx) => (
                      <li key={idx} className={styles.submenu__item}>
                        <Link href={item.href}>
                          <p>{item.name}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </span>
            </div>
          ))}
        </div>
        {isOpen && (
          <div className={styles.menuMobile}>
            {mainNavLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={toggleMenu}
                className={styles.linkMobile}
              >
                {link.name}
              </Link>
            ))}
            {detailedNavLinks.map((link, index) => (
              <div key={index} className={styles.navLinkMobile}>
                <Link href={link.href}>
                  <h2>{link.name}</h2>
                </Link>
                <ul className={styles.submenuMobile}>
                  {(link.types || link.categories).map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.href}>
                        <p>{item.name}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

/////////////////////////////////
// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import React, { useState } from "react";
// // import { Logo, NavItem } from "../NavItem";
// import NavItem from "../NavItem/NavItem";

// const MENU_LIST = [
//   { text: "Services", href: "/services" },
//   { text: "Privacy Policy", href: "/privacypolicy" },
//   { text: "Terms & Conditions", href: "/terms-and-conditions" },
// ];
// const Navbar = () => {
//   const [navActive, setNavActive] = useState(null);
//   const [activeIdx, setActiveIdx] = useState(-1);
//   return (
//     <header
//       className="header "
//       // style={{
//       //   position: "sticky",
//       //   zIndex: 30,
//       //   top: 0,
//       //   backgroundColor: "blue",
//       // }}
//     >
//       <nav
//         className={`nav ${navActive ? "active" : ""}
//         `}
//       >
//         <Link href={"/"} onClick={() => setActiveIdx(-1)}>
//           <h1
//             className="title"
//             style={{
//               fontWeight: "bold",
//             }}
//           >
//             HELLO WORLD
//           </h1>
//         </Link>
//         <div
//           className={`menu__icon ${navActive ? "active" : "inactive"}`}
//           onClick={() => setNavActive(!navActive)}
//         >
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//         <div className={`nav__menu ${navActive ? "active" : ""}`}>
//           {MENU_LIST.map((menu, idx) => (
//             <div
//               onClick={() => {
//                 setActiveIdx(idx);
//                 setNavActive(false);
//               }}
//               key={menu.href}
//             >
//               <NavItem {...menu} active={idx === activeIdx} />
//             </div>
//           ))}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
