import { useState } from "react";
import * as PropTypes from "prop-types";

import styles from "./AddToBasket.module.scss";

export function AddToBasket({ addItemsToBasket }) {
  const [newItemsQuantity, setNewItemsQuantity] = useState(1);
  const [error, setError] = useState("");

  function decrease() {
    if (newItemsQuantity > 1) {
      setError("");
      setNewItemsQuantity(newItemsQuantity - 1);
    } else {
      setError("Sorry, you need to add at least one item to your cart");
    }
  }

  function increase() {
    if (newItemsQuantity < 15) {
      setError("");
      setNewItemsQuantity(newItemsQuantity + 1);
    } else {
      setError("Sorry, you can only add up to 15 items to your cart");
    }
  }

  function addToCart() {
    setError("");
    addItemsToBasket(newItemsQuantity);
  }

  return (
    <>
      <div className={styles.quantityControls}>
        <p id="quantityLabel" className={styles.quantityLabel}>
          QTY
        </p>
        <button className={styles.quantityButton} onClick={decrease}>
          -
        </button>
        <p aria-labelledby="quantityLabel" className={styles.currentQuantity}>
          {newItemsQuantity}
        </p>
        <button className={styles.quantityButton} onClick={increase}>
          +
        </button>
        {error !== "" && (
          <p aria-live="assertive" className={styles.quantityError}>
            {error}
          </p>
        )}
      </div>
      <button className={styles.addToCart} onClick={addToCart}>
        Add to cart
      </button>
    </>
  );
}

AddToBasket.propTypes = {
  addItemsToBasket: PropTypes.func,
};
