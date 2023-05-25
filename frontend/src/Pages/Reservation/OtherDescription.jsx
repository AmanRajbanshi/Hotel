import React from "react";
import "./otherdescription.css";
const OtherDescription = ({ title, description }) => {
  return (
    <div className="col-md-12">
      <p className="otherTitle">{title}</p>
      <p className="text-start otherDescription">{description}</p>
    </div>
  );
};

export default OtherDescription;
