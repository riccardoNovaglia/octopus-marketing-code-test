import { ReactComponent as OctopusEnergyLogo } from "../../assets/logo.svg";
import { ReactComponent as BasketLogo } from "../../assets/basket.svg";
import styles from "./Banner.module.scss";

export function Banner({ itemsInBasket }) {
  const basketAriaLabel =
    itemsInBasket === 0
      ? "No items in the basket"
      : itemsInBasket === 1
      ? `${itemsInBasket} item in the basket`
      : `${itemsInBasket} items in the basket`;

  const basketStyles =
    itemsInBasket > 0 ? styles.basketWrapper : styles.basketWrapperFull;

  return (
    <header role="banner" className={styles.banner}>
      <OctopusEnergyLogo className={styles.octoLogo} />
      <a
        className={basketStyles}
        aria-label={basketAriaLabel}
        href="/basket"
        aria-live="polite"
      >
        <BasketLogo className={styles.basketLogo} aria-hidden />
        {itemsInBasket !== 0 && (
          <p aria-hidden={true} className={styles.basketAmount}>
            {itemsInBasket}
          </p>
        )}
      </a>
    </header>
  );
}
