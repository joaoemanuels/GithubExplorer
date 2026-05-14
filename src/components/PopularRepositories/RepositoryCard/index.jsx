import { formatDate } from "../../../utils/format";
import styles from "./repository-card.module.css";

export default function RepositoryCard({ repository }) {
	const getLanguageColor = (language) => {
		const colors = {
			"TypeScript": "#3178c6",
			"JavaScript": "#f1e05a",
			"Python": "#3572A5",
			"Java": "#b07219",
			"CSS": "#563d7c",
			"HTML": "#e34c26",
			"React": "#61dafb",
			"Vue": "#41b883",
			"Angular": "#dd0031",
			"Svelte": "#ff3e00",

			"Node": "#339933",
			"Express": "#444444",
			"NestJS": "#e0234e",

			"PHP": "#777bb4",
			"Laravel": "#ff2d20",

			"C": "#555555",
			"C++": "#f34b7d",
			"C#": "#178600",
			"Rust": "#dea584",
			"Go": "#00add8",
			"Kotlin": "#a97bff",
			"Swift": "#f05138",
			"Dart": "#00b4ab",

			"Ruby": "#cc342d",
			"Rails": "#cc0000",

			"Shell": "#89e051",
			"Bash": "#4eaa25",
			"PowerShell": "#012456",

			"SCSS": "#c6538c",
			"Sass": "#cd6799",
			"Less": "#1d365d",

			"SQL": "#e38c00",
			"MySQL": "#00758f",
			"PostgreSQL": "#336791",
			"MongoDB": "#47a248",
			"SQLite": "#003b57",

			"Docker": "#2496ed",
			"Kubernetes": "#326ce5",

			"Git": "#f05032",

			"JSON": "#292929",
			"YAML": "#cb171e",
			"XML": "#0060ac",

			"Markdown": "#083fa1",

			"GraphQL": "#e10098",

			"Flutter": "#02569b",

			"Figma": "#a259ff",

			"Assembly": "#6e4c13",

			"Perl": "#39457e",
			"Lua": "#000080",
			"Haskell": "#5e5086",
			"Elixir": "#6e4a7e",
			"Clojure": "#5881d8",
			"Scala": "#dc322f",

			"Matlab": "#e16737",
			"R": "#198ce7",

			"SolidJS": "#2c4f7c",

			"Astro": "#ff5d01",

			"NextJS": "#000000",
			"Nuxt": "#00dc82",

			"Electron": "#47848f",
		};
		return colors[language] || "#999999";
	};

	return (
		<article className={styles.card}>
			<div className={styles.cardHeader}>
				<div className={styles.repoIcon}>📚</div>
				<a href="#" className={styles.repoName}>
					{repository.name}
				</a>
			</div>

			<p className={styles.description}>{repository.full_name}</p>

			<div className={styles.footer}>
				<div className={styles.language}>
					<span
						className={styles.languageDot}
						style={{ backgroundColor: getLanguageColor(repository.language) }}
					/>
					<span>{repository.language}</span>
				</div>

				<div className={styles.stats}>
					<div className={styles.stat}>
						<span className={styles.statIcon}>⭐</span>
						<span>{repository.stargazers_count}</span>
					</div>
					<div className={styles.stat}>
						<span className={styles.statIcon}>🍴</span>
						<span>{repository.forks}</span>
					</div>
				</div>

				<span className={styles.updatedAt}>
					{formatDate(repository.created_at)}
				</span>
			</div>
		</article>
	);
}
