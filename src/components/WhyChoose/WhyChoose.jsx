import React, { Fragment } from "react";
import { CountUp } from "use-count-up";
import styles from "./WhyChoose.module.scss";

function WhyChoose(props) {
  const counterList = [
    {
      end: "14",
      text: "Years of proven success in the industry",
    },
    {
      end: "50",
      text: "Top development B2B Provider  Awwards",
    },

    {
      end: "60",
      text: "Skilled Professionals",
    },

    {
      end: "70",
      text: "Mobile, Web, IOT & Digital Products",
    },
  ];

  return (
    <Fragment>
      <section
        className={styles["whychoose-sec"]}
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
            {counterList.map((list, index) => {
              return (
                <div key={index} className={`col-md-3 ${styles["box"]}`}>
                  <div className={styles["counter-sect"]}>
                    <div className={styles["counter"]}>
                      <CountUp
                        isCounting
                        end={list.end}
                        duration={3.2}
                        enableScrollSpy
                      />
                      +
                    </div>
                    <p>{list.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default WhyChoose;
