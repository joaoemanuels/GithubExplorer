import { useOutletContext } from "react-router-dom";
import PopularRepositories from "../../components/PopularRepositories/PopularRepositories";
import styles from "./repositories.module.css";

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
