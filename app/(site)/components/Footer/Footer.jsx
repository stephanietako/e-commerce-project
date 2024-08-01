import Link from "next/link";
// Styles
import styles from "./styles.module.scss";
// Assets
import at from "@/public/assets/at.png";
import phone from "@/public/assets/phone.png";
import logo from "@/public/assets/palmtrees_icon_white.png";
import plan from "@/public/assets/plan.png";
import backgroundImg from "@/public/assets/background.webp";

import Image from "next/image";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const contactLinks = [
    { logo: phone, alt: "Phone symbol", link: "tel:+331818181818" },
    { logo: at, alt: "Mail symbol", link: "mailto:takodevcreation@gmail.com" },
  ];

  return (
    <div className={styles.footer} id="footer">
      <footer className={styles.footer__container}>
        <div className={styles.__container__bg}>
          <Image
            src={backgroundImg}
            alt="Green affair palm trees Saint-tropez"
            className={styles.bg_img}
            priority
            width={1000}
            height={100}
            placeholder="blur"
          />
        </div>

        <ul>
          <li>
            <div className={styles.__logo}>
              <a href="/">
                <Image
                  className={styles.__img}
                  src={logo}
                  alt="Green affair palm trees Saint-tropez"
                  width={100}
                  height={100}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </a>
            </div>
          </li>
          <li>
            <h2>Palm Trees Affair</h2>
            <p>Ouvert tous les jours</p>
            <p>De 10h30 à 19h00</p>
            <p>18rue de Mars</p>
            <p>83990 Saint-Tropez</p>

            <div className={styles.icons_contacts}>
              <div className={styles.__icons}>
                <ul>
                  {contactLinks.map((contact, index) => (
                    <li key={index}>
                      <a
                        href={contact.link}
                        style={{
                          color: "white",
                          display: "inline-block",
                        }}
                      >
                        <div className={styles.logo}>
                          <Image
                            src={contact.logo}
                            alt="contact"
                            className="plan Saint-Tropez"
                            width={40}
                            height={40}
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <br />

            <span className={styles.infos}>
              <Link href="/mentionsLegales">
                <p>Mentions Légales</p>
              </Link>
              <Link href="/rgpd">
                <p>RGPD</p>
              </Link>
            </span>
            <div className={styles.__copyright}>
              &#169; Copyright {currentYear} | Tako Dev
            </div>
          </li>

          <li>
            <span>
              <div className={styles.footer__container_img}>
                <a href="/">
                  <Image
                    className={styles.__img}
                    src={plan}
                    alt=" Plan Boutique Saint-Tropez"
                    width={550}
                    height={450}
                    style={{
                      display: "block",
                      objectFit: "contain",
                    }}
                  />
                </a>
              </div>
            </span>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
// import React from "react";

// export default function Footer() {
//   return (
//     <footer className="Footer">
//       <div id="bg-circle"></div>
//       <div class="l-footer">
//         <p class="footer__copyright">(C) NOW ROADING Co. Ltd.</p>
//       </div>
//     </footer>
//   );
// }
// footer {
//   width: 100%;
//   margin-top: 40px;
//   position: relative;
// }
// footer #bg-circle {
//   position: absolute;
//   left: 0;
//   right: 0;
//   bottom: 34px;
//   margin: auto;
//   background: url("../img/foot_circle.png") no-repeat;
//   background-position: bottom;
//   background-size: cover;
//   width: 100%;
//   height: 210px;
// }

// .l-footer {
//   background-color: #febb35;
//   padding: 10px 0;
// }
// .footer__copyright {
//   font-size: 120%;
//   font-family: "Comfortaa", cursive;
//   text-align: center;
// }
