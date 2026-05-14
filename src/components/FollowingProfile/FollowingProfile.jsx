import { useState } from "react";
import styles from "./followingProfile.module.css";
import FollowingItem from "./FollowingItem/FollowingItem";

export default function FollowingProfile({ following }) {
  const [visibleRepos, setVisibleRepos] = useState(10);

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Pessoas que você está seguindo</h3>

      <div className={styles.activitiesList}>
        {following.slice(0, visibleRepos).map((user) => (
          <FollowingItem key={user.id} user={user} />
        ))}
      </div>

      {visibleRepos < following.length && (
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
