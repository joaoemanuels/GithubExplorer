import { useOutletContext } from "react-router-dom";

import styles from "./favorites.module.css";
import LanguageStats from "../../components/LanguageStats";

export default function Favorites() {
  const { repos, languages } = useOutletContext();

  return (
    <main className={styles.container}>
      <div className={styles.rightColumn}>
        <LanguageStats languages={languages} repos={repos} />
      </div>
    </main>
  );
}
