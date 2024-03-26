// import { PortableText } from "@portabletext/react";
// import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ name, type, slug, comment }) => {
  return (
    <div className="item">
      <Link href={`/${type}/${slug && slug.current}`}>
        <div className="item-in">
          <h4>{name}</h4>
          <p>{type}</p>
          <div className="seperator"></div>

          {comment && <p>{comment}</p>}
          {/* <a href="#">
            Read More
            <i className="fa fa-long-arrow-right"></i>
          </a> */}
        </div>
      </Link>
    </div>
  );
};

export default Card;
