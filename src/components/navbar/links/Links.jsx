"use client";
import Link from "next/link";
import styles from "./links.module.css";
import NavLinks from "./navlinks/navlinks";
import { useState } from "react";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
const Links = () => {
  const [open, setOpen] = useState(false);

  //temp
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLinks item={link} key={link.title} />
        ))}
        {session ? (
          isAdmin && <NavLinks item={{ title: "Admin", path: "/admin" }} />
        ) : (
          <NavLinks item={{ title: "Login", path: "/login" }} />
        )}
        {session && <button className={styles.logout}>Logout</button>}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLinks item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
