"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import OrderCompt from "../../components/OrderCompt/OrderCompt";

const UserDetails = ({ params }) => {
  const { id } = params;
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!session) return;

      try {
        const response = await fetch(`/api/users/${session.user.id}`); // Correction de l'URL
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
    <div
      className="bloc_container"
      style={{ margin: "0 auto", padding: "10px 20px", maxWidth: "1200px" }}
    >
      <div
        className="bloc_container__un"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "10px",
        }}
      >
        <div
          className="bloc_container__deux"
          style={{
            display: "none",
            gridColumn: "span 4",
            position: "sticky",
            top: "10px",
            background: "#eff0f2",
            color: "black",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          <div
            className="bloc_container__trois"
            style={{
              width: "143px",
              height: "143px",
              margin: "0 auto",
              marginBottom: "20px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <Image
              src={userData.image}
              alt={userData.name}
              width={143}
              height={143}
              style={{ borderRadius: "50%", transition: "transform 0.3s" }}
            />
          </div>

          <div
            className="bloc_container__quatre"
            style={{
              fontSize: "14px",
              paddingBottom: "20px",
              textAlign: "left",
            }}
          >
            <p style={{ fontSize: "14px" }}>{userData.about ?? ""}</p>
          </div>
          <div
            className="bloc_container__cinq"
            style={{ fontSize: "14px", textAlign: "left" }}
          >
            <h6
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                paddingBottom: "10px",
              }}
            >
              {userData.name}
            </h6>
          </div>
          <div
            className="bloc_container__six"
            style={{ display: "flex", alignItems: "center" }}
          >
            <p style={{ marginRight: "10px" }}>Sign Out</p>
            <FaSignOutAlt
              style={{ fontSize: "24px", cursor: "pointer" }}
              onClick={() => signOut({ callbackUrl: "/" })}
            />
          </div>
        </div>

        <div className="bloc_container__sept" style={{ gridColumn: "span 8" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h5
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              Hello, {userData.name}
            </h5>
          </div>
          <div
            className="bloc_container__huit"
            style={{
              display: "block",
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <Image
              style={{ borderRadius: "50%", transition: "transform 0.3s" }}
              width={56}
              height={56}
              src={userData.image}
              alt="User Name"
            />
          </div>

          <p
            style={{ fontSize: "12px", paddingTop: "10px", fontWeight: "500" }}
          >
            Joined In {userData._createdAt.split("T")[0]}
          </p>
          <div
            className="bloc_container__neuf"
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <p style={{ marginRight: "10px" }}>Sign out</p>
            <FaSignOutAlt
              style={{ fontSize: "24px", cursor: "pointer" }}
              onClick={() => signOut({ callbackUrl: "/" })}
            />
          </div>

          <div style={{ marginTop: "20px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Purchases</h2>
            <OrderCompt userEmail={session.user.email} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
