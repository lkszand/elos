import styles from "./cardAboutHome.module.css";
import book from "../../../assets/pilha-de-livros.png";

export default function CardAboutHome({ message, title, img = book }) {
  return (
    <div className={styles.card}>
      <img src={img} alt="exemplo" />
      <h4>Educacional</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
        voluptatem quaerat voluptate non ad libero cupiditate ab quae illum
        dignissimos qui aliquam eaque autem ut.
      </p>
    </div>
  );
}
