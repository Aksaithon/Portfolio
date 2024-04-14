import Featured from "../HomePgCOmponents/Featured";
import styles from "./Showcase.module.css";

const Showcase = () => {
  return (
    <div className={styles.showcase_flex}>
      <div className={styles.title}>Showcase</div>
      <div className={styles.features_grid}>
        <Featured
          image={"/Feature_AfterCopy.png"}
          title={"After.com COPY!"}
          date={"Feb 15"}
          feature_link="https://aftercopy.netlify.app/"
        />
        <Featured
          image={"/Feature_TikTaker.png"}
          title={"Tik-Taker"}
          date={"Nov 12 '23"}
          feature_link="https://tiktaker.netlify.app/"
        />
        <Featured
          image={"/Feature_First_Website.png"}
          title={"First website"}
          date={"Sep 10 '23"}
          feature_link="https://myy-1st-site.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Showcase;
