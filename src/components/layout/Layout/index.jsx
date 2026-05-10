import { Outlet } from "react-router-dom";

import Header from "../Header";
import Sidebar from "../Sidebar";

import styles from "./layout.module.css";

export default function Layout() {
	return (
		<div className={styles.layoutContainer}>
			<Header />

			<div className={styles.mainWrapper}>
				<Sidebar />

				<main className={styles.mainContent}>
					<Outlet />
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
