import VibeCard from './VibeCard';
import styles from './Projects.module.css';

const projects = [
    {
        title: 'Fake Store API',
        description: 'A React-based e-commerce application fetching real-time data from Fake Store API with product filtering and cart functionality.',
        tags: ['React', 'API Integration', 'CSS'],
        link: 'https://fake-store-three-delta.vercel.app/'
    },
    {
        title: 'AI Code Assistant',
        description: 'Python-based CLI tool using OpenAI API to help debug code directly from the terminal.',
        tags: ['Python', 'OpenAI API', 'CLI'],
        link: '#'
    },
    {
        title: 'Algorithm Visualizer',
        description: 'Interactive web app to visualize sorting and pathfinding algorithms, built to master DSA.',
        tags: ['JavaScript', 'HTML5 Canvas', 'CSS'],
        link: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className={`${styles.projects} section`}>
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <VibeCard key={index} title={project.title} className={styles.projectCard}>
                            <p className={styles.desc}>{project.description}</p>
                            <div className={styles.tags}>
                                {project.tags.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                            <a href={project.link} className={styles.link}>View Project &rarr;</a>
                        </VibeCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
