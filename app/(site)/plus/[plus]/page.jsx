// "use client";

// import React, { useState, useEffect } from "react";
// import { getDataPlus } from "@/sanity/lib/client";
// import Cart from "../../components/Cart/Cart";
// import styles from "./styles.module.scss";

// export const dynamic = "force-dynamic";

// const PlusDetails = ({ params }) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const slug = params.plus;
//       const fetchedData = await getDataPlus(slug);
//       setData(fetchedData);
//     };

//     fetchData();
//   }, [params.plus]);

//   if (!data) {
//     return <p>Not found</p>;
//   }

//   return (
//     <div className={styles.plusDetails__container}>
//       <div className={styles.plusDetails__content}>
//         <div className={styles.plusDetails__title}>
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

// export default PlusDetails;
//////////
import { getDataPlus } from "@/sanity/lib/client";
import { getDataMinipalms } from "@/sanity/lib/client";
import Details from "../../components/Details/Details";

export const dynamic = "force-dynamic";

const PlusDetails = async ({ params }) => {
  const slug = params.plus;
  const data = await getDataPlus(slug);
  const minipalms = await getDataMinipalms();

  return (
    <>
      <Details data={data} minipalms={minipalms} />
    </>
  );
};

export default PlusDetails;
