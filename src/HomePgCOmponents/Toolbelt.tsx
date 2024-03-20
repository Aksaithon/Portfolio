import styles from "./Toolbelt.module.css";

const Toolbelt = () => {
  return (
    <>
      <div className={styles.toolbelt}>
        <div className={styles.toolbelt_title}>Toolbelt</div>
        <ul>
          <li>React</li>
          <li>Typescript</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Figma</li>
          <li>Prototyping</li>
          <li>Wireframing</li>
          <li>Github</li>
          <li>Version Control</li>
        </ul>
      </div>
    </>
  );
};

export default Toolbelt;
