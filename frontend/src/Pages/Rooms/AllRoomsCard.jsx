import React from "react";
import { Link } from "react-router-dom";
import "./allroomscard.css";

const AllRoomsCard = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
            style={{}}
          >
            <div className=" minisuite_transform ">
              <p className="text-start minisuitetitleofallrooms">Mini Suite</p>
              <img
                className=" image1ofminisuite"
                style={{ width: "100%" }}
                src="https://hotelasiatique.com.np/images/Room/room.jpg"
                alt=""
              />
            </div>

            <div
              className="row mt-3"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                <li>Max 3 person (s)</li>
                <li>AC: Yes</li>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                <li>View: City</li>
                <li>Bed: King-Size</li>
              </div>
            </div>
            <div className="row" style={{ padding: "5px" }}>
              <div
                className="col mt-3 mb-3"
                style={{
                  border: "1px solid gray",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "flex-end",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              >
                <Link to="/standard_room">
                  <button
                    style={{
                      backgroundColor: "#8e7037",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      textTransform: "uppercase",
                    }}
                  >
                    view detail
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
            style={{}}
          >
            <div className=" minisuite_transform ">
              <p className="text-start minisuitetitleofallrooms">
                Standard Room
              </p>
              <img
                className=" image1ofminisuite"
                style={{ width: "100%" }}
                src="https://hotelasiatique.com.np/images/Room/room-1.jpg"
                alt=""
              />
            </div>

            <div
              className="row mt-3"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                <li>Max 3 person (s)</li>
                <li>AC: Yes</li>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                <li>View: City</li>
                <li>Bed: King-Size</li>
              </div>
            </div>
            <div className="row" style={{ padding: "5px" }}>
              <div
                className="col mt-3 mb-3"
                style={{
                  border: "1px solid gray",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "flex-end",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              >
                <Link to="/standard_room">
                  <button
                    style={{
                      backgroundColor: "#8e7037",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      textTransform: "uppercase",
                    }}
                  >
                    view detail
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
            style={{}}
          >
            <div className=" minisuite_transform ">
              <p className="minisuitetitleofallrooms">Deluxe Room</p>
              <img
                className=" image1ofminisuite"
                style={{ width: "100%" }}
                src="https://hotelasiatique.com.np/images/Room/room-3.jpg"
                alt=""
              />
            </div>

            <div
              className="row mt-3"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                <li>Max 3 person (s)</li>
                <li>AC: Yes</li>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                <li>View: City</li>
                <li>Bed: King-Size</li>
              </div>
            </div>
            <div className="row" style={{ padding: "5px" }}>
              <div
                className="col mt-3 mb-3"
                style={{
                  border: "1px solid gray",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "flex-end",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              >
                <Link to="/standard_room">
                  <button
                    style={{
                      backgroundColor: "#8e7037",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      textTransform: "uppercase",
                    }}
                  >
                    view detail
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
            style={{}}
          >
            <div className=" minisuite_transform ">
              <p className="minisuitetitleofallrooms">Twin Room</p>
              <img
                className=" image1ofminisuite"
                style={{ width: "100%" }}
                src="https://hotelasiatique.com.np/images/Room/room-4.jpg"
                alt=""
              />
            </div>

            <div
              className="row mt-3"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                <li>Max 3 person (s)</li>
                <li>AC: Yes</li>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                <li>View: City</li>
                <li>Bed: King-Size</li>
              </div>
            </div>
            <div className="row" style={{ padding: "5px" }}>
              <div
                className="col mt-3 mb-3"
                style={{
                  border: "1px solid gray",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "flex-end",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              >
                <Link to="/standard_room">
                  <button
                    style={{
                      backgroundColor: "#8e7037",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      textTransform: "uppercase",
                    }}
                  >
                    view detail
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllRoomsCard;
