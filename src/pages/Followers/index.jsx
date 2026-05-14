import { useOutletContext } from "react-router-dom";

import styles from "./followers.module.css";
import FollowersProfile from "../../components/FollowersProfile/index.jsx";

export default function Followers() {
  const { followers } = useOutletContext();

  return (
    <main className={styles.container}>
      <div>
        <FollowersProfile followers={followers} />
      </div>
    </main>
  );
}
