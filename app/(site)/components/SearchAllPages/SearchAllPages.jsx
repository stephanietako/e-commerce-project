import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
export const dynamic = "force-dynamic";
//DISPLAY
const SearchAllPages = ({ all }) => {
  return (
    <div>
      SearchAllPages !!!!
      <>
        <section
          className="categoriespages_section"
          style={{
            display: "flex",
            width: "auto",
            height: "auto",
            alignItems: "center",
            flexWrap: "wrap",
            margin: "2rem",
          }}
        >
          <div
            className="__categoriespages_bloc"
            style={{
              display: "flex",
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
              {all.coverImages ? (
                <>
                  <Image
                    src={all.coverImages}
                    alt="les fleurs"
                    className="all__img"
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
                <p className="infos_name">{all.name}</p>
                <p
                  className="infos_type"
                  style={{
                    color: "gray",
                  }}
                >
                  {all.type}{" "}
                </p>
                <div
                  className="content"
                  style={{
                    display: "flex",
                    border: "3px solid pink",
                    flexDirection: "column",
                  }}
                >
                  <p className="price_content">€{all.price}</p>
                </div>
              </div>
              <span>
                <PortableText value={all.content} />
              </span>
              <div
                className="categoriespages_link"
                style={{
                  display: "flex",
                  width: "auto",
                  height: "auto",
                }}
              >
                <Link href={`/searchdata/${all.slug}`} className="link_items">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default SearchAllPages;
