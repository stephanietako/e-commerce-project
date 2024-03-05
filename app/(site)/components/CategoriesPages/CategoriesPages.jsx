import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";
// DISPLAY
const CategoriesPages = ({ category }) => {
  return (
    <>
      <header
        className="header_categoriespages"
        style={{
          display: "flex",
          width: "auto",
          height: "auto",
          justifyContent: "space-between",
          border: "2px solid blue",
          alignItems: "center",
          padding: "33px",
          flexWrap: "wrap",
        }}
      >
        <h2 className="_bycategory_title">
          CATEGORIES PAGES CHECKBOX SELECTION
        </h2>
      </header>
      <section
        className="categoriespages_section"
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          border: "2px solid violet",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <div
          className="__categoriespages_bloc"
          style={{
            display: "flex",
            border: "3px solid yellow",
            flexDirection: "column",
          }}
        >
          <div className="images">
            {category.coverImages ? (
              <>
                <Image
                  src={category.coverImages}
                  alt="les fleurs de CBD"
                  className="category__img"
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
            <div
              className="categoriespages_display"
              style={{
                border: "4px solid black",
                display: "flex",
                width: "auto",
                height: "auto",
                justifyContent: "center",
              }}
            >
              <Link
                href={`/categories/${category.slug}`}
                className="link_items"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesPages;
