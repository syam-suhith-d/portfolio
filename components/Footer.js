import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                &copy; {new Date().getFullYear()} <span className={styles.highlight}>D Syam Suhith</span>. All rights reserved.
            </p>
            <p className={styles.sub}>Crafted with Next.js with vibe coding aesthetics</p>
        </footer>
    );
};

export default Footer;
