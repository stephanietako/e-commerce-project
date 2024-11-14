"use client";

import Image from "next/image";
import Link from "next/link";
// Assets
import insta from "@/public/assets/insta.png";
import mail from "@/public/assets/at.png";
import phone from "@/public/assets/phone.png"; // Import phone icon
import logo from "@/public/assets/palmtrees_icon_white.png";
// Styles
import styles from "./styles.module.scss";

export const dynamic = "force-dynamic";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <>
      <div className={styles.footer__container} id="footer">
        <div className={styles.footer_infos}>
          <div className={styles.footer_infos__container}>
            <div className={styles.column}>
              <span className={styles.column__title}>
                <h3>RESTONS CONNECTÉS</h3>
              </span>
              <ul>
                <li className={styles.__info} id={styles.__info_phone}>
                  <a href="tel:+33000000000">
                    <div className={styles.__txt} id={styles.__text_phone}>
                      <span className={styles.__img}>
                        <Image
                          src={phone}
                          alt="Phone Icon"
                          width={30}
                          height={30}
                          loading="lazy"
                          sizes="(max-width: 30px) 100vw, 25px 70vw  20px 50vw"
                          className={styles.__icon}
                          tyle={{
                            objectFit: "cover",
                            width: "auto",
                            height: "100%",
                          }}
                        />
                      </span>
                      +33 (0)4 00 00 00 00
                    </div>
                  </a>
                </li>
                <li className={styles.__info} id={styles.__info_insta}>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.__link}
                  >
                    <div className={styles.__txt} id={styles.__text_insta}>
                      <span className={styles.__img}>
                        <Image
                          src={insta}
                          alt="Instagram Icon"
                          width={30}
                          height={30}
                          loading="lazy"
                          sizes="(max-width: 30px) 100vw, 25px 70vw  20px 50vw"
                          className={styles.__icon}
                          tyle={{
                            objectFit: "cover",
                            width: "auto",
                            height: "100%",
                          }}
                        />
                      </span>
                      Instagram
                    </div>
                  </a>
                </li>
                <li className={styles.__info} id={styles.__info_mail}>
                  <a href="mailto:hello@world.com">
                    <div className={styles.__txt} id={styles.__text_mail}>
                      <span className={styles.__img}>
                        <Image
                          src={mail}
                          alt="Mail Icon"
                          width={30}
                          height={30}
                          loading="lazy"
                          sizes="(max-width: 30px) 100vw, 25px 70vw  20px 50vw"
                          className={styles.__icon}
                          tyle={{
                            objectFit: "cover",
                            width: "auto",
                            height: "100%",
                          }}
                        />
                      </span>
                      Mail
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <span className={styles.column__title}>
                <h3>LIENS UTILES</h3>
              </span>
              <ul>
                <li className={styles.__info}>
                  <Link href="/">
                    <div className={styles.__txt}>Accueil</div>
                  </Link>
                </li>
                <li className={styles.__info}>
                  <div className={styles.__txt}>
                    <a href="tel:+33000000000"> Nous contacter</a>
                  </div>
                </li>
                <li className={styles.__info}>
                  <Link href="/">
                    <div className={styles.__txt}>Mentions Légales</div>
                  </Link>
                </li>
                <li className={styles.__info}>
                  <Link href="/">
                    <div className={styles.__txt}>
                      RGPD - Politique de confidentialité
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <span className={styles.column__title}>
                <h3>CONTACT</h3>
              </span>
              <ul>
                <li className={`${styles.__info} ${styles.__info_adress_bloc}`}>
                  <div className={styles.__txt}>
                    <p id={styles.adress}>
                      Palm Trees Farmer
                      <br />
                      La Ferme des Palmiers <br />
                      Golfe de Saint-tropez <br />
                      18 rue de Mars - 83990 Saint-tropez
                    </p>
                  </div>
                </li>
                <li className={styles.__info}>
                  <a href="tel:+33000000000">
                    <div className={styles.__txt}>+33 (0)4 00 00 00 00</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.__copyright}>
            <div>
              <span className={styles.__copyright__img}>
                <Image
                  src={logo}
                  alt="Palm trees Farmer logo"
                  width={30}
                  height={30}
                  style={{
                    objectFit: "cover",
                    width: "auto",
                    height: "100%",
                  }}
                />
              </span>
            </div>
            &#169; Copyright {currentYear} |
            <a
              href="https://www.takodev.studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tako Dev
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
