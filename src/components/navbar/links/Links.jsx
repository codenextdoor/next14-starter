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
  return (
    <div className={styles.links}>
      {links.map(
        (
          link // added parentheses for the arrow function
        ) => (
          <NavLinks item={link} key={link.title} />
        )
      )}
    </div>
  );
};

export default Links;
