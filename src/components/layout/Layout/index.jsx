import { Outlet } from "react-router-dom";

import Header from "../Header";
import Sidebar from "../Sidebar";

import styles from "./layout.module.css";
import { useState } from "react";
import { fetchUserProfile, fetchUserRepos } from "../../../services/githubApi";

export default function Layout() {
	const [username, setUsername] = useState("");
	const [profile, setProfile] = useState(null);
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSearch = async (e) => {
		e.preventDefault();
		if (!username.trim()) return;

		setLoading(true);
		setError(null);
		setProfile(null);
		setRepos([]);

		try {
			const [userData, reposData] = await Promise.all([
				fetchUserProfile(username),
				fetchUserRepos(username),
			]);
			setProfile(userData);
			setRepos(reposData);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const handleChange = (e) => {
		setUsername(e.target.value);
	};

	// const hasContent = profile || repos.length > 0;

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
