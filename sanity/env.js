export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-05";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const token = process.env.NEXT_SANITY_SECRET_TOKEN;
// export const useCdn = false;
export const useCdn = process.env.NODE_ENV === "production";
