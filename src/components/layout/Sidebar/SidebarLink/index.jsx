import styles from './sidebarLink.module.css';

export default function SidebarLink({ link }) {
  return (
    <a 
      href={link.href} 
      className={`${styles.link} ${link.isActive ? styles.active : ''}`}
    >
      <span className={styles.icon}>{link.icon}</span>
      <span className={styles.label}>{link.label}</span>
    </a>
  );
}