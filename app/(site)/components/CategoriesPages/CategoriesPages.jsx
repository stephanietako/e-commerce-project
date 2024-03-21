import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";
// DISPLAY
const CategoriesPages = ({ category }) => {
  return (
    <>
      <section
        className="categoriespages_section"
        style={{
          display: "flex",
          width: "auto",
          height: "auto",
          // border: "2px solid violet",
          alignItems: "center",
          // justifyContent: "space-evenly",
          flexWrap: "wrap",
          margin: "2rem",
        }}
      >
        <div
          className="__categoriespages_bloc"
          style={{
            display: "flex",
            // border: "3px solid yellow",
            flexDirection: "column",
          }}
        >
          <div
            className="images"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            {category.coverImages ? (
              <>
                <Image
                  src={category.coverImages}
                  alt="les fleurs"
                  className="category__img"
                  width={300}
                  height={300}
                  style={{
                    objectFit: "cover",
                    borderRadius: "30px",
                  }}
                />
              </>
            ) : (
              <p>No image available</p>
            )}
          </div>

          <div
            className="infos_content"
            style={{
              display: "flex",
              width: "auto",
              height: "auto",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div className="infos">
              <p>{category.name}</p>
              <p>{category.type}</p>
            </div>

            <div
              className="categoriespages_display"
              style={{
                // border: "4px solid black",
                display: "flex",
                width: "auto",
                height: "auto",
                // justifyContent: "center",
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
