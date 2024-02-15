import styles from "./iconsSocials.module.css";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function IconsSocials() {
  return (
    <ul className={styles.container_iconsSocials}>
      <li>
        <FaWhatsapp />
      </li>
      <li>
        <FaFacebookF />
      </li>
      <li>
        <MdOutlineEmail />
      </li>
      <li>
        <FaInstagram />
      </li>
    </ul>
  );
}
