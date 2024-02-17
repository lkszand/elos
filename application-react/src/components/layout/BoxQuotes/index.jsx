import styles from "./boxQuotes.module.css";
import { ImQuotesRight } from "react-icons/im";

export default function BoxQuotes({ message }) {
  return (
    <div className={styles.content_quotes}>
      <span>
        <ImQuotesRight />
      </span>
      <p>{message}</p>
    </div>
  );
}
