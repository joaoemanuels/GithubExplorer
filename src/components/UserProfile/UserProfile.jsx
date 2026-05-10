import styles from "./userProfile.module.css";

const RepositoriesIcon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
	>
		<path d="M22 19a2 2 0 0 1-2.414-1.80078c-.874-.726-2.612-1.199-4.586-1.199H8c-1.974 0-3.712.473-4.586 1.199A2 2 0 0 1 2 19" />
		<path d="M22 13a2 2 0 0 1-2.414-1.80078c-.874-.726-2.612-1.199-4.586-1.199H8c-1.974 0-3.712.473-4.586 1.199A2 2 0 0 1 2 13" />
		<path d="M22 7c0 1.657-2.239 3-5 3-1.598 0-3.06-.754-3.95-1.901" />
		<rect x="2" y="7" width="20" height="10" rx="2" />
	</svg>
);

const FollowersIcon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
	>
		<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
		<circle cx="9" cy="7" r="4" />
		<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
		<path d="M16 3.13a4 4 0 0 1 0 7.75" />
	</svg>
);

const FollowingIcon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
	>
		<path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22z" />
		<path d="M12 5v14" />
		<path d="M5 12h14" />
	</svg>
);

const StarsIcon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="currentColor"
		stroke="currentColor"
		strokeWidth="2"
	>
		<polygon points="12 2 15.09 10.26 24 10.27 17.18 16.70 20.09 25 12 19.54 3.91 25 6.82 16.70 0 10.27 8.91 10.26 12 2" />
	</svg>
);

export default function UserProfile() {
	const userData = {
		name: "Diego Fernandes",
		username: "diego3g",
		bio: "Front-end developer passionate about building amazing web experiences.",
		location: "São Paulo, Brasil",
		website: "https://diego3g.com",
		joinDate: "Entrou em Jan 2020",
		avatarUrl: "https://avatars.githubusercontent.com/u/12345678?v=4",
		stats: {
			repositories: 42,
			followers: 128,
			following: 98,
			stars: 256,
		},
	};

	return (
		<section className={styles.profile}>
			<div className={styles.profileContent}>
				<img
					src={userData.avatarUrl}
					alt={userData.name}
					className={styles.avatar}
				/>

				<div className={styles.info}>
					<h1 className={styles.name}>{userData.name}</h1>
					<p className={styles.username}>{userData.username}</p>
					<p className={styles.bio}>{userData.bio}</p>

					<div className={styles.details}>
						<div className={styles.detail}>
							<span className={styles.detailIcon}>📍</span>
							<span>{userData.location}</span>
						</div>
						<div className={styles.detail}>
							<span className={styles.detailIcon}>🔗</span>
							<a
								href={userData.website}
								target="_blank"
								rel="noopener noreferrer"
							>
								{userData.website}
							</a>
						</div>
						<div className={styles.detail}>
							<span className={styles.detailIcon}>📅</span>
							<span>{userData.joinDate}</span>
						</div>
					</div>
				</div>

				<button className={styles.followButton}>Seguir</button>
			</div>

			<div className={styles.statsContainer}>
				<div className={styles.stat}>
					<div className={styles.statIcon}>
						<RepositoriesIcon />
					</div>
					<div className={styles.statValue}>{userData.stats.repositories}</div>
					<div className={styles.statLabel}>Repositórios</div>
				</div>

				<div className={styles.stat}>
					<div className={styles.statIcon}>
						<FollowersIcon />
					</div>
					<div className={styles.statValue}>{userData.stats.followers}</div>
					<div className={styles.statLabel}>Seguidores</div>
				</div>

				<div className={styles.stat}>
					<div className={styles.statIcon}>
						<FollowingIcon />
					</div>
					<div className={styles.statValue}>{userData.stats.following}</div>
					<div className={styles.statLabel}>Seguindo</div>
				</div>

				<div className={styles.stat}>
					<div className={styles.statIcon}>
						<StarsIcon />
					</div>
					<div className={styles.statValue}>{userData.stats.stars}</div>
					<div className={styles.statLabel}>Stars</div>
				</div>
			</div>
		</section>
	);
}
