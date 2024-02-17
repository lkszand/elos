import styles from "./bannerHome.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../../assets/puc.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

export default function BannerHome() {
  return (
    <section className={styles.section_banner}>
      <div className={styles.contentCenter}>
        <div className={styles.slide}>
          <div className={styles.infoBanner}>
            <span>Elos</span>
            <h1>Projeto Social Educacional</h1>
            <p>
              Curso voluntário, gerido por estudantes no Rio de Janeiro,
              totalmente gratuito e sem fins lucrativos. Nosso foco está na
              promoção da educação popular, direcionada a alunos de escolas
              municipais.
            </p>
            <a href="/" className={styles.btn}>
              Saiba Mais
            </a>
          </div>
          <div>
            <img src={img} alt="sss" width={200} />
          </div>
        </div>
      </div>
    </section>
  );
}
