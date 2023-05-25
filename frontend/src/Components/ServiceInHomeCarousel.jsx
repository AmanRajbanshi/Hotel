import React from "react";
import "./serviceinhomecarousel.css";
const ServiceInHomeCarousel = () => {
  return (
    <>
      <div className="container ">
        {/* Jumbotron */}

        {/* Jumbotron */}
        {/* <hr className="" /> */}
        {/*Carousel Wrapper*/}
        <div
          id="multi-item-example"
          className="carousel slide carousel-multi-item"
          data-ride="carousel"
        >
          {/*Controls*/}
          <div
            className="col d-flex mt-5"
            style={{ justifyContent: "space-between" }}
          >
            <div className="div mb-2">
              <h3 className="">Our Services</h3>
            </div>
            <div
              className="controls-top "
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
              }}
            >
              <a
                className="btn-floating mx-3"
                href="#multi-item-example"
                data-slide="prev"
              >
                <i className="fa fa-chevron-left" style={{ color: "black" }} />
              </a>
              <a
                className="btn-floating"
                href="#multi-item-example"
                data-slide="next"
              >
                <i className="fa fa-chevron-right" style={{ color: "black" }} />
              </a>
            </div>
          </div>
          {/*/.Controls*/}
          {/*Indicators*/}
          <ol className="carousel-indicators">
            <li
              data-target="#multi-item-example"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#multi-item-example" data-slide-to={1} />
            <li data-target="#multi-item-example" data-slide-to={2} />
          </ol>
          {/*/.Indicators*/}
          {/*Slides*/}
          <div className="carousel-inner" role="listbox">
            {/*First slide*/}
            <div className="carousel-item active">
              <div className="container">
                <div className="row ">
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-1 ">
                    <img
                      className="firstimage"
                      style={{}}
                      src="https://hotelasiatique.com.np/images/Home-4/events.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className="col-xs-12 col-sm-6 col-md-6 col-lg-6 d-flex "
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div className="col-md-6 mt-1">
                      <img
                        src="https://hotelasiatique.com.np/images/Home-4/events-1.jpg"
                        alt=""
                        style={{ height: "325px", width: "800px" }}
                      />
                    </div>
                    <div
                      className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-1 mb-1"
                      style={{}}
                    >
                      <img
                        src="https://hotelasiatique.com.np/images/Home-4/events-2.jpg"
                        alt=""
                        style={{ height: "320px", width: "800px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/.First slide*/}
            {/*Second slide*/}
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div
                    className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-1"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      className="firstimage"
                      style={{}}
                      src="https://hotelasiatique.com.np/images/Home-4/events.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className="col-xs-12 col-sm-6 col-md-6 col-lg-6 d-flex "
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div className="col-md-6 mt-1">
                      <img
                        src="https://hotelasiatique.com.np/images/Home-4/events-1.jpg"
                        alt=""
                        style={{ height: "325px", width: "790px" }}
                      />
                    </div>
                    <div
                      className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-1 mb-1"
                      style={{}}
                    >
                      <img
                        src="https://hotelasiatique.com.np/images/Home-4/events-2.jpg"
                        alt=""
                        style={{ height: "320px", width: "790px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/.Slides*/}
        </div>
        {/*/.Carousel Wrapper*/}
      </div>
    </>
  );
};

export default ServiceInHomeCarousel;
