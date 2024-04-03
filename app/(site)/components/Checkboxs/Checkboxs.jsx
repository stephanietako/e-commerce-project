"use client";
// Importation de useState depuis React pour gérer l'état local dans le composant
import { useState } from "react";
// Importation de la liste des garnitures depuis le fichier utils
import { toppings } from "../../../utils/utils";
// Importation des styles
import styles from "./styles.module.css";

// Fonction utilitaire pour formater le prix avec un signe dollar et deux décimales
const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

// Définition du composant Radiobtn
const Checkboxs = () => {
  // Utilisation de useState pour gérer l'état de la case à cocher et du total
  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );
  const [total, setTotal] = useState(0);

  // Fonction pour gérer le changement de la case à cocher

  const handleOnChange = (position) => {
    // Mise à jour de l'état de la case à cocher
    // La méthode map est utilisée pour créer un nouvel tableau en parcourant chaque élément de checkedState
    // Si l'index de l'élément dans le tableau correspond à la position passée en paramètre,
    // alors on inverse sa valeur (true devient false et vice versa), sinon on laisse la valeur telle quelle
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    // Mise à jour de l'état de checkedState avec le nouveau tableau mis à jour
    setCheckedState(updatedCheckedState);

    // Calcul du total en fonction des cases cochées
    // La méthode reduce est utilisée pour calculer le total en parcourant chaque élément de updatedCheckedState
    // Si l'élément est vrai (c.-à-d. la case est cochée), on ajoute le prix correspondant à l'index dans toppings
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].price; // Ajout du prix de la garniture
        }
        return sum; // Si la case n'est pas cochée, on retourne le total tel quel
      },
      0 // Valeur initiale du total
    );
    // Mise à jour de l'état du total avec le nouveau total calculé
    setTotal(totalPrice);
  };

  // Rendu du composant
  return (
    <div className={styles.container}>
      <h3>Select Toppings</h3>
      <ul className={styles.toppings_list}>
        {/* Mapping à travers la liste de garnitures */}
        {toppings.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className={styles.toppings_list_item}>
                {/* Case à cocher et libellé */}
                <div className={styles.left_section}>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label
                    htmlFor={`custom-checkbox-${index}`}
                    style={{
                      color: "gray",
                      paddingLeft: "0.3rem",
                    }}
                  >
                    {name}
                  </label>
                </div>
                {/* Prix de la garniture */}
                <div className={styles.right_section}>
                  {getFormattedPrice(price)}
                </div>
              </div>
            </li>
          );
        })}
        {/* Affichage du total */}
        <li>
          <div className={styles.toppings_list_item}>
            <div className={styles.left_section}>Total:</div>
            <div className={styles.right_section}>
              {getFormattedPrice(total)}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

// Exportation du composant Radiobtn par défaut
export default Checkboxs;
