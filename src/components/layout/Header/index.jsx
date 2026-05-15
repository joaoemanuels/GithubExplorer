import { FaGithub } from "react-icons/fa";
import styles from "./header.module.css";
import SearchBar from "./SearchBar";

export default function Header({ username, onChange, onSubmit, loading }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>
            <FaGithub />
          </span>
          <span className={styles.logoText}>GitHub Explorer</span>
        </div>

        <SearchBar
          value={username}
          onChange={onChange}
          onSubmit={onSubmit}
          loading={loading}
        />
      </div>
    </header>
  );
}
