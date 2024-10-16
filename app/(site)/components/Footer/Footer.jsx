// import Link from "next/link";
// // Styles
// import styles from "./styles.module.scss";
// // Assets
// import at from "@/public/assets/at.png";
// import phone from "@/public/assets/phone.png";
// import logo from "@/public/assets/palmtrees_icon_white.png";
// import plan from "@/public/assets/plan.png";
// import backgroundImg from "@/public/assets/background.webp";

// import Image from "next/image";

// const Footer = () => {
//   const date = new Date();
//   const currentYear = date.getFullYear();
//   const contactLinks = [
//     { logo: phone, alt: "Phone symbol", link: "tel:+331818181818" },
//     { logo: at, alt: "Mail symbol", link: "mailto:takodevcreation@gmail.com" },
//   ];

//   return (
//     <div className={styles.footer} id="footer">
//       <footer className={styles.footer__container}>
//         <div className={styles.__container__bg}>
//           <Image
//             src={backgroundImg}
//             alt="Green affair palm trees Saint-tropez"
//             className={styles.bg_img}
//             priority
//             width={1000}
//             height={100}
//             placeholder="blur"
//           />
//         </div>

//         <ul>
//           <li>
//             <div className={styles.__logo}>
//               <a href="/">
//                 <Image
//                   className={styles.__img}
//                   src={logo}
//                   alt="Green affair palm trees Saint-tropez"
//                   width={100}
//                   height={100}
//                   style={{
//                     objectFit: "contain",
//                   }}
//                 />
//               </a>
//             </div>
//           </li>
//           <li>
//             <h2>Palm Trees Affair</h2>
//             <p>Ouvert tous les jours</p>
//             <p>De 10h30 à 19h00</p>
//             <p>18rue de Mars</p>
//             <p>83990 Saint-Tropez</p>

//             <div className={styles.icons_contacts}>
//               <div className={styles.__icons}>
//                 <ul>
//                   {contactLinks.map((contact, index) => (
//                     <li key={index}>
//                       <a
//                         href={contact.link}
//                         style={{
//                           color: "white",
//                           display: "inline-block",
//                         }}
//                       >
//                         <div className={styles.logo}>
//                           <Image
//                             src={contact.logo}
//                             alt="contact"
//                             className="plan Saint-Tropez"
//                             width={40}
//                             height={40}
//                             style={{
//                               objectFit: "cover",
//                             }}
//                           />
//                         </div>
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             <br />

//             <span className={styles.infos}>
//               <Link href="/mentionsLegales">
//                 <p>Mentions Légales</p>
//               </Link>
//               <Link href="/rgpd">
//                 <p>RGPD</p>
//               </Link>
//             </span>
//             <div className={styles.__copyright}>
//               &#169; Copyright {currentYear} | Tako Dev
//             </div>
//           </li>

//           <li>
//             <span>
//               <div className={styles.footer__container_img}>
//                 <a href="/">
//                   <Image
//                     className={styles.__img}
//                     src={plan}
//                     alt=" Plan Boutique Saint-Tropez"
//                     width={550}
//                     height={450}
//                     style={{
//                       display: "block",
//                       objectFit: "contain",
//                     }}
//                   />
//                 </a>
//               </div>
//             </span>
//           </li>
//         </ul>
//       </footer>
//     </div>
//   );
// };

//export default Footer;
////////////////
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
      <div className={styles.footer__header}>
        {/* banner  */}

        {/* end banner  */}
      </div>

      <div className={styles.footer__container} id="footer">
        <div className={styles.footer__bloc}>
          <div className={styles.__bloc_container}>
            <div className={styles.__bloc_content}>
              <div className={styles.google}>ici Map !!!!!</div>
              {/* bloc right map */}
              <div className={styles.footer_list__content}>
                <ul className={styles.footer_list__border}>
                  <li>
                    <p>Retrouvez-nous au: </p>
                  </li>
                  <li>
                    <p> 26 rue de Mars - 83990 Saint-Tropez</p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      <a href="tel:+33400000000">+33 (0)4 00 00 00 00</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="mailto:helloworld@helloworld.com">
                        helloworld@helloworld.com
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>blblblblblblblblblblblbl...</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
