import styles from './repositoryCard.module.css';

export default function RepositoryCard({ repository }) {
  const getLanguageColor = (language) => {
    const colors = {
      'TypeScript': '#3178c6',
      'JavaScript': '#f1e05a',
      'Python': '#3572A5',
      'Java': '#b07219',
      'CSS': '#563d7c',
      'HTML': '#e34c26'
    };
    return colors[language] || '#999999';
  };

  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.repoIcon}>📚</div>
        <a href="#" className={styles.repoName}>{repository.name}</a>
      </div>

      <p className={styles.description}>{repository.description}</p>

      <div className={styles.footer}>
        <div className={styles.language}>
          <span
            className={styles.languageDot}
            style={{ backgroundColor: getLanguageColor(repository.language) }}
          />
          <span>{repository.language}</span>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statIcon}>⭐</span>
            <span>{repository.stars}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statIcon}>🍴</span>
            <span>{repository.forks}</span>
          </div>
        </div>

        <span className={styles.updatedAt}>{repository.updatedAt}</span>
      </div>
    </article>
  );
}