import React from "react";

const OurRoomsInHomeCard = ({ image, text }) => {
  return (
    <>
      <div className="card " style={{}}>
        <img style={{ height: "300px" }} src={image} alt="" />
        <h3 style={{ textAlign: "center", padding: "10px" }}>{text}</h3>
      </div>
    </>
  );
};

export default OurRoomsInHomeCard;
