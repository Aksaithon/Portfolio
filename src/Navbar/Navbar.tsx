import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

//   window.onload = () => {
//     const homeLink = document.getElementById('home');
//     if (homeLink) {
//         homeLink.style.color = '#fff'; // Change the color to your desired value
//     }
// };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo_and_nav_links}>
        <NavLink to={"/"}>
          <img
            src="/Croped-Pic.png"
            alt="logo"
            style={{ width: "38px", height: "38px" }}
          />
        </NavLink>
        <div className={styles.nav_links}>
          <NavLink className={styles.nav} to={"/"}>
            Home
          </NavLink>
          <NavLink className={styles.nav} to={"/blog"}>
            Blog
          </NavLink>
          <NavLink className={styles.nav} to={"/showcase"}>
            Showcase
          </NavLink>
        </div>
      </div>

      {windowWidth > 768 && (
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
      )}
    </div>
  );
};

export default Navbar;
