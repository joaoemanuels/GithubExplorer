import styles from "./searchBar.module.css";

export default function SearchBar() {
	return (
		<div className={styles.searchContainer}>
			<input
				type="text"
				placeholder="Digite um usuário do GitHub..."
				className={styles.searchInput}
			/>
			<button className={styles.searchButton}>Buscar</button>
		</div>
	);
}
