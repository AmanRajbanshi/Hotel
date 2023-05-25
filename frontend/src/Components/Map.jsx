import React from "react";
import "./map.css";
const Map = () => {
  return (
    <>
      <div className="">
        <iframe
          title="map"
          className=" col-xs-12  col-md-12 col-lg-12 w-100 google-map "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.0882339630884!2d87.2715120150359!3d26.485103783313576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef7477a81e5b85%3A0xa22350ee777957d7!2sHotel%20Asiatique%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1655396228050!5m2!1sen!2snp"
          height={500}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default Map;
