import { useOutletContext } from "react-router-dom";
import styles from "./home.module.css";
import UserProfile from "../../components/UserProfile";
import PopularRepositories from "../../components/PopularRepositories";
import LanguageStats from "../../components/LanguageStats";
import RecentActivity from "../../components/RecentActivity";

export default function Home() {
  const { profile, repos, languages, activities, loading, error } =
    useOutletContext();
  if (loading) {
    return (
      <main className={styles.container}>
        <h2>Loading...</h2>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.container}>
        <h2>Erro ao buscar usuário </h2>
        <p>{error}</p>
      </main>
    );
  }

  if (!profile) {
    return (
      <main className={styles.container_empty}>
        <div className={styles.emptyState}>
          <i className={`ti ti-search ${styles.icon}`}></i>

          <h2>Pesquise um perfil do GitHub</h2>
          <p>Digite um nome de usuário para ver repositórios e atividades.</p>

          <div className={styles.hint}>
            <p>
              <i className="ti ti-bulb" style={{ marginRight: "0.5rem" }}></i>
              Tente pesquisar por{" "}
              <code className={styles.codeExample}>seunome</code>
            </p>
          </div>
        </div>
      </main>
    );
  }
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
