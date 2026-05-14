import { useOutletContext } from "react-router-dom";
import styles from "./home.module.css";
import UserProfile from "../../components/UserProfile";
import PopularRepositories from "../../components/PopularRepositories";
import LanguageStats from "../../components/LanguageStats";
import RecentActivity from "../../components/RecentActivity";

export default function Home() {
  const { profile, repos, languages, activities, loading, error } = useOutletContext();

  return (
    <main className={styles.container}>
      <div className={styles.profileSection}>
        <UserProfile profile={profile} loading={loading} error={error} />
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.leftColumn}>
          <PopularRepositories repos={repos} />
        </div>

        <div className={styles.rightColumn}>
          <LanguageStats languages={languages} repos={repos} />
        </div>
      </div>
      <div>
        <RecentActivity repos={repos} activities={activities} />
      </div>
    </main>
  );
}
