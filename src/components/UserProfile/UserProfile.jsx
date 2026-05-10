import { useState } from "react";
import { fetchUserProfile, fetchUserRepos } from "../../services/githubApi";
import SearchForm from "../../components/layout/Header/SearchBar";
import ErrorMessage from "../../components/Common/ErrorMessage";
import { formatDate } from "../../utils/format";
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

export default function UserProfile() {
	const [username, setUsername] = useState("");
	const [profile, setprofile] = useState(null);
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSearch = async (e) => {
		e.preventDefault();
		if (!username.trim()) return;

		setLoading(true);
		setError(null);
		setprofile(null);
		setRepos([]);

		try {
			const [userData, reposData] = await Promise.all([
				fetchUserProfile(username),
				fetchUserRepos(username),
			]);
			setprofile(userData);
			setRepos(reposData);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const hasContent = profile || repo.length > 0;
	
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
