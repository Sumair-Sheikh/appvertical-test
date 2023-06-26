import React, { Fragment } from "react";
import Slider from "react-slick";
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
    {
      src: "/images/logo-aj-1.png",
      width: "170",
      height: "140",
      alt: "logo",
    },
  ];

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 6000,
    slidesToShow: 7,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          dots: false,
          arrows: false,
          autoplay: true,
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 767,
        settings: {
          dots: false,
          arrows: false,
          autoplay: true,
          slidesToShow: 1,
        },
      },
    ],
  };

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
                  <Slider {...settings}>
                    {logoList.map((list, index) => {
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
                  </Slider>
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
