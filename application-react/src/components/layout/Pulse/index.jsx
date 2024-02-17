import styles from './pulse.module.css';
import { FaPlay } from "react-icons/fa6";

export default function Pulse() {
  return (
    <div className={styles.pulse}>
      <FaPlay />
    </div>
  );
}
