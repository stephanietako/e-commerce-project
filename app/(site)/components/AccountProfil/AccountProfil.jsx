import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import styles from "./styles.module.scss";

const AccountProfil = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.account_profil}>
      <ul className={styles.header_container}>
        <li className={styles.__session_users}>
          {session?.user ? (
            <Link href={`/user/${session.user.id}`} className="user_icon">
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
                <FaUserCircle
                  style={{ width: "40px", height: "40px", color: "aqua" }}
                />
              )}
            </Link>
          ) : (
            <Link href="/auth" className="user_icon">
              <FaUserCircle
                style={{ width: "40px", height: "40px", color: "whitesmoke" }}
              />
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default AccountProfil;
