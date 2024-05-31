/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.jsx` route
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./schema";
import { schemaTypes } from "./schema";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";

export default defineConfig({
  title: "projet-vibes",
  basePath: "/studio",
  projectId,
  dataset,
  apiVersion,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
