import styles from "./Bg_experience.module.css";

interface experienceData {
  image_xp: string;
  title_xp: string;
  timeline_xp: string;
}

const Bg_experience: React.FC<experienceData> = ({
  image_xp,
  title_xp,
  timeline_xp,
}) => {
  return (
    <>
      <div className={styles.experience}>
        <img
          src={image_xp}
          alt="xp_logo"
          style={{ width: "48px", height: "48px", borderRadius: "4px" }}
        />
        <div className={styles.xp_title_and_timeline}>
          <div className={styles.title}>{title_xp}</div>
          <div className={styles.timeline}>{timeline_xp}</div>
        </div>
      </div>
    </>
  );
};

export default Bg_experience;
