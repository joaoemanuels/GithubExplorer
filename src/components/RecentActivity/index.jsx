import { useState } from "react";
import styles from "./recent-activity.module.css";
import ActivityItem from "./ActivityItem";

export default function RecentActivity({ repos, activities }) {
  const [visibleRepos, setVisibleRepos] = useState(5);

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Atividade Recente</h3>

      <div className={styles.activitiesList}>
        {activities.slice(0, visibleRepos).map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>

      {visibleRepos < repos.length && (
        <button
          className={styles.viewAll}
          onClick={() => setVisibleRepos((prev) => prev + 10)}
        >
          Ver mais
        </button>
      )}
    </section>
  );
}
