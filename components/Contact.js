import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={`${styles.contact} section`}>
            <div className="container">
                <h2 className="section-title">Let's Vibe</h2>
                <p className={styles.text}>
                    I'm currently looking for full-time opportunities. If you have a project or just want to say hi, send me a message!
                </p>

                <a href="mailto:syamsuhithd@gmail.com" className={styles.emailDirect}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    syamsuhithd@gmail.com
                </a>

                <form className={styles.form} action="mailto:syamsuhithd@gmail.com" method="post" encType="text/plain">
                    <input type="text" name="name" placeholder="Your Name" className={styles.input} required />
                    <input type="email" name="email" placeholder="Your Email" className={styles.input} required />
                    <textarea name="message" placeholder="Your Message" rows="5" className={styles.textarea} required></textarea>
                    <button type="submit" className={styles.button}>Send Message</button>
                </form>

                <div className={styles.links}>
                    <div className={styles.socials}>
                        <a href="https://github.com/syam-suhith-d" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/syam-suhith-dondapati-/" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                            <span>LinkedIn</span>
                        </a>
                        <a href="mailto:syamsuhithd@gmail.com" className={styles.socialCard}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <span>Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
