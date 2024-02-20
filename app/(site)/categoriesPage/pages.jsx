"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoriesPage = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {}, []);
  searchQuery = searchParams.get("searchQuery");
  const categoryType = searchParams.get("categoryType");
  console.log(searchQuery);
  console.log(categoryType);
  return <div>CategortPage</div>;
};

export default CategoriesPage;
