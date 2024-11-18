// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { FaSignOutAlt } from "react-icons/fa";
// import { signOut } from "next-auth/react";
// import { useSession } from "next-auth/react";
// import OrderCompt from "../../components/OrderCompt/OrderCompt";
// import palm from "@/public/assets/icons8-palmier-black.png";
// const UserDetails = ({ params }) => {
//   const { id } = params;
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { data: session } = useSession();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (!session || !session.user || !session.user.id) {
//         console.error("Session or user ID not found");
//         return;
//       }

//       try {
//         const response = await fetch(`/api/users/${session.user.id}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch user data");
//         }

//         const data = await response.json();
//         setUserData(data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [session]);

//   if (loading) {
//     return <p style={{ textAlign: "center" }}>Loading...</p>;
//   }

//   if (!userData) {
//     return <div style={{ textAlign: "center" }}>Error loading user data</div>;
//   }

//   return (
//     <div
//       className="bloc_container"
//       style={{ margin: "0 auto", padding: "10px 20px", maxWidth: "1200px" }}
//     >
//       <div
//         className="bloc_container__un"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(12, 1fr)",
//           gap: "10px",
//         }}
//       >
//         <div
//           className="bloc_container__deux"
//           style={{
//             display: "none",
//             gridColumn: "span 4",
//             position: "sticky",
//             top: "10px",
//             background: "#eff0f2",
//             color: "black",
//             borderRadius: "8px",
//             padding: "20px",
//           }}
//         >
//           <div
//             className="bloc_container__trois"
//             style={{
//               width: "143px",
//               height: "143px",
//               margin: "0 auto",
//               marginBottom: "20px",
//               borderRadius: "50%",
//               overflow: "hidden",
//             }}
//           >
//             {userData.image ? (
//               <Image
//                 src={userData.image}
//                 alt={userData.name}
//                 width={143}
//                 height={143}
//                 style={{ borderRadius: "50%", transition: "transform 0.3s" }}
//               />
//             ) : (
//               <div
//                 style={{
//                   width: "143px",
//                   height: "143px",
//                   borderRadius: "50%",
//                   backgroundColor: "#ccc",
//                 }}
//               ></div>
//             )}
//           </div>

//           <div
//             className="bloc_container__quatre"
//             style={{
//               fontSize: "14px",
//               paddingBottom: "20px",
//               textAlign: "left",
//             }}
//           >
//             <p style={{ fontSize: "14px" }}>{userData.about ?? ""}</p>
//           </div>
//           <div
//             className="bloc_container__cinq"
//             style={{ fontSize: "14px", textAlign: "left" }}
//           >
//             <h6
//               style={{
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 paddingBottom: "10px",
//               }}
//             >
//               {userData.name}
//             </h6>
//           </div>
//           <div
//             className="bloc_container__six"
//             style={{ display: "flex", alignItems: "center" }}
//           >
//             <p style={{ marginRight: "10px" }}>Sign Out</p>
//             <FaSignOutAlt
//               style={{ fontSize: "24px", cursor: "pointer" }}
//               onClick={() => signOut({ callbackUrl: "/" })}
//             />
//           </div>
//         </div>

//         <div className="bloc_container__sept" style={{ gridColumn: "span 8" }}>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <h5
//               style={{
//                 fontSize: "24px",
//                 fontWeight: "bold",
//                 marginRight: "10px",
//               }}
//             >
//               Bonjour, {userData.name}
//             </h5>
//           </div>
//           <div
//             className="bloc_container__huit"
//             style={{
//               display: "block",
//               width: "56px",
//               height: "56px",
//               borderRadius: "50%",
//               overflow: "hidden",
//             }}
//           >
//             {userData.image ? (
//               <Image
//                 style={{ borderRadius: "50%", transition: "transform 0.3s" }}
//                 width={56}
//                 height={56}
//                 src={userData.image}
//                 alt="pastille utilisateur connecté sur son compte"
//               />
//             ) : (
//               <div
//                 style={{
//                   width: "56px",
//                   height: "56px",
//                   borderRadius: "50%",
//                   backgroundColor: "whitesmoke",
//                   border: "2px solid gray",
//                   padding: "4px",
//                 }}
//               >
//                 {" "}
//                 <Image
//                   src={palm}
//                   alt="flèche"
//                   className="palm_icon_user"
//                   width={54}
//                   height={54}
//                   style={{
//                     width: "100%",
//                     height: "auto",
//                     objectFit: "cover",
//                   }}
//                 />
//               </div>
//             )}
//           </div>

//           <p
//             style={{ fontSize: "12px", paddingTop: "10px", fontWeight: "500" }}
//           >
//             Joined In {userData._createdAt.split("T")[0]}
//           </p>
//           <div
//             className="bloc_container__neuf"
//             style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
//           >
//             <p style={{ marginRight: "10px" }}>Deconnexion</p>
//             <FaSignOutAlt
//               style={{ fontSize: "24px", cursor: "pointer" }}
//               onClick={() => signOut({ callbackUrl: "/" })}
//             />
//           </div>

//           <div style={{ marginTop: "20px" }}>
//             <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Mes Infos</h2>
//             <OrderCompt userEmail={session.user.email} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDetails;
//////////
// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { FaSignOutAlt } from "react-icons/fa";
// import { signOut } from "next-auth/react";
// import { useSession } from "next-auth/react";
// import OrderCompt from "../../components/OrderCompt/OrderCompt";
// import palm from "@/public/assets/icons8-palmier-black.png";
// import styles from "./styles.module.scss";

// const UserDetails = ({ params }) => {
//   const { id } = params;
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { data: session } = useSession();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (!session || !session.user || !session.user.id) {
//         console.error("Session or user ID not found");
//         return;
//       }

//       try {
//         const response = await fetch(`/api/users/${session.user.id}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch user data");
//         }

//         const data = await response.json();
//         setUserData(data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [session]);

//   if (loading) {
//     return <p style={{ textAlign: "center" }}>Loading...</p>;
//   }

//   if (!userData) {
//     return <div style={{ textAlign: "center" }}>Error loading user data</div>;
//   }

//   return (
//     <div className={styles.bloc_container}>
//       <div className={styles.bloc_container__un}>
//         <div className={styles.bloc_container__deux}>
//           <div className={styles.bloc_container__trois}>
//             {userData.image ? (
//               <Image
//                 src={userData.image}
//                 alt={userData.name}
//                 width={143}
//                 height={143}
//                 style={{ borderRadius: "50%", transition: "transform 0.3s" }}
//               />
//             ) : (
//               <div
//                 className={styles.bloc_un}
//                 style={{
//                   width: "143px",
//                   height: "143px",
//                   borderRadius: "50%",
//                   backgroundColor: "#ccc",
//                 }}
//               ></div>
//             )}
//           </div>

//           <div className={styles.bloc_container__quatre}>
//             <p>{userData.about ?? ""}</p>
//           </div>

//           <div className={styles.bloc_container__cinq}>
//             <h6>{userData.name}</h6>
//           </div>

//           <div className={styles.bloc_container__six}>
//             <p>Sign Out</p>
//             <FaSignOutAlt
//               style={{ fontSize: "24px", cursor: "pointer" }}
//               onClick={() => signOut({ callbackUrl: "/" })}
//             />
//           </div>
//         </div>

//         <div className={styles.bloc_container__sept}>
//           <div className={styles.user_greeting}>
//             <h5>Bonjour, {userData.name}</h5>
//           </div>

//           <div className={styles.bloc_container__huit}>
//             {userData.image ? (
//               <Image
//                 style={{ borderRadius: "50%", transition: "transform 0.3s" }}
//                 width={56}
//                 height={56}
//                 src={userData.image}
//                 alt="pastille utilisateur connecté sur son compte"
//               />
//             ) : (
//               <div
//                 className={styles.bloc_deux}
//                 style={{
//                   width: "56px",
//                   height: "56px",
//                   borderRadius: "50%",
//                   backgroundColor: "whitesmoke",
//                   border: "2px solid gray",
//                   padding: "4px",
//                 }}
//               >
//                 <Image
//                   src={palm}
//                   alt="flèche"
//                   className={styles.palm_icon_user}
//                   width={54}
//                   height={54}
//                 />
//               </div>
//             )}
//           </div>

//           <p className={styles.user_joined}>
//             Joined In {userData._createdAt.split("T")[0]}
//           </p>

//           <div className={styles.bloc_container__neuf}>
//             <p>Deconnexion</p>
//             <FaSignOutAlt
//               style={{ fontSize: "24px", cursor: "pointer" }}
//               onClick={() => signOut({ callbackUrl: "/" })}
//             />
//           </div>

//           <div>
//             <h2 className={styles.user_info_header}>Mes Infos</h2>
//             <OrderCompt userEmail={session.user.email} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDetails;

//////////////////
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import OrderCompt from "../../components/OrderCompt/OrderCompt";
import palm from "@/public/assets/icons8-palmier-black.png";
import styles from "./styles.module.scss";

const UserDetails = ({ params }) => {
  const { id } = params;
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!session || !session.user || !session.user.id) {
        console.error("Session or user ID not found");
        return;
      }

      try {
        const response = await fetch(`/api/users/${session.user.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [session]);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  if (!userData) {
    return <div style={{ textAlign: "center" }}>Error loading user data</div>;
  }

  return (
    <div className={styles.user_container}>
      <div className={styles.userGreeting}>
        <h1>PALM TREES AFFAIR</h1>
        <br />
        <h2>Bonjour, {userData.name}</h2>
      </div>
      <div className={styles.user_content}>
        <div className={styles.user_sidebar}>
          <div className={styles.profilePictureWrapper}>
            {userData.image ? (
              <Image
                src={userData.image}
                alt={userData.name}
                width={56}
                height={56}
                style={{ borderRadius: "50%", transition: "transform 0.3s" }}
              />
            ) : (
              <div
                className={styles.profilePictureWrapper}
                style={{
                  backgroundColor: "#ccc",
                  padding: "4px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <Image
                  src={palm}
                  alt="icon palmier page utilisateur"
                  className={styles.iconPalm}
                  width={52}
                  height={52}
                />
              </div>
            )}
          </div>

          <div className={styles.profileBio}>
            <p>{userData.about ?? ""}</p>
          </div>

          <div className={styles.profileName}>
            <h3>{userData.name}</h3>
          </div>

          {/* <div className={styles.logoutButton}>
            <p>Sign Out</p>
            <FaSignOutAlt
              style={{ fontSize: "24px", cursor: "pointer" }}
              onClick={() => signOut({ callbackUrl: "/" })}
            />
          </div> */}

          <p className={styles.userJoinDate}>
            Joined In {userData._createdAt.split("T")[0]}
          </p>
          <br />
          <div className={styles.logout_button}>
            <p>Deconnexion</p>
            <FaSignOutAlt
              style={{
                fontSize: "44px",
                cursor: "pointer",
                width: "auto",
                height: "auto",
                color: "gray",
              }}
              onClick={() => signOut({ callbackUrl: "/" })}
            />
          </div>
        </div>

        <div className={styles.main_content}>
          {/* <div className={styles.profilePictureSmallWrapper}>
            {userData.image ? (
              <Image
                style={{ borderRadius: "50%", transition: "transform 0.3s" }}
                width={56}
                height={56}
                src={userData.image}
                alt="pastille utilisateur connecté sur son compte"
              />
            ) : (
              <div className={styles.profilePictureSmallWrapper}>
                <Image
                  src={palm}
                  alt="flèche"
                  className={styles.iconPalm}
                  width={54}
                  height={54}
                />
              </div>
            )}
          </div> */}
          {/* 
          <p className={styles.userJoinDate}>
            Joined In {userData._createdAt.split("T")[0]}
          </p>

          <div className={styles.logoutWrapper}>
            <p>Deconnexion</p>
            <FaSignOutAlt
              style={{ fontSize: "24px", cursor: "pointer" }}
              onClick={() => signOut({ callbackUrl: "/" })}
            />
          </div> */}

          <div className={styles.userInfoHeader}>
            <OrderCompt userEmail={session.user.email} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
