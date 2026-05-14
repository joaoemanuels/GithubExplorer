import { useOutletContext } from "react-router-dom";

import FollowingProfile from "../../components/FollowingProfile/followingProfile";

import styles from "./follow.module.css";

export default function Follow() {
  const { following } = useOutletContext();

  return (
    <main className={styles.container}>
      <div>
        <FollowingProfile following={following} />
      </div>
    </main>
  );
}
