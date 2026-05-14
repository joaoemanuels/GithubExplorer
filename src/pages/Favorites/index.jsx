import { useOutletContext } from "react-router-dom";
import LanguageStats from "../../components/LanguageStats/LanguageStats";

import styles from "./favorites.module.css";

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
