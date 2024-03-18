import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={styles.BLOCKS}>

        <div className={styles.Main_BLOCK}>
          <div className={styles.myImg}></div>

          <div className={styles.title_and_cations}>

            <div className={styles.title}>Hi, I'm Akarshak.</div>

            <div className={styles.captions}>
              I'm a <span className={styles.bold}>learner</span> specializing in
              <span className={styles.bold}>React</span> ,
              <span className={styles.bold}>Typscript</span> and the
              <span className={styles.bold}>3D.</span>
            </div>

          </div>
          
        </div>

        <div className="Featured_BLOCK"></div>

        <div className="ToolBelt_plus_Background_BLOCK"></div>
      </div>
    </>
  );
};

export default HomePage;
