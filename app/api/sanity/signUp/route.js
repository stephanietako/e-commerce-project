import { signUpHandler } from "next-auth-sanity";

import sanityClient from "../../../../sanity/lib/sanity";

export const POST = signUpHandler(sanityClient);
