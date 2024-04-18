import ByCategories from "../../components/Bycategories/Bycategories";
import { getCategories } from "@/sanity/lib/client";
import Image from "next/image";
import canaIcon from "@/public/assets/canaleaf.png";
const SelectCategories = async () => {
  const bycategory = await getCategories();
  return (
    <>
      <div
        className="select_categories__header"
        // style={{
        //   display: "flex",
        //   width: "100%",
        //   height: "auto",
        //   flexDirection: "column",

        // }}
      >
        {" "}
        <header
          className="title"
          // style={{
          //   display: "flex",
          //   position: "relative",
          //   zIndex: 1,
          //   padding: "2rem",
          //   width: "77rem",
          //   height: "auto",
          // }}
        >
          <h1>
            Selection des catégories
            <span
              className="icon"
              // style={{
              //   display: "block",
              //   position: "absolute",
              //   left: " -21px",
              //   zIndex: -1,
              //   transform: " translateY(-76%) rotate(-29deg)",
              // }}
            >
              {" "}
              <Image
                src={canaIcon}
                alt="les produits de la boutiques vibes cbd"
                className="cana_icon__img"
                width={100}
                height={0}
                style={{
                  objectFit: "cover",
                }}
              />
            </span>
          </h1>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis !
        </p>
      </div>
      <div
        className="select_categories__container"
        // style={{
        //   display: "flex",
        //   width: "100%",
        //   height: "auto",
        //   position: "relative",

        // }}
      >
        {" "}
        <div
          className="bloc_un"
          // style={{
          //   display: "flex",
          //   width: "90%",
          //   height: "auto",
          //   flexDirection: "column",
          //   // border: "7px solid red",
          // }}
        >
          <ByCategories bycategory={bycategory} />
        </div>
        <div
          className="bloc_deux"
          style={{
            display: "flex",
            width: "35%",
            height: "auto",
            position: "relative",
            // flexDirection: "column",
            // border: "7px solid lime",
          }}
        >
          {/* <Suspense fallback={<h2>In Progress...</h2>}>
      <CheckboxCategories />
    </Suspense> */}
        </div>
      </div>
    </>
  );
};

export default SelectCategories;
