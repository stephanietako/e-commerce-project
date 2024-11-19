import { getDataProduct } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/sanity";
import styles from "./styles.module.scss";

export const dynamic = "force-dynamic";

const ProductsDetails = async ({ params }) => {
  const slug = params.product;
  const product = await getDataProduct(slug);

  return (
    <>
      <section className={styles.productsDetails_section}>
        <div className={styles.productsDetails_container}>
          <div className={styles.productsDetails_bloc}>
            <div className={styles.productsDetails_title}>
              <h1>{product && product.name}</h1>
            </div>
          </div>
          <h2 className={styles.section_title}>Tous nos palmiers</h2>
          <div className={styles.productsDetails_categories}>
            <div className={styles.display_categories}>
              {product.categories.map((category) => (
                <Link href={`/categories/${category.slug}`} key={category._id}>
                  <div className={styles.data_group_categories}>
                    <span>
                      <div className={styles.images}>
                        {category.coverImages ? (
                          <Image
                            src={urlFor(category.coverImages).url()}
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
                      <h3 className={styles.title}>{category.name}</h3>
                    </div>
                    <div className={styles.productDetails_infos}>
                      <span>
                        <PortableText value={category.content} />
                      </span>
                      <span>
                        <p className={styles.price_content}>
                          {category.price}€
                        </p>
                      </span>
                      <span>
                        <button className={styles.discover_button}>
                          Découvrir
                        </button>
                      </span>
                      <span>
                        <p className={styles.ref}>REF: {category._id}</p>
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

export default ProductsDetails;
