import { useState } from "react";
import styles from "./followers-profile.module.css";
import FollowersItem from "./FollowersItem";

export default function FollowersProfile({ followers }) {
  const [visibleRepos, setVisibleRepos] = useState(10);

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Pessoas que estão te seguindo</h3>

      <div className={styles.activitiesList}>
        {followers.slice(0, visibleRepos).map((user) => (
          <FollowersItem key={user.id} user={user} />
        ))}
      </div>

      {visibleRepos < followers.length && (
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
