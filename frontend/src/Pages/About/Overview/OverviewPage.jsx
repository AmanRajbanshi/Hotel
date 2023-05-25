import React from "react";
import "./overview.css";
import CountUp from "react-countup";
const Overview = () => {
  return (
    <>
      <div className="container  mt-5">
        <div className="row d-flex ">
          <div className="first-card d-flex">
            <div className="col-sm-12 col-md-6 col-lg-6  imageSectionOfAbout">
              <img
                className="imageSectionOfAbout1"
                src="https://hotelasiatique.com.np/images/About/about.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-12 col-xs-12 col-md-6 col-lg-4  titleofabout">
              <h2 className="col-md-12 fw-bold aboutusTitle" style={{}}>
                About Us
              </h2>
              <p className="text-start  ">
                Hotel Asiatique is a downown hotel located in the heart of
                Biratnagar City where comfort and hospitality greet you right
                from the minute you step into our spacious comfort. We are just
                a walking distance from the Biratnagar Airport and just a few
                minutes ride from the shopping centres. Experience the dimension
                of hospitality, luxury and pleasure with us.
              </p>
              <p className="text-start ">
                Our motto is " MEET THE EXPECTATION FEEL THE COMFORT". We focus
                on guest satisfaction. Our hotel is the most convenient base for
                travelling executives, holiday makers and revelers.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5 ">
          <div className="headerofWhyToChooseHotelAsiatique d-flex">
            <div className="col-md-6 mt-5 descriptionOfChoosing">
              <h2 className=" col-md-8 fw-bold guestChooseTitle" style={{}}>
                WHY GUESTS CHOOSE HOTEL ASIATIQUE?
              </h2>
              <p className="col-md-11 text-start " style={{}}>
                The five storied building features 52 tastefully appointed room
                with richly patterned fabrics, painting, & king sized deluxe,
                queen & twin-bedded room each room incorporates comfort &
                charming decorate with individually controlled heating & air
                conditioning, television, wardrobes, attached baths, seperate
                shower & toilet enclosures with complementary toilertries. Every
                room overlooks a kaleidoscopic view of the surrounding. Other
                amenities for guest includes parking, limousine service, laundry
                & valet service, 24 hour room service,mini bar, in house doctor,
                safe deposit & internet service. <br /> Our facilities include a
                restaurant which offers you a variety of food item according to
                your choice & taste,"bar" which can offer you several drinks as
                per your requirement," Banquet Hall" for the party or seminar
                hall which has the capacity for 400 pax.
              </p>
            </div>
            <div className="col-md-6 mainimageSectionAbout">
              <img
                className="imageSectionOfAbout2"
                style={{}}
                src="https://hotelasiatique.com.np/images/About/about-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="parallex mt-5">
        <div className="container-fluid helloaman1">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center align-items-center">
              <h1
                className=" text-center"
                style={{
                  textTransform: "uppercase",
                  color: "white",
                  marginTop: "50px",
                }}
              >
                Hotel Statistics
              </h1>
            </div>
            <div className="countingSection d-flex mb-2">
              <div className="col-md-3 countup1" style={{}}>
                <CountUp
                  className="NumberInCounting"
                  end={30000}
                  duration={5}
                />
                <p
                  className="textInCounting"
                  style={{ fontSize: "15px", color: "white" }}
                >
                  Guest Stay
                </p>
              </div>
              <div className="col-md-3 countup1">
                <CountUp className="NumberInCounting" end={523} duration={5} />
                <p style={{ fontSize: "15px", color: "white" }}>Events</p>
              </div>
              <div className="col-md-3 countup1">
                <CountUp className="NumberInCounting" end={32} duration={5} />
                <p style={{ fontSize: "15px", color: "white" }}>Staffs</p>
              </div>
              <div className="col-md-3 countup1">
                <CountUp className="NumberInCounting" end={5} duration={5} />
                <p style={{ fontSize: "15px", color: "white" }}>Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
