export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const token = process.env.SANITY_SECRET_TOKEN;

export const useCdn = false;
