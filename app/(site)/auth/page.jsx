"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signUp } from "next-auth-sanity/client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
// Assets
import GithubIcon from "@/public/github.png";
import GoogleIcon from "@/public/google.png";
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
  const router = useRouter();

  useEffect(() => {
    if (session) router.push("/");
  }, [router, session]);

  const loginHandler = async () => {
    try {
      await signIn();
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Something wen't wrong");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await signUp(formData);
      if (user) {
        toast.success("Success. Please sign in");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wen't wrong");
    } finally {
      setFormData(defaultFormData);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.form}>
        <div className={styles.heading}>
          <h2 className={styles.subHeading}>Create an account</h2>
          <p>OR</p>
          <span className={styles.icons}>
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
            Sign Up
          </button>
        </form>

        <button onClick={loginHandler} className={styles.button}>
          login
        </button>
      </div>
    </section>
  );
};
const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
  },
  heading: {
    fontWeight: "bold",
    fontSize: "25px",
    color: "blue",
    textAlign: "center",
  },
  subHeading: {
    fontWeight: "bold",
    fontSize: "25px",
    textAlign: "center",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "16px",
  },
  button: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "blue",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    width: "40%",
    marginTop: "10px",
  },
};
export default Auth;
