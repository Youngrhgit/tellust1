"use client";

import Image from "next/image";
import Link from "next/link";
import { useSettings } from "@/settingsContext";
import styles from "./header.module.css";

function AnonymousHeader(props) {
  const setCurUser = props.setCurUser;

  return (
    <div className={styles.header}>
      <Link href="/home">Home</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/travelers">Travelers</Link>
      <Link href="/settings">Settings</Link>

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

function LogoPanel() {
  const component = (
    <div className={styles.logoPanel}>
      <Image
        width={100}
        height={100}
        src="/images/LOGO.png"
        alt="Tellus Logo"
      />
      Tellus App
    </div>
  );
  return component;
}

function Header() {
  const settings = useSettings();
  const { curUser, setCurUser } = settings;

  let subHeader;
  if (curUser) {
    subHeader = <LoggedInHeader setCurUser={setCurUser} />;
  } else {
    subHeader = <AnonymousHeader setCurUser={setCurUser} />;
  }

  const logoPanel = <LogoPanel />;
  const header = (
    <div>
      {logoPanel}
      {subHeader}
    </div>
  );

  return header;
}

export default Header;
