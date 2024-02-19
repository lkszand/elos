import AboutTraining from "../../home/AboutTraining";
import AboutUs from "../../home/AboutUs";
import BannerHome from "../../home/BannerHome";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <BannerHome />
      <AboutTraining />
      <AboutUs />
    </>
  );
}
