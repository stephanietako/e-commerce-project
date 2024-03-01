import Image from "next/image";
import Link from "next/link";

const CategoriesPages = ({ category }) => {
  return (
    <div className="container">
      <div className="images">
        {category.coverImages ? (
          <>
            <Image
              src={category.coverImages}
              alt="les fleurs"
              className="product__img"
              width={200}
              height={200}
              style={{
                objectFit: "cover",
              }}
            />
          </>
        ) : (
          <p>No image available</p>
        )}
      </div>

      <div className="infos_content">
        <div className="infos">
          <p>{category.name}</p>
          <span>
            {" "}
            <p
              className="price_content"
              style={{
                fontSize: "3rem",
              }}
            >
              €{category.price.toFixed(2)}
            </p>
          </span>
        </div>

        <p className="pt-2 text-xs">{category.type} CATEGORY</p>

        <Link href={`/categories/${category.slug}`} className="link_items">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CategoriesPages;
