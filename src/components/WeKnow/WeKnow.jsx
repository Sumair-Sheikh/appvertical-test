import React, { Fragment } from "react";
import styles from "./WeKnow.module.scss";
import Image from "next/image";

function WeKnow(props) {
  return (
    <Fragment>
      <section className={styles["we-know-sec"]}>
        <div className="container">
          <div className="row">
            <div className={`col-md-6 ${styles["left-col"]}`}>
              <Image
                src="/images/we-know.png"
                width={550}
                height={700}
                alt=""
                loading="lazy"
              ></Image>
            </div>
            <div className={`col-md-6 ${styles["right-col"]}`}>
              <div className={styles["heading"]}>
                <h2>{props.heading}</h2>
              </div>
              <div className={styles["content"]}>{props.content}</div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default WeKnow;
