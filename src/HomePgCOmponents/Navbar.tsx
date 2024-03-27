import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo_and_nav_links}>
        <img
          src="/Croped-Pic.png"
          alt="logo"
          style={{ width: "38px", height: "38px" }}
        />
        <div className={styles.nav_links}>
          <p>Home</p>
          <p>Blog</p>
          <p>Showcase</p>
        </div>
      </div>

      <div className={styles.social_links}>
        <a href="https://twitter.com/sharma_akarshak">
          <img
            src="/x-com.svg"
            alt="twitter"
            style={{ width: "20px", height: "20px" }}
          />
        </a>
        <a href="https://github.com/Aksaithon">
          <img
            src="/github.svg"
            alt="github"
            style={{ width: "24px", height: "24px" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/akarshak-sharma/">
          <img
            src="/linkedin.svg"
            alt="linkedin"
            style={{ width: "24px", height: "24px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
