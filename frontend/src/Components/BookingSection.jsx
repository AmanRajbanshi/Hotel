import React from "react";
import "./bookingsection.css";

const BookingSection = () => {
  return (
    <div
      className="container containerfluidonsmall containerontablap containeronlargedevice  "
      style={{}}
    >
      <div className="row">
        <div className="col-md-3 mt-4">
          <div className="div1">
            <p className="arrivaldate">ARRIVAL DATE </p>
            <input style={{}} className="inputField" type="date" id="ad" />
          </div>
        </div>
        <div className="col-md-3 mt-3">
          <div className="div2">
            <p className="departuredate">DEPARTURE DATE</p>
            <input type="date" />
          </div>
        </div>
        <div className="col-md-2 mt-3">
          <div className="div3">
            <p className="adults">ADULTS</p>
            <input
              type="number"
              name="adult"
              placeholder="2"
              className="adult mx-2"
            />
          </div>
        </div>
        <div className="col-md-2 mt-3">
          <div className="div4">
            <p className="childs">CHILDS</p>
            <input
              type="number"
              name="adult"
              placeholder="2"
              className="adult mx-2"
            />
          </div>
        </div>
        <div className="col-md-2 mt-3 mb-5">
          <div className="div5">
            <button className="booknow">Book now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
