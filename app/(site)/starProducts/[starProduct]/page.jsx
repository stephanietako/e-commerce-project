import { getDataStarProductSlug } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/sanity";
import styles from "./styles.module.scss";

export const dynamic = "force-dynamic";

const StarProductsDetails = async ({ params }) => {
  const slug = params.starProduct;
  const starProduct = await getDataStarProductSlug(slug);

  return (
    <>
      <section className={styles.starProductDetails_section}>
        <div className={styles.starProductDetails_container}>
          <div className={styles.starProductDetails_title}>
            <h1>{starProduct && starProduct.name}</h1>
          </div>

          <div className={styles.starProductDetails_categories}>
            <div className={styles.display_categories}>
              {starProduct.stars.map((item) => (
                <Link href={`/stars/${item.slug}`} key={item._id}>
                  <div className={styles.data_group_categories}>
                    <span>
                      <div className={styles.images}>
                        {item.coverImages ? (
                          <Image
                            src={urlFor(item.coverImages).url()}
                            alt="les fleurs"
                            className={styles.product_img}
                            width={450}
                            height={300}
                          />
                        ) : (
                          <p>No image available</p>
                        )}
                      </div>
                    </span>
                    <div className={styles.title_content}>
                      <h3 className={styles.title}>{item.name}</h3>
                    </div>
                    <div className={styles.productDetails_infos}>
                      <span className={styles.item_content}>
                        <PortableText value={item.content} />
                      </span>
                      <span>
                        <p className={styles.price_content}>{item.price}€</p>
                      </span>
                      <span>
                        <button className={styles.discover_button}>
                          Découvrir
                        </button>
                      </span>
                      <span>
                        <p className={styles.product_ref}>REF: {item._id}</p>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StarProductsDetails;
