import React from "react";

import styles from "./header.module.css";

import { Link } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <span style={{ color: "#F5BB00" }}>Seiwa </span>
        <span style={{ color: "#262B62" }}>Real Estate</span>
      </h1>
      <form className={styles.headerForm}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
        <AiOutlineSearch className={styles.headerIcon} />
      </form>

      <div className={styles.headerLinks}>
        <Link href="#" className={`${styles.headerLink} clear-link`}>
          Home
        </Link>
        <Link href="#" className={`${styles.headerLink} clear-link`}>
          About
        </Link>
        <Link href="#" className={`${styles.headerLink} clear-link`}>
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
