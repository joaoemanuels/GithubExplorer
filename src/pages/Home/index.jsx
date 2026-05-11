import { useOutletContext } from "react-router-dom";
import LanguageStats from "../../components/LanguageStats/LanguageStats";
import PopularRepositories from "../../components/PopularRepositories/PopularRepositories";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import UserProfile from "../../components/UserProfile/UserProfile";
import styles from "./home.module.css";

export default function Home() {
	const { profile, repos, languages, loading, error } = useOutletContext();

	return (
		<main className={styles.container}>
			<div className={styles.profileSection}>
				<UserProfile profile={profile} loading={loading} error={error} />
			</div>

			<div className={styles.contentGrid}>
				<div className={styles.leftColumn}>
					<PopularRepositories repos={repos} />
				</div>

				<div className={styles.rightColumn}>
					<LanguageStats languages={languages} repos={repos} />
					<RecentActivity repos={repos} />
				</div>
			</div>
		</main>
	);
}
