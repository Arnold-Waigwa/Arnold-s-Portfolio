import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer className={styles.container} id="contacts">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link2}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email Icon" />
          <a href="mailto:waigwaarnold@gmail.com">waigwaarnold@gmail.com</a>
        </li>
        <li className={styles.link2}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Linkedin Icon"
          />
          <a href="https://www.linkedin.com/in/arnold-waigwa/">
            linkedin.com/Arnold Waigwa
          </a>
        </li>
        <li className={styles.link2}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
          <a href="https://github.com/Arnold-Waigwa">
            github.com/Arnold Waigwa
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
