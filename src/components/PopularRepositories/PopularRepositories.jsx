import { useState } from "react";

import RepositoryCard from "./RepositoryCard/RepositoryCard";
import styles from "./popularRepositories.module.css";

export default function PopularRepositories({ repos }) {
  const [visibleRepos, setVisibleRepos] = useState(5);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Repositórios Populares</h2>
		
        {visibleRepos < repos.length && (
          <button
            className={styles.viewAll}
            onClick={() => setVisibleRepos((prev) => prev + 10)}
          >
            Ver mais
          </button>
        )}
      </div>

      <div className={styles.repositoriesList}>
        {repos.slice(0, visibleRepos).map((repo) => (
          <RepositoryCard key={repo.id} repository={repo} />
        ))}
      </div>
    </section>
  );
}
