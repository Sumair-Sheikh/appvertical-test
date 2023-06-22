import React, { Fragment } from "react";
import Image from "next/image";
import styles from "./Banner.module.scss";
import Link from "next/link";

function Banner(props) {
  return (
    <Fragment>
      <section className={styles["banner-sec"]}>
        <div className="container-fluid">
          <div className="row">
            <div className={`col-md-7 ${styles["left-col"]}`}>
              <div className={styles["left-div"]}>
                <div className={styles["heading"]}>
                  <h3>{props.subtitle}</h3>
                  <h2>{props.title}</h2>
                </div>
                <div className={styles["content"]}>{props.content}</div>

                <div className={styles["banner-btn"]}>
                  <Link href={props.href}>{props.buttontxt}</Link>
                </div>
              </div>
            </div>
            <div className={`col-md-5 ${styles["right-col"]}`}>
              <Image
                src={props.bannerimg}
                width={480}
                height={650}
                alt=""
                loading="lazy"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Banner;
