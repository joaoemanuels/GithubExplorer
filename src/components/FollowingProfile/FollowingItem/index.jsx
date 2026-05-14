import styles from "./following-item.module.css";

export default function FollowingItem({ user }) {
  const getFollowingIcon = (type) => {
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

  const formatUserLogin = (login) => {
    return login?.charAt(0).toUpperCase() + login?.slice(1) || "Unknown";
  };

  const getTypeLabel = (type) => {
    const labels = {
      repository_created: "Repository created",
      push: "Pushed code",
      issue_created: "Issue created",
      pull_request: "Pull request",
      star: "Starred",
      fork: "Forked",
    };
    return labels[type] || "Activity";
  };

  return (
    <div className={styles.item}>
      <div className={styles.icon}>{getFollowingIcon(user.type)}</div>

      <div className={styles.content}>
        <p className={styles.text}>
          <span className={styles.action}>{formatUserLogin(user.login)}</span>
          {user.repos_url && (
            <a
              href={user.repos_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.repo}
            >
              {user.repos_url.split("/").pop() || "Repository"}
            </a>
          )}
        </p>
        <span className={styles.timeAgo}>{getTypeLabel(user.type)}</span>
      </div>
    </div>
  );
}
