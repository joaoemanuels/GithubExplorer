import RepositoryCard from './RepositoryCard/RepositoryCard';
import styles from './popularRepositories.module.css';

export default function PopularRepositories() {
  const repositories = [
    {
      id: 1,
      name: 'github-explorer',
      description: 'Aplicação para explorar perfis do GitHub com estatísticas e repositórios.',
      language: 'TypeScript',
      stars: 128,
      forks: 32,
      updatedAt: 'Atualizado há 2 dias'
    },
    {
      id: 2,
      name: 'dev-portfolio',
      description: 'Meu portfólio pessoal desenvolvido com React e TailwindCSS.',
      language: 'TypeScript',
      stars: 96,
      forks: 24,
      updatedAt: 'Atualizado há 1 semana'
    },
    {
      id: 3,
      name: 'react-components',
      description: 'Biblioteca de componentes reutilizáveis criados com React e TypeScript.',
      language: 'TypeScript',
      stars: 78,
      forks: 18,
      updatedAt: 'Atualizado há 2 semanas'
    },
    {
      id: 4,
      name: 'node-api',
      description: 'API REST construída com Node.js, Express e MongoDB.',
      language: 'JavaScript',
      stars: 64,
      forks: 12,
      updatedAt: 'Atualizado há 3 semanas'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Repositórios Populares</h2>
        <a href="#" className={styles.viewAll}>Ver todos</a>
      </div>

      <div className={styles.repositoriesList}>
        {repositories.map(repo => (
          <RepositoryCard key={repo.id} repository={repo} />
        ))}
      </div>
    </section>
  );
}