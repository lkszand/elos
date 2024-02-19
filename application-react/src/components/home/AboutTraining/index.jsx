import styles from "./aboutTraining.module.css";
import book from "../../../assets/pilha-de-livros.png";
import test from "../../../assets/prova-de-impressao.png";
import logo from "../../../assets/estudante_2.png";
import lampada from "../../../assets/lampada.png";
import CardAboutHome from "../CardAboutHome";
import { FaInstagram } from "react-icons/fa6";

export default function AboutTraining() {
  return (
    <section className={styles.container_about_home}>
      <div className={styles.content_img}>
        <img src={logo} alt="aluno" />
      </div>
      <div className={styles.content_info_about_home}>
        <p>
          # <span>para nossos alunos</span>
        </p>
        <h2>Lorem Ipsum dolor</h2>
        <div className={styles.content_cards_about_home}>
          <CardAboutHome img={book} />
          <CardAboutHome img={lampada} />
          <CardAboutHome img={test} />
        </div>
        <div className={styles.content_contact_about}>
          <a>
            <FaInstagram />
            Comece agora a aprender conosco
            <span>Visite nosso Instragram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
