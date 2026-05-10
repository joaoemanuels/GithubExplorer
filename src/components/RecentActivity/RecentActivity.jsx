import ActivityItem from "./ActivityItem/ActivityItem";
import styles from "./recentActivity.module.css";

export default function RecentActivity() {
	const activities = [
		{
			id: 1,
			type: "repository_created",
			title: "Criou o repositório",
			repo: "github-explorer",
			timeAgo: "há 2 dias",
		},
		{
			id: 2,
			type: "push",
			title: "Fez push em",
			repo: "dev-portfolio",
			timeAgo: "há 5 dias",
		},
		{
			id: 3,
			type: "issue_created",
			title: "Criou uma issue em",
			repo: "react-components",
			timeAgo: "há 1 semana",
		},
		{
			id: 4,
			type: "push",
			title: "Fez push em",
			repo: "node-api",
			timeAgo: "há 2 semanas",
		},
	];

	return (
		<section className={styles.section}>
			<h3 className={styles.title}>Atividade Recente</h3>

			<div className={styles.activitiesList}>
				{activities.map((activity) => (
					<ActivityItem key={activity.id} activity={activity} />
				))}
			</div>
		</section>
	);
}
