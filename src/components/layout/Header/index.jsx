import styles from "./header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<span className={styles.logoIcon}>🐙</span>
					<span className={styles.logoText}>GitHub Explorer</span>
				</div>

				<div className={styles.searchContainer}>
					<input
						type="text"
						placeholder="Digite um usuário do GitHub..."
						className={styles.searchInput}
					/>
					<button className={styles.searchButton}>Buscar</button>
				</div>

				<button className={styles.themeToggle} title="Alternar tema">
					🌙
				</button>
			</div>
		</header>
	);
}
