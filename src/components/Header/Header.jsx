import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";
import { BsArrowRight } from "react-icons/bs";

function Header() {
  return (
    <header id={styles["masthead"]} className={styles["site-header"]}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className={styles["site-branding"]}>
              <Link href="/" rel="noopener noreferrer">
                <Image
                  src="/images/Header-Logo.png"
                  alt="Vercel Logo"
                  //className={styles.custom-logo}
                  width={250}
                  height={45}
                  priority
                />
              </Link>
            </div>
          </div>
          <div className={`col-md-6 ${styles["menu-col"]}`}>
            <nav
              id={styles["site-navigation"]}
              className={styles["main-navigation"]}
            >
              <ul
                id={styles["primary-menu"]}
                className={styles["menu nav-menu"]}
              >
                <Navbar />
              </ul>
            </nav>
          </div>

          <div className="col-md-3">
            <div className={styles["getestimate"]}>
              <Link href="/">
                <BsArrowRight />
                Get Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
