// ./sanity/lib/auth.js

import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// import clientConfig from "../config/client-config";
import { client } from "./sanity"; // Utilisation d'une importation nommée

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    SanityCredentials(client),
  ],
  session: {
    strategy: "jwt",
  },
  adapter: SanityAdapter(client),
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: async ({ session, token }) => {
      const userEmail = token.email;
      const id = token._id;
      const userIdObj = await client.fetch(
        `*[_type == "user" && email == $email][0] {
        _id,
      _createdAt,
      }`,
        { email: userEmail }
      );
      return {
        ...session,
        user: {
          ...session.user,
          id: userIdObj._id,
        },
      };
    },
  },
};

export default NextAuth(authOptions);
