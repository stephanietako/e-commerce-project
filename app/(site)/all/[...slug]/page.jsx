// cette fonction est responsable de la logique de récupération des données et de l'affichage de la page unique en fonction du slug fourni. Elle encapsule la logique de récupération des données et fournit un moyen de rendre dynamiquement une page en fonction d'un slug donné
// import SinglePage from "../components/SinglePage/SinglePage";
// import getQueryFromSlug from "@/app/helpers/getQueryFormSlug";
// import sanityClient from "@/sanity/lib/sanity";
// // single page
// export default async function Page({ params }) {
//   const { slug } = params;
//   console.log("Slug !!!!!! :", slug);
//   const { query, queryParams, docType } = getQueryFromSlug(slug);

//   const pageData = await sanityClient.fetch(query, queryParams);

//   const data = filterDataToSingleItem(pageData, false);

//   return (
//     <>
//       {(docType === "product" || docType === "category") && (
//         <SinglePage key={data} data={data} />
//       )}
//     </>
//   );
// }

////////////////////////////
// "use client";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import useSWR from "swr";
// import { fetchDataSearchBarSlug } from "@/sanity/lib/api";
// //import getQueryFromSlug from "@/app/helpers/getQueryFormSlug";
// //import SinglePage from "../components/SinglePage/SinglePage";
// import All from "../components/All/All";
// const Search = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const searchQueryParam = searchParams.get("searchQuery");
//     if (searchQueryParam) setSearchQuery(searchQueryParam);
//   }, [searchParams]);

//   // Fonction pour filtrer les produits en fonction de la recherche
//   const filterProducts = (products) => {
//     return products.filter((product) => product.name.includes(searchQuery));
//   };

//   const { data, error, isLoading } = useSWR(
//     "/searchdata",
//     fetchDataSearchBarSlug
//   );

//   if (error) throw new Error("Cannot fetch data");
//   if (!isLoading && typeof data === "undefined")
//     throw new Error("Cannot fetch data");

//   const filteredProducts = filterProducts(data || []);

//   return (
//     <>
//       {filteredProducts.map((product) => (
//         <All key={product._id} data={product} />
//       ))}
//     </>
//   );
// };

// export default Search;
// export default async function Page({ params }) {
//   const { slug } = params;
//   console.log("Slug !!!!!! :", slug);
//   const { query, queryParams, docType } = getQueryFromSlug(slug);

//   const pageData = await sanityClient.fetch(query, queryParams);
//   console.log("pageData!!!!!", pageData);
//   console.log("queryparams!!!!!", queryParams);
//   console.log("query!!!!!", query);

//   const data = filterDataToSingleItem(pageData, false);

//   return (
//     <>
//       {(docType === "product" || docType === "category") && (
//         <SinglePage key={data} data={data} />
//       )}
//     </>
//   );
// }
