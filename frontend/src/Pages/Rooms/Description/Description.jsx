import React, { useState } from "react";
import "./description.css";
import Descriptioncarousel from "./Descriptioncarousel";
const Description = () => {
  const [showOverview, setShowOverview] = useState(false);
  const [showAmenities, setShowAmenities] = useState(true);
  const [showRates, setShowRates] = useState(false);
  const ShowOverviewContent = () => {
    setShowOverview(true);
    setShowAmenities(false);
    setShowRates(false);
  };
  const ShowAmenitiesContent = () => {
    setShowAmenities(true);
    setShowOverview(false);
    setShowRates(false);
  };
  const ShowRatesContent = () => {
    setShowRates(true);
    setShowOverview(false);
    setShowAmenities(false);
  };
  return (
    <>
      <Descriptioncarousel />
      <div
        className="container mt-5 mb-5"
        style={{
          borderTop: "1px solid gray",
          borderBottom: "1px solid gray",
          borderLeft: "none",
          borderRight: "none",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <div class="row " style={{}}>
          <div
            class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 "
            style={{
              borderLeft: "none",
              borderTop: "none",
              borderBottom: "none",
            }}
          >
            <div
              class
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "start",
                textTransform: "uppercase",
              }}
            >
              <button
                type="submit"
                className="homebuttonofdescription"
                onClick={ShowOverviewContent}
              >
                OVERVIEW
              </button>
              <button
                type="submit"
                onClick={ShowAmenitiesContent}
                className="homebuttonofdescription"
              >
                AMENITIES
              </button>
              <button
                type="submit"
                onClick={ShowRatesContent}
                className="homebuttonofdescription"
              >
                RATES
              </button>
            </div>
          </div>
          <div class=" col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 ">
            <div class="tab-content" id="v-pills-tabContent">
              {showOverview && (
                <div style={{ borderLeft: "1px solid black" }}>
                  <div
                    className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3"
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "Poppins,sans-serrif",
                        fontSize: "18px",
                        fontWeight: "700",
                        lineHeight: "25px",
                      }}
                    >
                      Standard Room
                    </h3>
                    <p
                      style={{
                        fontFamily: "Poppins,sans-serif",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "22.4px",
                      }}
                    >
                      Standard Rooms are one of our finest and spacious rooms,
                      built with aequate natural sunlight entry, AC, Free wifi
                      and other facilities
                    </p>
                  </div>
                </div>
              )}
              {showAmenities && (
                <div
                  className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3"
                  style={{ borderLeft: "1px solid black", paddingLeft: "10px" }}
                >
                  <div>
                    <p
                      className="pt-3 px-3"
                      style={{
                        fontFamily: "Poppins,sans-serif",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "22.4px",
                      }}
                    >
                      Following are some of the amenities included with the
                      rooms
                    </p>
                    <p
                      className="text-center fw-bold"
                      style={{
                        fontFamily: "Poppins,sans-serif",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "15.4px",
                      }}
                    >
                      AMENITIES
                    </p>
                  </div>
                  <div
                    className="row mb-3 px-3"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      lineHeight: "1.6",
                    }}
                  >
                    <div
                      className="col-xs-12 col-sm-12 col-md-3 col-lg-6 col-xl-3"
                      style={{
                        fontFamily: "Poppins,sans-serif",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "22.4px",
                      }}
                    >
                      <li>High Speed Wifi</li>
                      <li>AC and Ceiling Fan</li>
                      <li>Digital LED TV</li>
                    </div>
                    <div
                      className="col-xs-12 col-sm-12 col-md-3 col-lg-6 col-xl-3"
                      style={{
                        fontFamily: "Poppins,sans-serif",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "22.4px",
                      }}
                    >
                      <li>Toileteries</li>
                      <li>Cupboard</li>
                      <li>Spacious Indoors</li>
                    </div>
                    <div
                      className="col-xs-12 col-sm-12 col-md-3 col-lg-6 col-xl-3"
                      style={{
                        fontFamily: "Poppins,sans-serif",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "22.4px",
                      }}
                    >
                      <li>Buffet Breakfast</li>
                      <li>Room Service</li>
                      <li>InterCom</li>
                    </div>
                  </div>
                </div>
              )}
              {showRates && (
                <div
                  className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3"
                  style={{
                    borderLeft: "1px solid black",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <div style={{}}>
                    <table
                      class="table"
                      style={{ paddingLeft: "10px", paddingTop: "10px" }}
                    >
                      <thead>
                        <tr
                          style={{
                            fontFamily: "Poppins,sans-serif",
                            fontSize: "18px",
                            fontWeight: "400",
                            lineHeight: "20px",
                            overflowX: "scroll",
                          }}
                        >
                          <th scope="col" className="sno">
                            S.NO.
                          </th>
                          <th scope="col" className="singleguest">
                            SINGLE GUEST
                          </th>
                          <th scope="col" className="doubleguest">
                            DOUBLE GUEST
                          </th>
                          <th scope="col" className="tripleguest">
                            TRIPLE GUEST
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">#</th>
                          <td>NRs.2700</td>
                          <td>NRs.4200</td>
                          <td>NRs.4200</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
