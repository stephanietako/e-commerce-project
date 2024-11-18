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
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };
  /////////
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/"); // Redirige seulement si la session est active
    }
  }, [session, router]); // Ne se déclenche que lorsqu'il y a une modification de session

  ////////////
  const validateEmail = (email) => {
    // Regex to validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // S'assurer que le mot de passe contient au moins 8 caractères, une lettre majuscule, un chiffre et un caractère spécial
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation
    const errors = {};

    if (!validateEmail(formData.email)) {
      errors.email = "Veuillez entrer un email valide.";
    }
    if (!validatePassword(formData.password)) {
      errors.password =
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return; // Stop form submission if there are validation errors
    }

    signUp(formData)
      .then((user) => {
        if (user) {
          // Connecte automatiquement l'utilisateur après l'inscription
          signIn("credentials", {
            email: formData.email,
            password: formData.password,
          }).then(() => {
            toast.success("Inscription réussie ! Bienvenue !");
          });
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
          <div>
            <input
              type="email"
              name="email"
              placeholder="name@company.com"
              required
              className={styles.input}
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && (
              <p className={styles.error}>{formErrors.email}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              required
              className={styles.input}
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              required
              minLength={6}
              className={styles.input}
              value={formData.password}
              onChange={handleInputChange}
            />
            {formErrors.password && (
              <p className={styles.error}>{formErrors.password}</p>
            )}
          </div>

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
