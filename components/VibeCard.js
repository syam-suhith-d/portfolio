import styles from './VibeCard.module.css';

const VibeCard = ({ children, className = '', title }) => {
    return (
        <div className={`${styles.card} ${className}`}>
            {title && <h3 className={styles.title}>{title}</h3>}
            {children}
        </div>
    );
};

export default VibeCard;
