// api.js
import { getCategory } from "@/sanity/lib/client";

export async function fetchData() {
  return getCategory();
}
