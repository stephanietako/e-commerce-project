import ByCategories from "../../components/Bycategories/Bycategories";
import { getCategories } from "@/sanity/lib/client";
import Image from "next/image";
import canaIcon from "@/public/assets/canaleaf.png";
// Styles
import styles from "./styles.module.scss";
const SelectCategories = async () => {
  const bycategory = await getCategories();
  return (
    <>
      <div className={styles.select_categories}>
        <div className={styles.select_categories__container}>
          {" "}
          <div className={styles.select_categories__bloc}>
            <div className={styles.select_categories__header}>
              {" "}
              <header className={styles.title}>
                <h1>
                  Selection des catégories
                  <span className={styles.icon}>
                    {" "}
                    <Image
                      src={canaIcon}
                      alt="les produits de la boutiques vibes cbd"
                      className="cana_icon__img"
                      width={100}
                      height={0}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </span>
                </h1>
              </header>
            </div>
            <div className={styles.select_categories__text}>
              <p
                style={{
                  fontSize: "2rem",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis ! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur
                voluptatum laborum numquam blanditiis !
              </p>
            </div>

            <ByCategories bycategory={bycategory} />
          </div>
          <div className={styles.select_categories__bloc_content}></div>
        </div>
      </div>
    </>
  );
};

export default SelectCategories;
