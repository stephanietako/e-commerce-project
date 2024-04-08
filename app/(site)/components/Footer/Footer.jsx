import Link from "next/link";
import { getPages } from "@/sanity/lib/client";
// Styles
import styles from "./styles.module.scss";
// Assets
import logo from "@/public/assets/logo192.png";
import Image from "next/image";

const Footer = async () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const pages = await getPages();
  return (
    <div className={styles.footer}>
      <footer className={styles.__container}>
        <ul>
          <li>
            <div className={styles.__logo}>
              <a href="/">
                <Image className={styles.__img} src={logo} alt="les fleurs" />
              </a>
            </div>
          </li>
          <li>
            <p>VIBES CBD</p>
          </li>
          <li>
            <p>Mentions légales</p>
          </li>
          <li>
            <div className={styles.__copyright}>
              &#169; Copyright {currentYear} | Tako Dev
            </div>
          </li>
          <li>
            <div className="links_about_contact">
              {/* <SearchBar /> */}
              {pages.map((page) => (
                <Link
                  key={page._id}
                  href={`/pages/${page.slug}`}
                  className="link"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
