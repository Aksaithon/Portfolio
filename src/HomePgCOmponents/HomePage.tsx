import styles from "./HomePage.module.css";
import Background from "./Background";
import Featured from "./Featured";
import Toolbelt from "./Toolbelt";
const HomePage = () => {
  return (
    <>
      <div className={styles.BLOCKS}>
        <div className={styles.Main_BLOCK}>
          <img
            src="/Croped-Pic.svg"
            alt="my-pic"
            loading="eager"
            className={styles.myImg}
          ></img>

          <div className={styles.title_and_cations}>
            <div className={styles.title}>
              Hi, I'm <span className={styles.underline}>Akarshak.</span>
            </div>

            <div className={styles.captions}>
              I'm a <span className={styles.bold}>Design engineer </span>
              specializing in
              <span className={styles.bold}> 3D</span> ,
              <span className={styles.bold}> Typscript,</span> and the
              <span className={styles.bold}> web.</span>
            </div>
          </div>
        </div>

        <div className={styles.FEATURED_AND_ToolBelt_plus_Background_BLOCK}>
          <div className={styles.Featured_BLOCK}>
            <div className={styles.feature_title}>Featured</div>
            <div className={styles.features}>
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

          <div className={styles.ToolBelt_plus_Background_BLOCK}>
            <Toolbelt />
            <Background
              imageArr={[
                "/Feature_AfterCopy.svg",
                "/KukImg.svg",
                "/Meta.svg",
                "/School_Img.svg",
              ]}
              titleArr={[
                "Developing after.com COPY",
                "Bachelor in Computer Applications",
                "Intro to Front-End development",
                "School",
              ]}
              timelineArr={[
                "Present - Self",
                "July 2024 - Kurukshetra University",
                "Aug 2023 - META",
                "2020 - Homerton Grammar School",
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
