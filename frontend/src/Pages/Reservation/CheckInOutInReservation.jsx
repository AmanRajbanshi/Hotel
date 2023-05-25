import React from "react";
import "./checkinoutinreservation.css";
const CheckInOutInReservation = ({ description1, description2 }) => {
  return (
    <>
      <div className="row ">
        <div className="col-xs-6 col-sm-6 col-md-6 " style={{ width: "50%" }}>
          <p className="leftsideDescription">{description1}</p>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 " style={{ width: "50%" }}>
          <p className="rightsideDescription">{description2}</p>
        </div>
      </div>
    </>
  );
};

export default CheckInOutInReservation;
