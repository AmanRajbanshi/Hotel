import React from "react";
import "./servicesectioncard2.css";
const ServiceServiceCard2 = ({
  image2,
  image1,
  title1,
  title2,
  description,
}) => {
  return (
    <>
      <div className=" container mb-5 helloaaa">
        <div className="row hehehe">
          <div className="col-md-8 col-sm-12 oorder ">
            <div className="resBardes">
              <p className="resturantandbar1">{title1}</p>
              <p className="resturantandbar2">{title2}</p>
              <p className="resturantandbar3">{description}</p>
            </div>
            <div>
              <img className="resturantandbarimage2" src={image1} alt="" />
            </div>
          </div>
          <div className="col-md-4 col-sm-12 image1">
            <img className="resturantandbarimage1" src={image2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceServiceCard2;
