import styles from "./activity-item.module.css";

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
          <span className={styles.action}>{activity.actor.login}</span>
          <a href="#" className={styles.repo}>
            {activity.repo.id}
          </a>
        </p>
        <span className={styles.timeAgo}>{activity.created_at}</span>
      </div>
    </div>
  );
}
