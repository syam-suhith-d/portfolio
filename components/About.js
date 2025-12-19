import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className={`${styles.about} section`}>
            <div className="container">
                <h2 className="section-title">My Tech Stack</h2>
                <div className={styles.skillsWrapper}>
                    <div className={styles.skillCategory}>
                        <h3>Core Stack</h3>
                        <div className={styles.skillList}>
                            <span className={styles.skillItem}>PostgreSQL</span>
                            <span className={styles.skillItem}>Express.js</span>
                            <span className={styles.skillItem}>React</span>
                            <span className={styles.skillItem}>Node.js</span>
                            <span className={styles.skillItem}>MongoDB</span>
                        </div>
                    </div>

                    <div className={styles.skillCategory}>
                        <h3>Languages</h3>
                        <div className={styles.skillList}>
                            <span className={styles.skillItem}>JavaScript (ES6+)</span>
                            <span className={styles.skillItem}>Python</span>
                            <span className={styles.skillItem}>HTML5 & CSS3</span>
                        </div>
                    </div>

                    <div className={styles.skillCategory}>
                        <h3>Tools & Concepts</h3>
                        <div className={styles.skillList}>
                            <span className={styles.skillItem}>Git & GitHub</span>
                            <span className={styles.skillItem}>Next.js</span>
                            <span className={styles.skillItem}>Data Structures</span>
                            <span className={styles.skillItem}>Algorithms</span>
                            <span className={styles.skillItem}>Vibe Coding</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
