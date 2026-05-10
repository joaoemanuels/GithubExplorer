import styles from "./sidebar.module.css";
import SidebarLink from "./SidebarLink";



// Ícone de Casa
const HomeIcon = () => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
	>
		<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
		<polyline points="9 22 9 12 15 12 15 22"></polyline>
	</svg>
);

// Ícone de Repositório
const RepositoryIcon = () => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
	>
		<path d="M22 19a2 2 0 0 1-2.414-1.80078c-.874-.726-2.612-1.199-4.586-1.199H8c-1.974 0-3.712.473-4.586 1.199A2 2 0 0 1 2 19"></path>
		<path d="M22 13a2 2 0 0 1-2.414-1.80078c-.874-.726-2.612-1.199-4.586-1.199H8c-1.974 0-3.712.473-4.586 1.199A2 2 0 0 1 2 13"></path>
		<path d="M22 7c0 1.657-2.239 3-5 3-1.598 0-3.06-.754-3.95-1.901"></path>
		<rect x="2" y="7" width="20" height="10" rx="2"></rect>
	</svg>
);

// Ícone de Seguidores
const FollowersIcon = () => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
	>
		<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
		<circle cx="9" cy="7" r="4"></circle>
		<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
		<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
	</svg>
);

// Ícone de Seguindo
const FollowingIcon = () => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
	>
		<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
		<circle cx="9" cy="7" r="4"></circle>
		<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
		<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
	</svg>
);

// Ícone de Favoritos
const StarIcon = () => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="currentColor"
		stroke="currentColor"
		strokeWidth="2"
	>
		<polygon points="12 2 15.09 10.26 24 10.27 17.18 16.70 20.09 25 12 19.54 3.91 25 6.82 16.70 0 10.27 8.91 10.26 12 2"></polygon>
	</svg>
);

export default function Sidebar() {
	const navLinks = [
		{
			id: 1,
			icon: <HomeIcon />,
			label: "Visão Geral",
			href: "#",
			isActive: true,
		},
		{
			id: 2,
			icon: <RepositoryIcon />,
			label: "Repositórios",
			href: "#",
		},
		{
			id: 3,
			icon: <FollowersIcon />,
			label: "Seguidores",
			href: "#",
		},
		{
			id: 4,
			icon: <FollowingIcon />,
			label: "Seguindo",
			href: "#",
		},
		{
			id: 5,
			icon: <StarIcon />,
			label: "Favoritos",
			href: "#",
		},
	];

	return (
		<aside className={styles.sidebar}>

			<nav className={styles.nav}>
				{navLinks.map((link) => (
					<SidebarLink key={link.id} link={link} />
				))}
			</nav>

			<div className={styles.footer}>
				<h3 className={styles.footerTitle}>Sobre</h3>
				<p className={styles.footerText}>
					Explore perfis do GitHub e descubra repositórios, estatísticas e muito
					mais.
				</p>
				<div className={styles.footerCode}>{"</>"}</div>
			</div>
		</aside>
	);
}
