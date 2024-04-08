import Link from "next/link";
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
      <div className={styles.headerElements}>
        <Link href="/home">Home</Link>
      </div>
      <div className={styles.headerElements}>
        <Link href="/profile">Profile</Link>
      </div>
      <div className={styles.headerElements}>
        <Link href="/explore">Explore</Link>
      </div>
      <div className={styles.headerElements}>
        <Link href="/favorites">Favorites</Link>
      </div>
      <div className={styles.headerElements}>
        <Link href="/messages">Messages</Link>
      </div>
      <div className={styles.headerElements}>
        <Link href="/travelers">Travelers</Link>
      </div>
      <div className={styles.headerElements}>
        <Link href="/settings">Settings</Link>
      </div>
    </div>
  );
}

function Header({ curUser, setCurUser }) {
  //const curUser = props.curUser;
  //const setCurUser = props.setCurUser;

  let header;
  if (curUser) {
    header = <LoggedInHeader setCurUser={setCurUser} />;
  } else {
    header = <AnonymousHeader setCurUser={setCurUser} />;
  }
  return header;
}

export default Header;
