import styles from "./bannerHome.module.css";
import Pulse from "../../layout/Pulse";
import ContentInfo from "../ContentInfo";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BoxInfo from "../../layout/BoxInfo";
import BoxQuotes from "../../layout/BoxQuotes";

export default function BannerHome() {
  return (
    <section className={styles.section_banner}>
      <div className={styles.contentCenter}>
        <div className={styles.slide}>
          <ContentInfo />
          <div className={styles.contentPlay}>
            <Pulse />
          </div>
        </div>
      </div>
      <div className={styles.contentBottom}>
        <BoxInfo number={15} info="Anos de experiência" />
        <BoxQuotes message="Programa Elos Educação de formação pré-técnica gratuita para colégios do ensino médio de excelência" />
      </div>
    </section>
  );
}
