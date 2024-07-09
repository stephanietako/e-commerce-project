import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import styles from "./styles.module.scss";

const AccountProfil = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.header_container}>
      <ul>
        <li className={styles.__session_users}>
          {session?.user ? (
            <Link href={`/user/${session.user.id}`}>
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
                <FaUserCircle className="cursor-pointer" />
              )}
            </Link>
          ) : (
            <Link href="/auth">
              <FaUserCircle className="cursor-pointer" />
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default AccountProfil;
