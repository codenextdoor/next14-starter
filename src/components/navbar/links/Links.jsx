import Link from "next/link";
import styles from "./links.module.css";
import NavLinks from "./navlinks/navlinks";

const Links = () => {
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

  //temp
  const session = true;
  const isAdmin = true;

  return (
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
  );
};

export default Links;
