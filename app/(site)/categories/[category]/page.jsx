// import { getData } from "@/sanity/lib/client";
// import { getDataAccessoires } from "@/sanity/lib/client";
// // import { PortableText } from "@portabletext/react";
// import ImageGallery from "../../components/ImageGallery/ImageGallery";
// import Button from "../../components/Button/Button";
// // Styles
// import styles from "./styles.module.scss";
// import CarouselBeLike from "../../components/CarouselBeLike/CarouselBeLike";

// export const dynamic = "force-dynamic";

// const CategoryDetails = async ({ params }) => {
//   const slug = params.category;
//   const data = await getData(slug);
//   const accessoires = await getDataAccessoires();

//   return (
//     <>
//       {data ? (
//         <div className={styles.categoryDetails__container}>
//           <div className={styles.categoryDetails__content}>
//             <div className={styles.categoryDetails__title}>
//               <h1>{data.name}</h1>
//             </div>
//             <div className={styles.gallery__container}>
//               <div className={styles.gallery__content}>
//                 <ImageGallery images={data.images} />
//                 <div className={styles.products__content}>
//                   <div className={styles.products__infos}>
//                     <span>
//                       <p>{data.type}</p>
//                     </span>
//                     <span>
//                       <p className={styles.products__price}>
//                         {data.price.toFixed(2)}€
//                       </p>
//                     </span>
//                     <p className={styles.products__text}>{data.body}</p>
//                     <br />
//                     <span>
//                       <p>2-4 Day Shipping</p>
//                     </span>
//                     <span className={styles.refProducts_categories}>
//                       REF: {data._id}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.btns_products}>
//               <Button text="Ajouter au panier" className={styles.addToBagBtn} />
//               <Button
//                 text="Commander maintenant"
//                 className={styles.checkoutNowBtn}
//               />
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>Not found</p>
//       )}
//       <div className={styles.carouselBelike_container}>
//         <div className={styles.carouselBelike_box}>
//           <CarouselBeLike accessoires={accessoires} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default CategoryDetails;
//////////////:
"use client";

import React, { useState, useEffect } from "react";
import { getData } from "@/sanity/lib/client";
import { getDataAccessoires } from "@/sanity/lib/client";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import Button from "../../components/Button/Button";
import styles from "./styles.module.scss";
import CarouselBeLike from "../../components/CarouselBeLike/CarouselBeLike";
import useCartStore from "@/cartStore";

export const dynamic = "force-dynamic";

const CategoryDetails = ({ params }) => {
  const [data, setData] = useState(null);
  const [accessoires, setAccessoires] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({ product: data, quantity: quantity });
  };

  useEffect(() => {
    const fetchData = async () => {
      const slug = params.category;
      const fetchedData = await getData(slug);
      const fetchedAccessoires = await getDataAccessoires();

      setData(fetchedData);
      setAccessoires(fetchedAccessoires);
    };

    fetchData();
  }, [params.category]);

  // const handleQuantityChange = (event) => {
  //   const qty = parseInt(event.target.value);
  //   setQuantity(qty > 0 ? qty : 1); // Ensure quantity is at least 1
  // };

  return (
    <>
      {data ? (
        <div className={styles.categoryDetails__container}>
          <div className={styles.categoryDetails__content}>
            <div className={styles.categoryDetails__title}>
              <h1>{data.name}</h1>
            </div>
            <div className={styles.gallery__container}>
              <div className={styles.gallery__content}>
                <ImageGallery images={data.images} />
                <div className={styles.products__content}>
                  <div className={styles.products__infos}>
                    <span>
                      <p>{data.type}</p>
                    </span>
                    <span>
                      <p className={styles.products__price}>
                        {data.price.toFixed(2)}€
                      </p>
                    </span>
                    <div
                      className={styles.products__quantity}
                      style={{
                        display: "flex",
                        width: "4rem",
                        height: "auto",
                        flexDirection: "column",
                      }}
                    >
                      <label>Quantité</label>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => {
                          setQuantity(e.target.value);
                        }}
                        // onChange={handleQuantityChange}
                      />
                    </div>
                    <p className={styles.products__text}>{data.body}</p>
                    <br />
                    <span>
                      <p>2-4 Day Shipping</p>
                    </span>
                    <span className={styles.refProducts_categories}>
                      REF: {data._id}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.btns_products}>
              <Button
                text="Ajouter au panier"
                onClick={handleAddToCart}
                className={styles.addToCartBtn}
              />
              <Button
                text="Commander maintenant"
                className={styles.checkoutNowBtn}
              />
            </div>
          </div>
        </div>
      ) : (
        <p>Not found</p>
      )}
      <div className={styles.carouselBelike_container}>
        <div className={styles.carouselBelike_box}>
          <CarouselBeLike accessoires={accessoires} />
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
