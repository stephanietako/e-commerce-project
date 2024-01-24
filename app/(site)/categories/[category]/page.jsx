// import { getData } from "@/sanity/lib/client";
// import Image from "next/image";
// import { PortableText } from "@portabletext/react";
// import ImageGallery from "../../components/ImageGallery/ImageGallery";
// export const dynamic = "force-dynamic";
// // single page
// const Category = async ({ params }) => {
//   const slug = params.category;
//   const category = await getData(slug);

//   console.log("PARAMS CATEGORY !!!!!!!!", category);
//   console.log("TITLE SLUG CATEGORY", params);
//   return (
//     <>
//       <div>
//         CATEGORY SLUG
//         <div className="title_slug_page"></div>
//       </div>
//       <>
//         {/* <div className="title_slug_page">
//           <h1>{category.name} ICI C EST category</h1>
//         </div> */}
//         <div
//           className="gallery_container"
//           style={{
//             display: "flex",
//             width: "100%",
//             height: "100%",
//             border: "5px solid green",
//             alignItems: "center",
//           }}
//         >
//           <div
//             className="gallery_content"
//             style={{
//               display: "flex",
//               width: "100%",
//             }}
//           >
//             {category.images && (
//               <Image
//                 src={category.images}
//                 alt={category.name}
//                 width={250}
//                 height={250}
//                 className="project_img"
//                 style={{
//                   objectFit: "cover",
//                 }}
//               />
//             )}
//             <ImageGallery images={category.images} />
//             <div
//               className="category_text_container"
//               style={{
//                 display: "flex",
//                 width: "100%",
//                 height: "100%",
//               }}
//             >
//               <div
//                 className="category_content"
//                 style={{
//                   display: "flex",
//                   width: "auto",
//                   height: "100%",
//                   border: "3px solid white",
//                   flexDirection: "column",
//                 }}
//               >
//                 <span>
//                   {category.name}
//                   <h2>{category.name}</h2>
//                 </span>
//                 <div
//                   className="category_price"
//                   style={{
//                     border: "3px solid black",
//                     marginTop: "25px",
//                     fontSize: "3rem",
//                   }}
//                 >
//                   <span>
//                     {" "}
//                     <p
//                       className="price_content"
//                       style={{
//                         fontSize: "3rem",
//                       }}
//                     >
//                       €{product.price.toFixed(2)}
//                     </p>
//                   </span>
//                   <span>
//                     <p>2-4 Day Shipping</p>
//                   </span>
//                 </div>
//                 <div
//                   className="category_btns"
//                   style={{
//                     display: "flex",
//                     width: "100%",
//                     height: "100%",
//                     justifyContent: "center",
//                     flexDirection: "column",
//                     marginTop: "30px",
//                   }}
//                 >
//                   <button
//                     style={{
//                       marginTop: "20px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     {" "}
//                     Add to Bag
//                   </button>
//                   <button
//                     style={{
//                       marginTop: "20px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     Checkout now
//                   </button>
//                 </div>
//                 <div className="category_description">
//                   <div>
//                     <PortableText value={category.content} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>

//       <div className="project_slug_getproject">
//         <header>
//           HELLO CATEGORY GET DATA !!!!!
//           {/* <h1>{category.name}</h1> */}
//         </header>
//         <div>
//           <PortableText value={category.content} />
//         </div>
//         ici c est IMAGES
//         {category.images && (
//           <Image
//             src={category.images}
//             alt={category.name}
//             width={250}
//             height={100}
//             className="categories_img"
//             style={{
//               objectFit: "contain",
//             }}
//           />
//         )}
//         <div>
//           <div>{category.body} ici c est le body !!!!!</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Category;
