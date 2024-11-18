// "use client";

// import React, { useState, useEffect } from "react";
// import { getDataStar } from "@/sanity/lib/client";
// import Cart from "../../components/Cart/Cart";

// //Styles
// import styles from "./styles.module.scss";

// export const dynamic = "force-dynamic";

// const StarDetails = ({ params, minipalms }) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const slug = params.star;
//       const fetchedData = await getDataStar(slug);
//       setData(fetchedData);
//     };

//     fetchData();
//   }, [params.star]);

//   if (!data) {
//     return <p>Not found</p>;
//   }

//   return (
//     <div className={styles.starDetails__container}>
//       <div className={styles.starDetails__content}>
//         <div className={styles.starDetails__title}>
//           <h1>{data.name}</h1>
//         </div>
//         <div className={styles.gallery__container}>
//           <div className={styles.gallery__content}>
//             <Cart data={data} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StarDetails;
//////////:
import { getDataStar } from "@/sanity/lib/client";
import { getDataMinipalms } from "@/sanity/lib/client";
import Details from "../../components/Details/Details";

export const dynamic = "force-dynamic";

const StarDetails = async ({ params }) => {
  const slug = params.star;
  const data = await getDataStar(slug);
  const minipalms = await getDataMinipalms();

  return (
    <>
      <Details data={data} minipalms={minipalms} />
    </>
  );
};

export default StarDetails;
