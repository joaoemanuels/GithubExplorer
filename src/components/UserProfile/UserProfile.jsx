import { formatDate } from "../../utils/format";

import {
	FaMapMarkerAlt,
	FaBuilding,
	FaLink,
	FaCalendarAlt,
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

					<p className={styles.username}>@{profile?.login}</p>
					{profile.bio && <p className={styles.bio}>{profile.bio}</p>}

					<div className={styles.details}>
						{infoItems
							.filter((item) => item.condition)
							.map((item) => {
								const Icon = item.icon;

								return (
									<div key={item.label} className={styles.detail}>
										<span className={styles.detailIcon}>
											<Icon />
										</span>

										{item.label === "Website" ? (
											<a
												href={
													item.value.startsWish("http")
														? item.value
														: `https://${item.value}`
												}
												target="_blank"
												rel="noopener noreferrer"
											>
												{item.value}
											</a>
										) : (
											<span>{item.value}</span>
										)}
									</div>
								);
							})}

						<div className={styles.detail}>
							<span className={styles.detailIcon}>
								<FaCalendarAlt />
							</span>

							<span>Entrou em {formatDate(profile.created_at)}</span>
						</div>
					</div>
				</div>
				<a
					href={profile.html_url}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.followButton}
				>
					Ver Perfil
				</a>
			</div>

			<div className={styles.statsContainer}>
				{stats.map((stat) => {
					const Icon = stat.icon;

					return (
						<div key={stat.label} className={styles.stat}>
							<div className={styles.statIcon}>
								<Icon />
							</div>

							<div className={styles.statValue}>{stat.value}</div>

							<div className={styles.statLabel}>{stat.label}</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
