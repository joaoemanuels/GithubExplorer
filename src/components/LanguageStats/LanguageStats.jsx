import styles from './languageStats.module.css';

export default function LanguageStats() {
  const languages = [
    { name: 'TypeScript', percentage: 45.2, color: '#3178c6' },
    { name: 'JavaScript', percentage: 28.7, color: '#f1e05a' },
    { name: 'CSS', percentage: 12.4, color: '#563d7c' },
    { name: 'HTML', percentage: 7.8, color: '#e34c26' },
    { name: 'Shell', percentage: 3.1, color: '#89e051' },
    { name: 'Outros', percentage: 2.8, color: '#d0d0d0' }
  ];

  const circumference = 2 * Math.PI * 45;
  let currentOffset = 0;

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Linguagens mais usadas</h3>

      <div className={styles.content}>
        <div className={styles.chartContainer}>
          <svg 
            viewBox="0 0 120 120" 
            className={styles.chart}
          >
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="#f1f5f9"
              strokeWidth="10"
            />
            {languages.map((lang, index) => {
              const offset = currentOffset;
              const strokeDashoffset = circumference - (lang.percentage / 100) * circumference;
              currentOffset -= (lang.percentage / 100) * circumference;

              return (
                <circle
                  key={lang.name}
                  cx="60"
                  cy="60"
                  r="45"
                  fill="none"
                  stroke={lang.color}
                  strokeWidth="10"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  style={{ transform: 'rotate(-90deg)', transformOrigin: '60px 60px' }}
                />
              );
            })}
          </svg>
        </div>

        <div className={styles.legend}>
          {languages.map(lang => (
            <div key={lang.name} className={styles.legendItem}>
              <div
                className={styles.legendColor}
                style={{ backgroundColor: lang.color }}
              />
              <span className={styles.legendName}>{lang.name}</span>
              <span className={styles.legendPercentage}>{lang.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}