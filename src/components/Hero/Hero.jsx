import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Arnold,</h1>
        <p className={styles.description}>
          A passionate Software Engineer and Computer Science major at Albion
          College, graduating in May 2026. With a focus on Fullstack Software
          Development, Artificial Intelligence, and Machine Learning, I love
          building impactful tech solutions and contributing to the open-source
          community. I am also minoring in Applied Mathematics, which helps me
          bring a solid analytical approach to every problem I tackle. Reach out
          if you'd like to know more.
        </p>
        <a href="mailto:waigwaarnold@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
