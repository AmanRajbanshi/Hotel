import React from "react";
import "./servicesectioncard.css";
const ServiceSectionCard = ({
  image2,
  image1,
  title1,
  title2,
  description,
}) => {
  return (
    <>
      <div className="container mb-5 " style={{}}>
        <div className="row items">
          <div
            className="col-md-4 col-sm-12 mt-5 internationalcuisinesimagepart"
            style={{}}
          >
            <img className="internationalcuisinesimage" src={image1} alt="" />
          </div>
          <div className="col-md-8  secondItem " style={{}}>
            <div className="des">
              <p className="internationalcuisinestitle">{title1}</p>
              <p className="internationalcuisinessubtitle">{title2}</p>
              <p className="internationalcuisinesdescription d-lg-6 ">
                {description}
              </p>
            </div>
            <div>
              <img
                className="internationalcuisinesimage2"
                src={image2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSectionCard;
