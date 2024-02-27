"use client";

// Styles
import styles from "./styles.module.scss";
import Link from "next/link";
import { useSession } from "next-auth/react";
import userCircleImage from "@/public/user-circle.png";
import Image from "next/image";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className={styles.header_container}>
      <ul>
        <li className="session_users">
          {session?.user ? (
            <Link href={`/users/${session.user.id}`}>
              {session.user.image ? (
                <div className="profil_user_header">
                  <Image
                    src={session.user.image}
                    alt={session.user.name}
                    width={40}
                    height={40}
                    className="image_profil_user"
                  />
                </div>
              ) : (
                <Image
                  src={userCircleImage}
                  alt="User Circle"
                  className="icon_image_user-identification_page"
                />
              )}
            </Link>
          ) : (
            <Link href="/auth">
              <Image
                src={userCircleImage}
                alt="User Circle"
                className="icon_image_user"
              />
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
