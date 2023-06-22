import React, { Fragment } from "react";
import styles from "./MobileApp.module.scss";
import Image from "next/image";

function MobileApp(props) {
  const appsList = [
    {
      title: "Native iOS Developers",
      content:
        "For the Android platform, we at AppVerticals create feature-rich, reliable, and scalable native mobile apps utilizing the Java and Kotlin programming languages to provide the best possible mobile experience.",
    },
    {
      title: "Native Android App Developers",
      content:
        "For the Android platform, we at AppVerticals create feature-rich, reliable, and scalable native mobile apps utilizing the Java and Kotlin programming languages to provide the best possible mobile experience.",
    },

    {
      title: "Cross Platform Apps",
      content:
        "For the Android platform, we at AppVerticals create feature-rich, reliable, and scalable native mobile apps utilizing the Java and Kotlin programming languages to provide the best possible mobile experience.",
    },
    {
      title: "Full Cycle Mobile App Development",
      content:
        "For the Android platform, we at AppVerticals create feature-rich, reliable, and scalable native mobile apps utilizing the Java and Kotlin programming languages to provide the best possible mobile experience.",
    },
  ];
  return (
    <Fragment>
      <section className={styles["mobileapps-sec"]}>
        <div className="container">
          <div className={`row ${styles["row1"]}`}>
            <div className="col-md-12">
              <div className={styles["heading"]}>
                <h2>{props.heading}</h2>
              </div>
            </div>
          </div>

          <div className={`row ${styles["row2"]}`}>
            <div className={`col-md-6 ${styles["left-col"]}`}>
              <div className={styles["content"]}>{props.content}</div>
            </div>

            <div className={`col-md-6 ${styles["right-col"]}`}>
              <div className={styles["image"]}>
                <Image
                  src={props.imgUrl}
                  width={670}
                  height={600}
                  alt=""
                  loading="lazy"
                ></Image>
              </div>
            </div>
          </div>

          <div className={`row ${styles["row3"]}`}>
            <div className="col-md-12">
              <div className={styles["apps"]}>
                <ul>
                  {appsList.map((list, index) => {
                    return (
                      <li key={index}>
                        <div className={styles["apps-wrapper"]}>
                          <h3>{list.title}</h3>
                          <div className={styles["apps-content"]}>
                            {list.content}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default MobileApp;
