import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  //if its open, apply this style(class)
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={styles.menuItems}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
