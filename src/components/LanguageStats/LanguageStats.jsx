import styles from "./languageStats.module.css";

export default function LanguageStats({ languages }) {
	const languageColors = {
		TypeScript: "#3178c6",
		JavaScript: "#f1e05a",
		Python: "#3572A5",
		Java: "#b07219",
		CSS: "#563d7c",
		HTML: "#e34c26",
		React: "#61dafb",
		Vue: "#41b883",
		Shell: "#89e051",
	};

	const totalBytes = Object.values(languages).reduce(
		(acc, value) => acc + value,
		0,
	);

	const formattedLanguages = Object.entries(languages).map(([name, bytes]) => ({
		name,
		percentage: Number(((bytes / totalBytes) * 100).toFixed(1)),
		color: languageColors[name] || "#999999",
	}));

	const circumference = 2 * Math.PI * 45;

	let currentOffset = 0;

	return (
		<section className={styles.section}>
			<h3 className={styles.title}>Linguagens mais usadas</h3>

			<div className={styles.content}>
				<div className={styles.chartContainer}>
					<svg viewBox="0 0 120 120" className={styles.chart}>
						<circle
							cx="60"
							cy="60"
							r="45"
							fill="none"
							stroke="#f1f5f9"
							strokeWidth="10"
						/>
						{formattedLanguages.map((lang) => {
							const offset = currentOffset;

							const dash = (lang.percentage / 100) * circumference;

							currentOffset -= dash;

							return (
								<circle
									key={lang.name}
									cx="60"
									cy="60"
									r="45"
									fill="none"
									stroke={lang.color}
									strokeWidth="10"
									strokeDasharray={`${dash} ${circumference}`}
									strokeDashoffset={offset}
									strokeLinecap="round"
									style={{
										transform: "rotate(-90deg)",
										transformOrigin: "60px 60px",
									}}
								/>
							);
						})}
					</svg>
				</div>

				<div className={styles.legend}>
					{formattedLanguages.map((lang) => (
						<div key={lang.name} className={styles.legendItem}>
							<div
								className={styles.legendColor}
								style={{ backgroundColor: lang.color }}
							/>
							<span className={styles.legendName}>{lang.name}</span>
							<span className={styles.legendPercentage}>
								{lang.percentage}%
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
