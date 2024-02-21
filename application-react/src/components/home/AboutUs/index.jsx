import styles from "./aboutUs.module.css";
import student from "../../../assets/students.png";
import ContainerBall from "../../layout/ContainerBall";

export default function AboutUs() {
  return (
    <section className={styles.container_about_us}>
      <div className={styles.content_info_about_us}>
        <p className={styles.mini_title}>
          # <span>Quem nós somos</span>
        </p>
        <h2>Elos Educação</h2>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure rerum
          ipsam recusandae hic necessitatibus sint aut sequi unde non facilis
          quod aliquam, explicabo, nobis minima, ipsum placeat saepe? Provident,
          culpa? Suscipit hic fugiat, quam, similique voluptate praesentium enim
          vitae aliquam, sequi voluptatem accusamus a beatae nulla dolores neque
          facilis quasi impedit aut. Maxime atque illum totam, deleniti saepe
          officia at!
        </p>
        <p className={styles.paragraph}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          doloremque hic minus autem nulla sequi dolore maxime odio. Sapiente
          assumenda ullam animi, quisquam qui sunt beatae soluta fugiat quaerat
          unde.
        </p>
        <div className={styles.row_graphicsBall}>
          <ContainerBall data="7" message="alunos" />
          <ContainerBall data="7" message="alunos" />
          <ContainerBall data="7" message="alunos" />
        </div>
      </div>
      <div className={styles.content_image}>
        {/*poderia colocar esse container como componente*/}
        <img src={student} alt="" />
      </div>
    </section>
  );
}
