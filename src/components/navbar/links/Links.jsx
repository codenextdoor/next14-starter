import Link from "next/link";

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
    <div>
      {links.map(
        (
          link // added parentheses for the arrow function
        ) => (
          <Link href={link.path} key={link.title}>
            {link.title}
          </Link>
        )
      )}
    </div>
  );
};

export default Links;
