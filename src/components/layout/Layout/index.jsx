import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "../Header";
import Sidebar from "../Sidebar";

import styles from "./layout.module.css";

import {
	fetchUserProfile,
	fetchUserRepos,
	fetchRepoLanguages,
} from "../../../services/githubApi";

export default function Layout() {
	const [username, setUsername] = useState("");
	const [profile, setProfile] = useState(null);
	const [repos, setRepos] = useState([]);
	const [languages, setLanguages] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSearch = async (e) => {
		e.preventDefault();

		if (!username.trim()) return;

		setLoading(true);
		setError(null);

		setProfile(null);
		setRepos([]);
		setLanguages({});

		try {
			const [userData, reposData] = await Promise.all([
				fetchUserProfile(username),
				fetchUserRepos(username),
			]);

			setProfile(userData);
			setRepos(reposData);

			const topRepos = reposData.slice(0, 5);

			const languagesResponses = await Promise.all(
				topRepos.map((repo) => fetchRepoLanguages(repo.owner.login, repo.name)),
			);

			const mergedLanguages = {};

			languagesResponses.forEach((repoLanguages) => {
				Object.entries(repoLanguages).forEach(([language, bytes]) => {
					if (mergedLanguages[language]) {
						mergedLanguages[language] += bytes;
					} else {
						mergedLanguages[language] = bytes;
					}
				});
			});

			setLanguages(mergedLanguages);

		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const handleChange = (e) => {
		setUsername(e.target.value);
	};

	return (
		<div className={styles.layoutContainer}>
			<Header
				username={username}
				onChange={handleChange}
				onSubmit={handleSearch}
				loading={loading}
			/>

			<div className={styles.mainWrapper}>
				<Sidebar />

				<main className={styles.mainContent}>
					<Outlet
						context={{
							profile,
							repos,
							languages,
							loading,
							error,
						}}
					/>
				</main>
			</div>

			<footer className={styles.footer}>
				<p className={styles.footerText}>
					© 2024 GitHub Explorer. Desenvolvido com ❤️ por João
				</p>
			</footer>
		</div>
	);
}
