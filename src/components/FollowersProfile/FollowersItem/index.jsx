import styles from "./followers-item.module.css";

export default function FollowersItem({ user }) {
  const formatUserLogin = (login) => {
    if (!login) return "Unknown";

    return login.charAt(0).toUpperCase() + login.slice(1);
  };

  return (
    <div className={styles.item}>
      <img src={user.avatar_url} alt={user.login} className={styles.avatar} />

      <div className={styles.content}>
        <p className={styles.text}>
          <span className={styles.username}>{formatUserLogin(user.login)}</span>
        </p>

        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.profileLink}
        >
          Ver perfil
        </a>

        <span className={styles.userType}>{user.type || "User"}</span>
      </div>
    </div>
  );
}
