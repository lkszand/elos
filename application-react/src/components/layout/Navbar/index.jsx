import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <ul className={styles.list_items}>
        <li>Processo Seletivo</li>
        <li>Concursos</li>
        <li>Ajude o Projeto</li>
      </ul>
    </div>
  );
}
