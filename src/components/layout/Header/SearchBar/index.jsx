import styles from "./searchBar.module.css";

export default function SearchBar({
	value,
	onChange,
	onSubmit,
	placeholder,
	loading,
	buttonText = "Search",
}) {
	return (
		<>
			<form className={styles.searchContainer} onSubmit={onSubmit}>
				<input
					type="text"
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className={styles.searchInput}
				/>

				<button
					type="submit"
					className={styles.searchButton}
					disabled={loading}
				>
					{loading ? "Buscando..." : buttonText}
				</button>
			</form>
		</>
	);
}
