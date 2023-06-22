import React, { Fragment } from "react";
import styles from "./LeadingInnovative.module.scss";
import { tabsData } from "@/utils/tabs.data";
import DynamicTabs from "@/components/DynamicTabs/DynamicTabs";

function LeadingInnovative(props) {
  return (
    <Fragment>
      <section
        className={styles["leading-sec"]}
        style={{ backgroundColor: `${props.backgroundColor}` }}
      >
        <div className="container">
          <div className={`row ${styles["row1"]}`}>
            <div className="col-md-12">
              <div className={styles["heading"]}>
                <h3>{props.subheading}</h3>
                <h2>{props.heading}</h2>
              </div>
              <div className={styles["content"]}>{props.content}</div>
            </div>
          </div>
          <div className={`row ${styles["row2"]}`}>
            <div className="col-md-12">
              <div className={styles["tabs-sect"]}>
                <div id={styles["tab"]}>
                  <DynamicTabs tabsData={tabsData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default LeadingInnovative;
