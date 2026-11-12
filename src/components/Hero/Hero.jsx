import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Arnold,</h1>
        <p className={styles.description}>
          I&apos;m a Computer Science Major and Applied Mathematics Minor
          graduating in December 2026. I am also a software engineer who enjoys
          building what happens behind the scenes: reliable APIs, backend
          systems, and infrastructure that keeps them running. I&apos;ve worked
          on everything from logistics software to a campus ride-sharing app,
          taking ideas from code to production with Python, TypeScript, and AWS.
          I also use agentic coding tools like Claude Code and Codex to help
          build and iterate, with testing and review along the way. Have a role
          or project in mind? Let&apos;s connect.
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
