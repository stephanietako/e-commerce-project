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
      <div className={styles.user_greeting}>
        <h1>PALM TREES AFFAIR</h1>
        <br />
        <h2>Bonjour, {userData.name}</h2>
      </div>
      <div className={styles.user_content}>
        <div className={styles.user_sidebar}>
          <div className={styles.profile_picture_wrapper}>
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
                className={styles.profile_picture_wrapper}
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

          <div className={styles.profile_bio}>
            <p>{userData.about ?? ""}</p>
          </div>

          <div className={styles.profile_name}>
            <h3>{userData.name}</h3>
          </div>

          <p className={styles.user_join_date}>
            Joined In {userData._createdAt.split("T")[0]}
          </p>
          <br />
          <div className={styles.logout_button}>
            <p>Deconnexion</p>
            <FaSignOutAlt
              style={{
                fontSize: "30px",
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
          <div className={styles.user_info_header}>
            <OrderCompt userEmail={session.user.email} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
