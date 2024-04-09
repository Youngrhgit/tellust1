"use client";

import Link from "next/link";
import { useSettings } from "@/settingsContext";
import styles from "./header.module.css";

function AnonymousHeader(props) {
  const setCurUser = props.setCurUser;

  return (
    <div className={styles.header}>
      <div className={styles.headerElements}>
        <Link href="/home">Home</Link>
      </div>

      <div className={styles.headerElements}>
        <Link href="/explore">Explore</Link>
      </div>

      <div className={styles.headerElements}>
        <Link href="/travelers">Travelers</Link>
      </div>

      <div className={styles.headerElements}>
        <Link href="/settings">Settings</Link>
      </div>

      <button
        className={styles.signInOutUpButton}
        onClick={() => setCurUser("ryan")}
      >
        Sign In
      </button>
    </div>
  );
}

function LoggedInHeader(props) {
  const setCurUser = props.setCurUser;

  return (
    <div className={styles.header}>
      <Link href="/home">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/favorites">Favorites</Link>
      <Link href="/messages">Messages</Link>
      <Link href="/travelers">Travelers</Link>
      <Link href="/settings">Settings</Link>
    </div>
  );
}

function Header() {
  const settings = useSettings();
  const { curUser, setCurUser } = settings;

  let header;
  if (curUser) {
    header = <LoggedInHeader setCurUser={setCurUser} />;
  } else {
    header = <AnonymousHeader setCurUser={setCurUser} />;
  }
  return header;
}

export default Header;
