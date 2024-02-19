import styles from "./contentInfo.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Bubble from "../../layout/Bubble";

export default function ContentInfo() {
  return (
    <div className={styles.infoBanner}>
      <Bubble />
      <h1>
        Projeto Social <span>Educacional</span>
      </h1>
      <p>
        Curso voluntário, gerido por estudantes no Rio de Janeiro, totalmente
        gratuito e sem fins lucrativos. Nosso foco está na promoção da educação
        popular, direcionada a alunos de escolas municipais.
      </p>
      <a href="/" className={styles.btn}>
        Saiba Mais <FaArrowRightLong />
      </a>
    </div>
  );
}
