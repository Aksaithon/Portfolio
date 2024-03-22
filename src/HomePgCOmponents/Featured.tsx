import styles from "./Featured.module.css";

interface featureData {
  image: string;
  title: string;
  date: string;
}

const Featured: React.FC<featureData> = ({ image, title, date }) => {
  return (
    <>
      <div

        className={styles.feature}
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 3.04%, rgba(0, 0, 0, 0.59) 55.72%, rgba(0, 0, 0, 0.78) 84.9%), url(${image}) lightgray 50% / cover no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.title_and_date_ui}>
          <div className={styles.feature_title}>{title}</div>
          <div className={styles.date_ui}>
            <div className={styles.date}>{date}</div>
            <img className={styles.arrow} src="/arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
