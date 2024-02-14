import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
// import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import config from "../config/client-config";

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
    SanityCredentials(config),
  ],
  session: {
    strategy: "jwt",
  },
  adapter: SanityAdapter(config),
  debug: process.env.NODE_ENV === "developpement",
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {},
};
export default NextAuth(authOptions);
