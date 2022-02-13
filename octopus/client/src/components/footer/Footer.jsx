import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Octopus Energy Ltd is a company registered in England and Wales.</p>
      <p>
        Registered number: 09265424. Registered office: 35 Holborn London. EC1N
        2HT. Trading office: 20-24 Broadwick Street London, W1F 8HT
      </p>
    </footer>
  );
}
