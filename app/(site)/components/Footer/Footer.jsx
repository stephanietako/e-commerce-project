"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
//import { AnimatePresence } from "framer-motion";
//import Modal from "../Modal/Modal";
import Image from "next/image";
import Link from "next/link";
//import Map from "../Map/Map";

// Assets
// import insta from "@/public/assets/insta.png";
// import mail from "@/public/assets/mail.png";
// import gps from "@/public/assets/gps.png";
// import phone from "@/public/assets/phone.png";
//import bulle from "@/public/assets/bulle.png";
//import logo from "@/public/assets/essenza-icon.jpeg";
// Styles
import styles from "./styles.module.scss";

export const dynamic = "force-dynamic";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const handleBrandClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleIconClick = () => {
    router.push("sectionHome");
  };
  return (
    <>
      <div className={styles.footer__container} id="footer">
        <div className={styles.footer__bloc}>
          {/* footer bottom bloc */}
          <div className={styles.footer_infos}>
            <div className={styles.footer_infos__container}>
              <div className={styles.column}>
                <span className={styles.column__title}>
                  {" "}
                  <h3>RESTONS CONNECTÉS</h3>
                </span>
                <ul>
                  <li className={styles.__info} id={styles.__info_insta}>
                    <a
                      href="https://www.instagram.com/maison_essenza/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.__link}
                    >
                      <div className={styles.__txt} id={styles.__text_insta}>
                        <span className={styles.__img}>
                          {/* <Image
                            src={insta}
                            alt="Instagram Icon"
                            width={40}
                            height={30}
                            className={styles.__icon}
                          /> */}
                        </span>
                        Instagram
                      </div>
                    </a>
                  </li>
                  <li className={styles.__info} id={styles.__info_mail}>
                    <a href="mailto:hello@maison-essenza.com">
                      <div className={styles.__txt} id={styles.__text_mail}>
                        <span className={styles.__img}>
                          {/* <Image
                            src={mail}
                            alt="Mail Icon"
                            width={40}
                            height={30}
                            className={styles.__icon}
                          /> */}
                        </span>
                        Mail
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.column}>
                <span className={styles.column__title}>
                  {" "}
                  <h3>LIENS UTILES</h3>
                </span>
                <ul>
                  <li className={styles.__info}>
                    <Link href="/">
                      <div className={styles.__txt}>Accueil</div>
                    </Link>
                  </li>
                  <li className={styles.__info}>
                    <div
                      className={styles.__txt}
                      id={styles.brand}
                      onClick={handleBrandClick}
                    >
                      Nos marques
                    </div>
                  </li>
                  <li className={styles.__info}>
                    <div className={styles.__txt}>
                      <a href="tel:+33451555160"> Nous contacter</a>
                    </div>
                  </li>
                  <li className={styles.__info}>
                    <Link href="/mentions">
                      <div className={styles.__txt}>Mentions Légales</div>
                    </Link>
                  </li>
                  <li className={styles.__info}>
                    <Link href="/rgpd">
                      <div className={styles.__txt}>
                        RGPD - Politique de confidentialité
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.column}>
                <span className={styles.column__title}>
                  {" "}
                  <h3>CONTACT</h3>
                </span>

                <ul>
                  <li
                    className={`${styles.__info} ${styles.__info_adress_bloc}`}
                  >
                    <div className={styles.__txt}>
                      <p id={styles.adress}>
                        Maison Essenza <br />
                        Siège Social et Magasin <br />
                        Golfe de Saint-tropez <br />
                        33 rue Marceau - 83310 Cogolin
                      </p>
                    </div>
                  </li>
                  <li className={styles.__info}>
                    {" "}
                    <a href="tel:+33451555160">
                      <div className={styles.__txt}>+33 (0)4 51 55 51 60</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.__copyright}>
              <div onClick={handleIconClick}>
                <span className={styles.__copyright__img}>
                  {/* <Image
                    src={logo}
                    alt="Maison Essenza logo"
                    width={15}
                    height={20}
                    style={{
                      objectFit: "cover",
                      width: "auto",
                      height: "100%",
                    }}
                  /> */}
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
      </div>
    </>
  );
};

export default Footer;
