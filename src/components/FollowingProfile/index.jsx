import { useState } from "react";
import styles from "./following-profile.module.css";
import FollowingItem from "./FollowingItem";

export default function FollowingProfile({ following }) {
  const [visibleRepos, setVisibleRepos] = useState(10);
  const hasMore = visibleRepos < following.length;

  const handleLoadMore = () => {
    setVisibleRepos((prev) => prev + 10);
  };

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Pessoas que você está seguindo</h3>

      <div className={styles.activitiesList}>
        {following.slice(0, visibleRepos).map((user) => (
          <FollowingItem key={user.id} user={user} />
        ))}
      </div>

      {hasMore && (
        <button
          className={styles.viewAll}
          onClick={handleLoadMore}
          aria-label={`Carregar mais 10 pessoas. Showing ${visibleRepos} of ${following.length}`}
        >
          Ver mais
        </button>
      )}
    </section>
  );
}