import React, { Fragment } from "react";
import Banner from "../Banner";
import Logos from "../Logos";
import MobileApp from "../MobileApp";
import WeKnow from "../WeKnow";
import CustomMobile from "../CustomMobile";
import LeadingInnovative from "../LeadingInnovative";
import WhyChoose from "../WhyChoose";

function Main() {
  const heading = () => (
    <>
      Invest In <span>Digital</span> <span>Transformation</span> With Confidence
    </>
  );
  return (
    <Fragment>
      <Banner
        subtitle="Award-winning Mobile App Development Agency"
        title={heading()}
        content="Our in-house team offers the best mobile app development
        services who will be able to create amazing mobile apps for
        your business."
        href="/"
        buttontxt="start a new project"
        bannerimg="/images/banner-img.png"
      />
      <Logos heading="TRUSTED BY THE BEST" />
      <MobileApp
        heading="Custom Mobile App Development Company"
        content="Our unique approach to understanding problems coupled with
      decades of experience allows us to create tailored mobile apps
      that meet your business needs. Not only are we able to work on
      complex projects, but thanks to our agile approach to design and
      development, we are able to meet tight deadlines at a very
      competitive cost. The goal of our mobile app development
      services is to help our clients create stunning iOS, Android or
      cross platforms solutions that will give true shape and form to
      their unique business ideas. AppVerticals ensures that our apps
      have amazing UI/UX, are fully functional, have robust backends
      and are secure to keep both our clients and end users safe from
      modern day digital threats."
        imgUrl="/images/mobile-app.png"
      />
      <WeKnow
        heading={[
          <>
            WE KNOW. <br></br>WE WILL ROCK YOU.
          </>,
        ]}
        content={[
          <>
            <p>
              <span>
                Not the average website, not the average team, not the average
                products
              </span>
            </p>

            <p>
              Our unique approach to understanding problems coupled with decades
              of experience allows us to create tailored mobile apps that meet
              your business needs. Not only are we able to work on complex
              projects, but thanks to our agile approach to design and
              development. For your mobile app to be successfully released on
              the Apple App Store or Google Play Store,.
            </p>
          </>,
        ]}
      />
      <CustomMobile
        backgroundImage="/images/custom-mobile-bg.png"
        heading={[
          <>
            Custom Mobile <br></br>App Development Services
          </>,
        ]}
        content="At AppVerticals, we provide custom mobile app development services to meet your business needs."
      />
      <LeadingInnovative
        backgroundColor="#e80101"
        subheading="Leading Innovative"
        heading="Solution Providers Of The Industry"
        content="Creating a mobile app needs multiple design and development technologies. Explore the best ones we work on to deliver amazing mobile apps."
      />

      <WhyChoose
        subheading="why choose us"
        heading={[
          <>
            Ready for Your <br></br>Greatest <span>Business Challenges</span>
          </>,
        ]}
        content="Whether it’s crafting a compelling product strategy, designing a seamless user experience, or optimizing your digital interfaces, our award-winning product development services are designed to maximize your digital impact."
      />
    </Fragment>
  );
}

export default Main;
