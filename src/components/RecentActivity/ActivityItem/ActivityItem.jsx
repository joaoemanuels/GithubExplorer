import styles from "./activityItem.module.css";

export default function ActivityItem({ activity }) {
	const getActivityIcon = (type) => {
		const icons = {
			repository_created: "📂",
			push: "📤",
			issue_created: "⚠️",
			pull_request: "🔀",
			star: "⭐",
			fork: "🍴",
		};
		return icons[type] || "📌";
	};

	return (
		<div className={styles.item}>
			<div className={styles.icon}>{getActivityIcon(activity.type)}</div>

			<div className={styles.content}>
				<p className={styles.text}>
					<span className={styles.action}>{activity.title}</span>
					<a href="#" className={styles.repo}>
						{activity.repo}
					</a>
				</p>
				<span className={styles.timeAgo}>{activity.timeAgo}</span>
			</div>
		</div>
	);
}
