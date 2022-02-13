import { PageTitle } from "../../components/PageTitle";
import styles from "./Basket.module.scss";

export function Basket({ clearBasket }) {
  return (
    <div className={styles.basket}>
      <PageTitle title={"Your basket"} />
      <button onClick={clearBasket}>Clear basket</button>
      <a className={styles.backHome} href="/">
        Back home
      </a>
    </div>
  );
}
