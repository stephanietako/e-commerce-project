"use client";

import Image from "next/image";
import Link from "next/link";

const CategoriesPages = ({ category }) => {
  return (
    <div className="container">
      <div className="bloc_content_images">
        <Image
          src={category.coverImages}
          alt="fleurs "
          width={250}
          height={250}
          className="img "
        />
      </div>

      <div className="bloc">
        <div className="bloc_infos">
          <p>{category.name}</p>
          <p>$ {category.price}</p>
        </div>

        <p className="category_type">{category.type} Category</p>
        {/* // la single page */}
        <Link
          href={`/categories/${category.slug}`}
          className="category_link"
        ></Link>
      </div>
    </div>
  );
};

export default CategoriesPages;
