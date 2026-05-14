import { useOutletContext } from "react-router-dom";
import styles from "./repositories.module.css";
import PopularRepositories from "../../components/PopularRepositories";

export default function Repositories() {
  const { repos } = useOutletContext();

  return (
    <main className={styles.container}>
      <div className={styles.contentGrid}>
        <div className={styles.leftColumn}>
          <PopularRepositories repos={repos} />
        </div>
      </div>
    </main>
  );
}
