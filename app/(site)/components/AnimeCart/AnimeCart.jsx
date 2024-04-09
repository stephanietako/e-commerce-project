"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import FlipCard from "../FlipCard/FlipCard";
import { fetchDataProduct } from "../../../../sanity/lib/api";

const AnimeCart = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const { data, error, isLoading } = useSWR("/products", fetchDataProduct);
  const searchParams = useSearchParams();
  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);

  if (error) throw new Error("Cannot fetch data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");

  const filterProducts = (products) => {
    return products.filter((el) => el.name.includes(searchQuery));
  };

  const filteredProducts = filterProducts(data || []);

  return (
    <div className="container_filter_products">
      <ul className="products_list">
        <div className="__box">
          {filteredProducts.map((product, index) => (
            <li key={index}>
              <div className="products_list_item">
                <FlipCard key={product._id} product={product} />
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default AnimeCart;
