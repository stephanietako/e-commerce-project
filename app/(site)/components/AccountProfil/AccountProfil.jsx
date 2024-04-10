"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import userCircleImage from "@/public/assets/user-circle.png";
import Image from "next/image";
// Styles
import styles from "./styles.module.scss";

const AccountProfil = () => {
  const { data: session } = useSession();
  return (
    <div className={styles.header_container}>
      <ul>
        <li className={styles.__session_users}>
          {session?.user ? (
            <Link href={`/users/${session.user.id}`}>
              {session.user.image ? (
                <div className={styles.profil_user_header}>
                  <Image
                    src={session.user.image}
                    alt={session.user.name}
                    width={40}
                    height={40}
                    className={styles.image_profil_user}
                  />
                </div>
              ) : (
                <Image
                  src={userCircleImage}
                  alt="User Circle"
                  className={styles.icon_image_user_identification_page}
                  width={40}
                  height={40}
                />
              )}
            </Link>
          ) : (
            <Link href="/auth">
              <Image
                src={userCircleImage}
                alt="User Circle"
                className={styles.icon_image_user}
                width={40}
                height={40}
              />
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default AccountProfil;
