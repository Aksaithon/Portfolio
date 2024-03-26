import styles from "./Toolbelt.module.css";

const Toolbelt = () => {
  return (
    <>
      <div className={styles.toolbelt}>
        <div className={styles.toolbelt_title}>Toolbelt</div>
        <ul>
          <li>React</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Prototyping</li>
          <li>Github</li>
          <li>Figma</li>
          <li>Wireframing</li>
          <li>Version Control</li>
        </ul>
      </div>
    </>
  );
};

export default Toolbelt;
