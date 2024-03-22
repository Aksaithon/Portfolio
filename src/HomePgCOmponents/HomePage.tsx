import styles from "./HomePage.module.css";
import Background from "./Background";
import Featured from "./Featured";
import Toolbelt from "./Toolbelt";
const HomePage = () => {
  return (
    <>
      <div className={styles.BLOCKS}>
        <div className={styles.Main_BLOCK}>
          <div className={styles.myImg}></div>

          <div className={styles.title_and_cations}>
            <div className={styles.title}>
              Hi, I'm <span className={styles.underline}>Akarshak.</span>
            </div>

            <div className={styles.captions}>
              I'm a <span className={styles.bold}>learner</span> specializing in
              <span className={styles.bold}> React</span> ,
              <span className={styles.bold}> Typscript</span> and the
              <span className={styles.bold}> 3D.</span>
            </div>
          </div>
        </div>

        <div className={styles.FEATURED_AND_ToolBelt_plus_Background_BLOCK}>
          <div className={styles.Featured_BLOCK}>
            <div className={styles.feature_title}>Featured</div>
            <div className={styles.features}>
              <Featured
                image={"/Feature1.png"}
                title={"Feature 1"}
                date={"March 19"}
              />
              <Featured
                image={"/Feature2.png"}
                title={"Feature 2"}
                date={"March 19"}
              />
              <Featured
                image={"/Feature3.png"}
                title={"Feature 3"}
                date={"March 19"}
              />
            </div>
          </div>

          <div className={styles.ToolBelt_plus_Background_BLOCK}>
            <Toolbelt />
            <Background
              imageArr={[
                "/Feature1.png",
                "/Feature2.png",
                "/Feature3.png",
                "/Feature2.png",
                "/Feature1.png",
              ]}
              titleArr={[
                "My doosra experdjaljdalksience",
                "Mero teesdjalkra xp",
                "My doosradakjkal experience",
                "Amazon",
                "Google",
              ]}
              timelineArr={[
                "May 1 - Prejsdlksent",
                "Sep 10 - Decfjslkfjsl25",
                "Jan 20 - Apfsjlfjsldfjsljfljkjfr 31",
                "jlsdjl - jkfjslfjjks",
                "akl09 - klkfsjlf90",
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
