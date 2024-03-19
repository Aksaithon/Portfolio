import styles from "./HomePage.module.css";
import Featured from "./HomePgCOmponents/Featured";
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

          <div className="ToolBelt_plus_Background_BLOCK">
            <div className="toolbelt">
              <div className="toolbelt_title"></div>
              <div className="allMyTools"></div>
            </div>
            <div className="background">
              <div className="background_title"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
