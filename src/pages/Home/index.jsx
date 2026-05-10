import LanguageStats from "../../components/LanguageStats/LanguageStats";
import PopularRepositories from "../../components/PopularRepositories/PopularRepositories";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import UserProfile from "../../components/UserProfile/UserProfile";
import styles from "./home.module.css";

export default function Home() {


	return (
		<main className={styles.container}>
			<div className={styles.profileSection}>
				<UserProfile />
			</div>

			<div className={styles.contentGrid}>
				<div className={styles.leftColumn}>
					<PopularRepositories />
				</div>

				<div className={styles.rightColumn}>
					<LanguageStats />
					<RecentActivity />
				</div>
			</div>
		</main>
	);
}
