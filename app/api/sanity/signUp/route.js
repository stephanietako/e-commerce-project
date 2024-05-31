import { signUpHandler } from "next-auth-sanity";

import { client } from "@/sanity/lib/sanity";

export const POST = signUpHandler(client);
