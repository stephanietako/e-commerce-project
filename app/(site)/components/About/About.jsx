import React from "react";
import ThreeCompt from "../ThreeCompt/ThreeCompt";
// Styles
import styles from "./styles.module.scss";
export const dynamic = "force-dynamic";

const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.about_content}>
        <ThreeCompt />
      </div>
      <div className={styles.about__bloc_text}>
        <div className={styles.__text_content}>
          <span className={styles.__text_title}>
            <h1>La ferme Des Palmiers</h1>
          </span>
          <br />
          <h2>Découvrez notre équipe de passionnés</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Ipsa laudantium molestias eos
            sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
            a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
            fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero
            magni deleniti quod quam consequuntur!
          </p>
          <br />
          <h3>L&apos;assurance d&apos;une agriculture raisonnée</h3>
          <p>
            Veritatis obcaecati tenetur iure eius earum ut molestias architecto
            voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit
            sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis
            quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga?
          </p>
          <p>
            Commodi minima excepturi repudiandae velit hic maxime doloremque.
            Quaerat provident commodi consectetur veniam similique ad earum
            omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
            fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores
            labore suscipit quas? Nulla, placeat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
