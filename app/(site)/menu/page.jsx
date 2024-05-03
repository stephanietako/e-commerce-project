import Link from "next/link";
import { getDataProducts } from "@/sanity/lib/client";

const Menu = async () => {
  // Récupérer les produits depuis votre source de données
  const products = await getDataProducts();

  // Définition de l'ordre des catégories
  const customOrder = [
    "Fleurs",
    "Résines",
    "E-liquides",
    "Cosmetics",
    "Goodies",
    "Jewelry",
  ];
  console.log("ORDRE DES PRODUITS", products);
  // Tableau pour stocker les produits triés
  let sortedProducts = [];

  // Parcourir l'ordre personnalisé des catégories
  for (const category of customOrder) {
    // Filtrer les produits par catégorie
    const productsInCategory = products.filter(
      (product) => product.category === category
    );

    // Ajouter les produits de cette catégorie au tableau des produits triés
    sortedProducts = [...sortedProducts, ...productsInCategory];
  }

  return (
    <div className="menu_products">
      <div className="links">
        {sortedProducts.map((product) => (
          <Link
            key={product._id}
            href={`/products/${product.slug}`}
            className="link"
          >
            {product.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
