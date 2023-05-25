import React from "react";
import "./aboutusinhomepage.css";

const Aboutus = () => {
  return (
    <>
      <div className="container  mb-3" style={{}}>
        <div className="row">
          <div className="col">
            <h2 className="aboutus_title text-center">About Us</h2>
            <hr className="titlehr" />
            <div className="col paragraph mt-3">
              <p className="text " style={{ color: "gray" }}>
                Hotel Asiatique is a downtown hotel located in the heart of
                Biratnagar City where comfort and <br /> hospitality greet you
                right from the minute you step into our spacious comfort.
              </p>
              <p className="text" style={{ color: "gray" }}>
                We are just a walking distance from the Biratnagar Airport and
                just a few minutes ride from the <br /> shopping centres.
                Experience the dimension of hospitality, luxury and pleasure
                with us.
              </p>
            </div>
            <div className="container mt-5">
              <div className="row">
                <div
                  className="col d-flex maindiv"
                  style={{ margin: "0 auto" }}
                >
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <img
                      className="imagesofabout1"
                      src="https://hotelasiatique.com.np/images/Home-4/about.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <img
                      className="imagesofabout2"
                      src="https://hotelasiatique.com.np/images/Home-4/about-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <img
                      className="imagesofabout3"
                      src="https://hotelasiatique.com.np/images/Home-4/about-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
