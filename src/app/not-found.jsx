import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      NotFound
      <h1>Sorry! The page you are looking for does not exist</h1>
      <Link href="/home">Return to home page</Link>
    </div>
  );
};

export default NotFound;
