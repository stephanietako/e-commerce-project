import Link from "next/link";
// import { getPages } from "@/sanity/lib/client";
export const dynamic = "force-dynamic";

const Contact = ({ contact }) => {
  // const pages = await getPages();
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
          paddingLeft: "5rem",
        }}
      >
        {contact.map((pages) => (
          <Link key={pages._id} href={`/pages/${pages.slug}`} className="link">
            {pages.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contact;
