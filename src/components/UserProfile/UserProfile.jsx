import {
	FaMapMarkerAlt,
	FaBuilding,
	FaLink,
	FaCalendarAlt,
	FaGithub,
	FaUsers,
	FaUserPlus,
	FaCode,
	FaFileCode,
} from "react-icons/fa";

import styles from "./userProfile.module.css";

export default function UserProfile({ profile, error, loading }) {
	const stats = [
		{ icon: FaCode, label: "Repositories", value: profile?.public_repos },
		{ icon: FaUsers, label: "Followers", value: profile?.followers },
		{ icon: FaUserPlus, label: "Following", value: profile?.following },
		{ icon: FaFileCode, label: "Gists", value: profile?.public_gists },
	];

	const infoItems = [
		{
			condition: profile?.company,
			icon: FaBuilding,
			label: "Company",
			value: profile?.company,
		},
		{
			condition: profile?.location,
			icon: FaMapMarkerAlt,
			label: "location",
			value: profile?.location,
		},
		{
			condition: profile?.blog,
			icon: FaLink,
			label: "Website",
			value: profile?.blog,
		},
	];

	if (loading) {
		return <p>Carregando...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	if (!profile) {
		return <p>Pesquise um usuário do GitHub</p>;
	}

	return (
		<section className={styles.profile}>
			<div className={styles.profileContent}>
				<img
					src={profile.avatar_url}
					alt={profile.name || profile.login}
					className={styles.avatar}
				/>

				<div className={styles.info}>
					<h1 className={styles.name}>{profile.name || profile.login}</h1>
					<p className={styles.username}>{profile?.username}</p>
					<p className={styles.bio}>{profile.bio}</p>

					<div className={styles.details}>
						<div className={styles.detail}>
							<span className={styles.detailIcon}>📍</span>
							<span>{profile?.location}</span>
						</div>
						<div className={styles.detail}>
							<span className={styles.detailIcon}>🔗</span>
							<a
								href={profile?.website}
								target="_blank"
								rel="noopener noreferrer"
							>
								{profile?.website}
							</a>
						</div>
						<div className={styles.detail}>
							<span className={styles.detailIcon}>📅</span>
							<span>{profile?.joinDate}</span>
						</div>
					</div>
				</div>

				<button className={styles.followButton}>Seguir</button>
			</div>

			<div className={styles.statsContainer}>
				<div className={styles.stat}>
					<div className={styles.statIcon}>
						<FaGithub />
					</div>
					<div className={styles.statValue}>{profile?.stats.repositories}</div>
					<div className={styles.statLabel}>Repositórios</div>
				</div>

				<div className={styles.stat}>
					<div className={styles.statIcon}>
						<FaGithub />
					</div>
					<div className={styles.statValue}>{profile?.stats.followers}</div>
					<div className={styles.statLabel}>Seguidores</div>
				</div>

				<div className={styles.stat}>
					<div className={styles.statIcon}>
						<FaGithub />
					</div>
					<div className={styles.statValue}>{profile?.stats.following}</div>
					<div className={styles.statLabel}>Seguindo</div>
				</div>

				<div className={styles.stat}>
					<div className={styles.statIcon}>
						<FaCalendarAlt />
					</div>
					<div className={styles.statValue}>{profile?.stats.stars}</div>
					<div className={styles.statLabel}>Stars</div>
				</div>
			</div>
		</section>
	);
}
