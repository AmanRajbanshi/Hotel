import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Descriptioncarousel = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8"
            style={{}}
          >
            <div>
              <Carousel
                infiniteloop
                autoPlay
                dots="false"
                showArrows={true}
                showIndicators={false}
                showThumbs={true}
              >
                <div>
                  <img
                    src="https://hotelasiatique.com.np/images/Product/img-8.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://hotelasiatique.com.np/images/Product/img-9.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://hotelasiatique.com.np/images/Product/img-8.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://hotelasiatique.com.np/images/Product/img-8.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://hotelasiatique.com.np/images/Product/img-8.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://hotelasiatique.com.np/images/Product/img-8.jpg"
                    alt=""
                  />
                </div>
              </Carousel>
            </div>
          </div>
          <div
            className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"
            style={{
              backgroundColor: "lightgray",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div style={{ lineHeight: "1.6px" }}>
              <img
                className="topheadingimage"
                style={{ padding: "40px", width: "50%" }}
                src="https://hotelasiatique.com.np/images/Product/icon.png"
                alt=""
              />
              <p className="" style={{ marginTop: "-20px" }}>
                STARTING FROM
              </p>
              <h2>NRs.2700</h2>
              <p style={{ color: "gray", marginTop: "15px" }}>/night</p>
              <img
                style={{ width: "70%", padding: "" }}
                src="https://hotelasiatique.com.np/images/booknow.jpg"
                alt=""
              />
              <button
                style={{
                  color: "white",
                  backgroundColor: "#8e7037",
                  padding: "20px",
                  marginTop: "15px",
                  marginBottom: "15px",
                  border: "none",
                }}
                className="col-md-12 col-lg-12 standardroombooknowbutton"
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Descriptioncarousel;
