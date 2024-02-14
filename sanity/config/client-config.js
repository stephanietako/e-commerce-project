// Importez les variables depuis le fichier "env.js"
import { apiVersion, dataset, projectId, useCdn, token } from "../env";

// Importez les fonctions depuis les modules nécessaires
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// Créez la configuration
const config = {
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
};

// Créez une instance du client
const client = createClient(config);

// Créez le constructeur d'URL d'image
const builder = imageUrlBuilder(client);

// Fonction pour construire l'URL de l'image
export function urlFor(source) {
  return builder.image(source);
}

export default config;
