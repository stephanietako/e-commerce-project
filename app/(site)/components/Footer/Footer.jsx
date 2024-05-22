// Styles
import styles from "./styles.module.scss";
// Assets
import at from "@/public/assets/at.png";
import phone from "@/public/assets/phone.png";
import logo from "@/public/assets/vibes.png";
import backgroundImg from "@/public/assets/canaimg.webp";
import shop from "@/public/assets/vibes_front_shop.webp";
import Image from "next/image";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const contactLinks = [
    { logo: phone, alt: "Phone symbol", link: "tel:+33986673582" },
    { logo: at, alt: "Mail symbol", link: "mailto:renaudsttropez@vibescbd.fr" },
  ];

  return (
    <div className={styles.footer}>
      <footer className={styles.footer__container}>
        <div className={styles.__container__bg}>
          <Image
            src={backgroundImg}
            alt="boutique Vibes Saint-tropez"
            className={styles.bg_img}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <ul>
          <li>
            <div className={styles.__logo}>
              <a href="/">
                <Image
                  className={styles.__img}
                  src={logo}
                  alt="Boutique Vibes CBD Saint-Tropez"
                  width={150}
                  height={300}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </a>
            </div>
          </li>
          <li>
            <h3>VIBES CBD SHOP SAINT-TROPEZ</h3>
            <p>Ouvert tous les jours</p>
            <p>De 10h30 à 20h30</p>
            <p>24 Rue Sibille</p>
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
                          display: "inline-block", // Ajoutez cette ligne
                        }}
                      >
                        {/* Encapsuler Image dans une div ou un span */}
                        {/* <div>
                          <Image
                            src={contact.logo}
                            alt={contact.alt}
                            className="cana_icon__img"
                            width={40}
                            height={40}
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </div> */}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <br />
            <span className={styles.infos}>
              <p>VIBES CBD SHOP</p>
              <p>Mentions légales</p>
              <div className={styles.__copyright}>
                &#169; Copyright {currentYear} | Tako Dev
              </div>
            </span>
          </li>
        </ul>
        <ul>
          {/* <li>
            <div className={styles.__shop_img}>
              <p>Accès à Google Maps en un click sur la boutique</p>
              <a href="/">
                <Image
                  className={styles.__img}
                  src={shop}
                  alt="Boutique Vibes CBD Saint-Tropez"
                  width={550}
                  height={450}
                  style={{
                    display: "block",
                    objectFit: "contain",
                  }}
                />
              </a>
            </div>
          </li> */}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
