import styles from "./Background.module.css";
import Bg_experience from "./Bg_experience";

interface bg_dataArray {
  imageArr: Array<string>;
  titleArr: Array<string>;
  timelineArr: Array<string>;
}

const Background: React.FC<bg_dataArray> = ({
  imageArr,
  titleArr,
  timelineArr,
}) => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.bg_title}>Background</div>
        <div className={styles.bg_experiences}>
          <Bg_experience
            image_xp={imageArr[0]}
            title_xp={titleArr[0]}
            timeline_xp={timelineArr[0]}
          />
          <Bg_experience
            image_xp={imageArr[1]}
            title_xp={titleArr[1]}
            timeline_xp={timelineArr[1]}
          />
          <Bg_experience
            image_xp={imageArr[2]}
            title_xp={titleArr[2]}
            timeline_xp={timelineArr[2]}
          />
          <Bg_experience
            image_xp={imageArr[3]}
            title_xp={titleArr[3]}
            timeline_xp={timelineArr[3]}
          />
        </div>
      </div>
    </>
  );
};

export default Background;
