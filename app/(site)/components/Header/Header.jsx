"use client";

// Styles
import styles from "./styles.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [{ name: "Form", href: "/auth" }];

const Header = () => {
  const pathname = usePathname();
  return (
    <div className={styles.header_container}>
      <ul>
        <div className={styles.__link_container}>
          {navLinks.map((link, index) => (
            <li key={index}>
              {pathname === link.href ? (
                <Link className={`${link} ${link.className}`} href={link.href}>
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className={styles.autre_classe_link_hover_transition}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Header;
