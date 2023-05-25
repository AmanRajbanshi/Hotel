import React from "react";
import OurRoomsInHomeCard from "./OurRoomsInHomeCard";
import "./ourroomsinhome.css";
const OurRooms = () => {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#F2F2F2" }}>
        <div className="row">
          <div className="col-12 ">
            <h2 className="ourroomtitle">Our Rooms</h2>
          </div>
          <div className="col-12 roomicon">
            <hr style={{ width: "100px" }} />
            <img
              style={{
                marginTop: "-5px",
                padding: "10px",
                color: "#8e7037",
                width: "40px",
              }}
              src="https://img.icons8.com/material/2x/ios-photos--v1.png"
              alt=""
            />
            <hr style={{ width: "100px" }} />
          </div>
          <div className="col-12 mt-3 ">
            <p className="text" style={{ color: "gray" }}>
              Whether you are on a business trip or a holiday, your stay will be{" "}
              <br />
              pleasureable at the Hotel Asiatique.
            </p>
          </div>
          <div className="container  mb-5 " style={{ width: "80%" }}>
            <div className="row d-flex justify-content-center">
              <div
                className="col-md-4 col-sm-12 firstcard"
                style={{ height: "350px" }}
              >
                <OurRoomsInHomeCard
                  image={
                    " https://hotelasiatique.com.np/images/Home-4/about.jpg"
                  }
                  text={"Deluxe Room"}
                />
              </div>
              <div
                className="col-md-4 col-sm-12 firstcard"
                style={{ height: "350px" }}
              >
                <OurRoomsInHomeCard
                  image={
                    "https://hotelasiatique.com.np/images/Product/img-9.jpg"
                  }
                  text={"Standard Room"}
                />
              </div>
              <div
                className="col-md-4 col-sm-12 firstcard"
                style={{ height: "350px" }}
              >
                <OurRoomsInHomeCard
                  image={
                    "https://hotelasiatique.com.np/images/Product/img-8.jpg"
                  }
                  text={"Mini Room"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurRooms;
