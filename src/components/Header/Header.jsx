import styles from "./Header.module.css";

import Navigation from "../Navigation/Navigation";

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}