import styles from './Hero.module.css';
import TextRotator from './TextRotator';

const Hero = () => {
    return (
        <section className={`${styles.hero} section`}>
            <div className="container">
                <div className={styles.textWrapper}>
                    <h1 className={styles.title}>
                        Hey, I'm <span className={styles.nameStyle}>Syam Suhith</span>
                    </h1>
                    <h2 className={styles.subtitle}>
                        Full Stack Developer | <TextRotator />
                    </h2>
                    <p className={styles.description}>
                        Turning caffeine into clean code and building digital experiences that pass the vibe check.
                        Highly Specialized in MERN Stack, Python, and Next-Level Interfaces.
                    </p>
                </div>
                <div className={styles.actions}>
                    <a href="#projects" className={styles.cta}>See My Work</a>
                    <a href="#contact" className={styles.secondaryCta}>Contact Me</a>
                    <a href="/Resume.pdf" download="Syam_Suhith_Resume.pdf" className={styles.resumeBtn} aria-label="Download Resume">
                        <span>Resume</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
