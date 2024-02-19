import styles from "./bannerHome.module.css";
import Pulse from "../../layout/Pulse";
import ContentInfo from "../ContentInfo";
import logo from "../../../assets/white-logo.png";
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
      <div className={styles.content_image}>
        <img src={logo} alt="logo" />
      </div>
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
        <BoxQuotes message="Nenhum de nós é tão bom quanto todos nós juntos" />
      </div>
    </section>
  );
}
