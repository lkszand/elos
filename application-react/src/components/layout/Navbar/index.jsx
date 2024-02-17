import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <ul className={styles.list_items}>
        <li>
          <Link to={"/process"}>Processo Seletivo</Link>
        </li>
        <li>
          <Link to={"/process"}>Concursos</Link>
        </li>
        <li>
          <Link to={"/process"}>Ajude o Projeto</Link>
        </li>

        {/* <li>Processo Seletivo</li>
        <li>Concursos</li>
        <li>Ajude o Projeto</li> */}
      </ul>
    </div>
  );
}
