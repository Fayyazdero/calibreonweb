import Head from "next/head";
import React, { Children } from "react";
import Slider from "react-slick";

const Carousel = ({
  slidesToShow = 1,
  rows = 1,
  centerMode = false,
  children,
}) => {
  var settings = {
    infinite: true,
    speed: 600,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    rows: rows,
    centerMode: centerMode,
    centerPadding: "110px",
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Slider {...settings}>{children}</Slider>
    </>
  );
};

export default Carousel;
