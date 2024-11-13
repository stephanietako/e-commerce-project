"use client";

import React, { useState, useEffect } from "react";
// SignUp
import { signUp } from "next-auth-sanity/client";
// SignIn
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
// Assets
import GithubIcon from "@/public/assets/github.png";
import GoogleIcon from "@/public/assets/google.png";
// styles
import styles from "./styles.module.scss";

const defaultFormData = {
  email: "",
  name: "",
  password: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const { data: session } = useSession();
  // console.log("SESSION !!!!", session);
  const router = useRouter();

  useEffect(() => {
    if (session) router.push("/");
  }, [router, session]);

  const loginHandler = () => {
    signIn()
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Oups ... une erreur est survenue");
      });
  };

  // finally est utilisé pour garantir que quoi qu'il arrive que la promesse de signUp réussisse ou échoue setFormData(defaultFormData) sera appelé
  const handleSubmit = (event) => {
    event.preventDefault();

    signUp(formData)
      .then((user) => {
        if (user) {
          toast.success("Success. Please sign in");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Oups ... une erreur est survenue");
      })
      .finally(() => {
        setFormData(defaultFormData);
      });
  };

  return (
    <section className={styles.container}>
      <div className={styles.form}>
        <div className={styles.heading}>
          <h2 className={styles.subHeading}>Créer un compte</h2>
          <p>OU</p>
          <span className={styles.icons_google_github}>
            <Image
              src={GoogleIcon}
              alt="icon de google"
              width={50}
              height={50}
              onClick={loginHandler}
            />

            <Image
              src={GithubIcon}
              alt="iconde github"
              width={50}
              height={50}
              onClick={loginHandler}
            />
          </span>
        </div>

        <form className={styles.input} onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            required
            className={styles.input}
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            required
            className={styles.input}
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            minLength={6}
            className={styles.input}
            value={formData.password}
            onChange={handleInputChange}
          />

          <button type="submit" className={styles.button}>
            <p>S&apos;inscrire</p>
          </button>
        </form>

        <button onClick={loginHandler} className={styles.button}>
          <p> Connexion </p>
        </button>
      </div>
    </section>
  );
};

export default Auth;
