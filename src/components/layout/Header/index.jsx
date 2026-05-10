import styles from "./header.module.css";
import SearchBar from "./SearchBar";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<span className={styles.logoIcon}>🐙</span>
					<span className={styles.logoText}>GitHub Explorer</span>
				</div>

				<SearchBar/>

				<button className={styles.themeToggle} title="Alternar tema">
					🌙
				</button>
			</div>
		</header>
	);
}
