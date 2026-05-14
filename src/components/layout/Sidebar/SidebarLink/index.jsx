import { NavLink } from "react-router-dom";
import styles from "./sidebarLink.module.css";

export default function SidebarLink({ link }) {
  return (
    <NavLink
      to={link.to}
      className={({ isActive }) =>
        isActive ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      {link.icon}

      <span>{link.label}</span>
    </NavLink>
  );
}
