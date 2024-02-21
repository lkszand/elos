import styles from "./containerBall.module.css";

export default function ContainerBall({ data = "--", message = "--" }) {
  return (
    <div className={styles.container_ball}>
      <span>+{data}</span>
      <p>{message}</p>
    </div>
  );
}
