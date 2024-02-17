import styles from "./boxInfo.module.css";

export default function BoxInfo({ number, info}) {
  return (
    <div className={styles.content_box}>
      <h2>{number}</h2>
      <h4>{info}</h4>
    </div>
  );
}
