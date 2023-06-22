import React, { Fragment } from "react";
import styles from "./CustomMobile.module.scss";

function CustomMobile(props) {
  const appServices = [
    {
      appTitle: "UI/UX Design",
      appContent:
        "Our mobile app development services include creating unique and eye catching user interfaces.",
    },
    {
      appTitle: "Hire Expert Mobile Developers",
      appContent:
        "Our mobile app development services include creating unique and eye catching user interfaces.",
    },
    {
      appTitle: "Custom Mobile Applications Development",
      appContent:
        "Our mobile app development services include creating unique and eye catching user interfaces.",
    },
    {
      appTitle: "REST API Development",
      appContent:
        "Our mobile app development services include creating unique and eye catching user interfaces.",
    },
  ];
  return (
    <Fragment>
      <section
        className={styles["custome-mobile-sec"]}
        style={{ backgroundImage: `url("${props.backgroundImage}")` }}
      >
        <div className={`container-fluid ${styles["contain"]}`}>
          <div className={`row ${styles["row1"]}`}>
            <div className="col-md-12">
              <div className={styles["heading"]}>
                <h2>{props.heading}</h2>
              </div>
              <div className={styles["content"]}>{props.content}</div>
            </div>
          </div>
          <div className={`row ${styles["row2"]}`}>
            <div className="col-md-12">
              <div className={styles["apps"]}>
                <ul>
                  {appServices.map((list, index) => {
                    return (
                      <li key={index}>
                        <div className={styles["apps-wrapper"]}>
                          <div className={styles["apps-inner-wrapper"]}>
                            <h3>{list.appTitle}</h3>
                            <div className={styles["apps-content"]}>
                              {list.appContent}
                            </div>
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

export default CustomMobile;
