import Image from "next/image";
import logo from "./logo.png";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <Image src={logo} alt="Logo" />
      </a>
      <h1>Bem-vindo de volta, Marcus</h1>
      <p>Segunda, 01 de dezembro de 2025</p>
    </header>
  );
}
