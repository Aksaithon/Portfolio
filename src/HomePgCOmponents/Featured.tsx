import { useState } from "react";
import styles from "./Featured.module.css";

interface featureData {
  image: string;
  title: string;
  date: string;
}

const Featured: React.FC<featureData> = ({ image, title, date }) => {

  const [hover, setHover] = useState(false);
  return (
    <>
      <div
        className={styles.feature}  
        style={{
          background: hover ? `linear-gradient(180deg, rgba(0, 248, 99, 0) 1%, rgba(82, 255, 1, 0) 8%, rgba(0, 0, 0, 1) 100%), url(${image}) lightgray 50% / cover no-repeat` : `linear-gradient(180deg, rgba(0, 248, 99, 0) 1%, rgba(82, 255, 1, 0) 8%, rgba(0, 0, 0, 1) 100%), url(${image}) lightgray 50% / cover no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onMouseEnter={() => {setHover(true)}}
        onMouseLeave={() => {setHover(false)}}
      >
        <div className={styles.title_and_date_ui}>
          <div className={styles.feature_title}>{title}</div>
          <div className={styles.date_ui}>
            <div className={styles.date}>{date}</div>
            <img className={styles.arrow} src="/external_link.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
