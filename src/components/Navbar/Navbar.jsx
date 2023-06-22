import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.scss";
import { Fragment } from "react";

const Navbar = () => {
  const router = useRouter();

  const isActive = (href) => {
    return router.pathname === href;
  };

  return (
    <Fragment>
      <li className={isActive("/") ? `${styles["active"]}` : ""}>
        <Link href="/">Company</Link>
      </li>

      <li className={isActive("/") ? `${styles["active"]}` : ""}>
        <Link href="/">Services</Link>
      </li>

      <li className={isActive("/") ? `${styles["active"]}` : ""}>
        <Link href="/">Hire A Developer</Link>
      </li>

      <li className={isActive("/") ? `${styles["active"]}` : ""}>
        <Link href="/">Portfolio</Link>
      </li>

      <li className={isActive("/") ? `${styles["active"]}` : ""}>
        <Link href="/">Contact Us</Link>
      </li>
    </Fragment>
  );
};

export default Navbar;
