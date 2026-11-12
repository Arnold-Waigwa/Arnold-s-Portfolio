import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor-icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Engineering</h3>
              <p>
                I build APIs with Express.js, Django and FastAPI, backed by SQL
                databases and Redis. My work includes secure authentication,
                rate limiting, and real-time booking flows that keep
                applications running smoothly as people use them.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server-icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud &amp; Infrastructure</h3>
              <p>
                I take applications from local development to production with
                AWS, Docker, and GitHub Actions. I build deployment pipelines
                with automated test gates and use monitoring to catch issues and
                keep services reliable.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="coding-icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack &amp; Agentic Coding</h3>
              <p>
                I connect backend systems to useful interfaces with React,
                Next.js, and TypeScript. I also use Codex and Claude Code
                throughout development, pairing AI-assisted coding with hands-on
                debugging, review, and testing.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
