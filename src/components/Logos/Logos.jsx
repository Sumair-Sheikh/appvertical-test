import React, { Fragment } from "react";
import Image from "next/image";
import styles from "./Logos.module.scss";

function Logos(props) {
  const logoList = [
    {
      src: "/images/logo-aj-1.png",
      width: "170",
      height: "140",
      alt: "logo",
    },
    {
      src: "/images/logo-csob-1.png",
      width: "170",
      height: "140",
      alt: "logo",
    },

    {
      src: "/images/logo-cytosurge-1.png",
      width: "170",
      height: "140",
      alt: "logo",
    },
    {
      src: "/images/logo-dental-1.png",
      width: "170",
      height: "140",
      alt: "logo",
    },
    {
      src: "/images/logo-dhl-1.png",
      width: "170",
      height: "140",
      alt: "logo",
    },

    {
      src: "/images/logo-ebenica-1.png",
      width: "170",
      height: "140",
      alt: "logo",
    },
    {
      src: "/images/logo-great-1.png",
      width: "170",
      height: "140",
      alt: "logo",
    },
  ];

  return (
    <Fragment>
      <section className={styles["logo-sec"]}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={styles["logo-list"]}>
                <div className={styles["heading"]}>
                  <h2>{props.heading}</h2>
                </div>
                <ul>
                  {logoList.slice(0, 7).map((list, index) => {
                    return (
                      <li key={index}>
                        <Image
                          src={list.src}
                          width={list.width}
                          height={list.height}
                          alt={list.alt}
                          loading="lazy"
                        ></Image>
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

export default Logos;
