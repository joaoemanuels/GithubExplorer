import styles from "./followersItem.module.css";

export default function FollowersItem({ user }) {
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
      <div className={styles.icon}>{getFollowingIcon(user.repos_url)}</div>

      <div className={styles.content}>
        <p className={styles.text}>
          <span className={styles.action}>{formatUserLogin(user.login)}</span>
          {user.avatar_url && (
            <a
              href={user.avatar_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.repo}
            >
              {user.repos_url.split("/").pop() || "Repository"}
            </a>
          )}
        </p>
        <span className={styles.timeAgo}>{getTypeLabel(user.repos_url)}</span>
      </div>
    </div>
  );
}
