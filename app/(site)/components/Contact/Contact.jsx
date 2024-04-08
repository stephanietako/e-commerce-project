import Link from "next/link";
import { getPages } from "@/sanity/lib/client";

const Contact = async () => {
  const pages = await getPages();
  return (
    <div
      className="contact_about"
      style={{
        display: "flex",
        color: "gray",
        fontSize: "10px",
      }}
    >
      {" "}
      <div
        className="links_about_contact"
        style={{
          color: "gray",
          fontSize: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* <SearchBar /> */}
        {pages.map((page) => (
          <Link key={page._id} href={`/pages/${page.slug}`} className="link">
            {page.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contact;
