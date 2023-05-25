import React from "react";
import "./topContentpagecard.css";

const TopContentPageCard = ({ title, subtitle }) => {
  return (
    <>
      <img
        className="topContent"
        style={{ height: "300px", width: "100%" }}
        src="https://hotelasiatique.com.np/images/Home-4/slider.jpg"
        alt=""
      />
      <h1 className="topContentTitle">{title} </h1>
      <p className="topContentsubTitle">{subtitle}</p>
    </>
  );
};

export default TopContentPageCard;
