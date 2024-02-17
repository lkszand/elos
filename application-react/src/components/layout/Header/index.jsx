import Navbar from "../Navbar";
import styles from "./header.module.css";
import logo from "../../../assets/elos.png";
import IconsSocials from "../IconsSocials";

export default function Header() {
  return (
    <div className={styles.container_header}>
      <div className={styles.pathsLogo}>
        <img src={logo} alt="logo Elos" />
        <Navbar />
      </div>
      <IconsSocials />
    </div>
  );
}
