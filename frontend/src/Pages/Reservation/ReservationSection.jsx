import React, { useState } from "react";
import CheckInOutInReservation from "./CheckInOutInReservation";
import OtherDescription from "./OtherDescription";
import "./reservationsection.css";
import axios from "axios";
const ReservationSection = () => {
  const [name, setName] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("");
  const [childs, setChilds] = useState("");
  const [noOfNights, setNoOfNights] = useState("");
  const [noOfRooms, setNoOfRooms] = useState("");
  const [roomType, setRoomType] = useState("");
  const [address, setAddress] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [reservation, setReservation] = useState([]);

  const handleSubmitReservation = async (event) => {
    event.preventDefault();

    if (
      !name ||
      !phNumber ||
      !email ||
      !checkIn ||
      !checkOut ||
      !adults ||
      !childs ||
      !noOfNights ||
      !noOfRooms ||
      !roomType ||
      !address ||
      !orderNotes
    ) {
      alert("provide all data");
    } else {
      try {
        const { data } = await axios.post(
          "http://localhost:5000/api/v1/reservation",
          {
            name,
            phNumber,
            email,
            checkIn,
            checkOut,
            adults,
            childs,
            noOfNights,
            noOfRooms,
            roomType,
            address,
            orderNotes,
          }
        );
        console.log(data, "data");
        alert("data sent successfully");
        setReservation(data);
      } catch (error) {
        alert(error.message);
        console.log(error.message);
      }
    }
  };
  return (
    <>
      <div className="container mb-5">
        <div className="row ">
          <div
            className="col-md-3  col-sm-3  mt-3 reservationsectionbody "
            style={{}}
          >
            <div className="col ">
              <h2 className="termsandpolices">Terms and Policies</h2>
              <hr />
            </div>
            <CheckInOutInReservation
              description1={"check-In"}
              description2={"12 noon"}
            />
            <CheckInOutInReservation
              description1={"check-Out"}
              description2={"12 noon"}
            />
            <CheckInOutInReservation
              description1={"Luggage Storage"}
              description2={"Before 12 noon"}
            />
            <CheckInOutInReservation
              description1={"Pets"}
              description2={"Not Allowed"}
            />

            <div className="row ">
              <OtherDescription
                title={"Cancellation/Pre-Payment"}
                description={
                  " Cancellation and prepayment policies vary according to room type. Only 50 % of your payment will be refunded if the room reservation is cancelled in less than 24 hours. Please contact us to learn more."
                }
              />
              <OtherDescription
                title={" Children / Extra - Beds"}
                description={
                  " All children are welcome. No extra charge for extra number of children (age less than 14). There is no capacity for extra beds but we provide a single extra mattress for the room (Rs. 1000) Supplements are not calculated automatically in the total costs and will have to be paid for separately during your stay."
                }
              />
              <OtherDescription
                title={" Additional Information"}
                description={
                  "  Intercom service is available for Room Service. Please note that the restaurant is open 365 days. Please note that parking spaces is available . Hair Dryer is available on all rooms upon request. Mini Bar items are not complimentary and is applicable to charges."
                }
              />
            </div>
          </div>
          <div className="col-md-9 col-sm-9  sideformsection" style={{}}>
            <form onSubmit={handleSubmitReservation}>
              <div className="book">
                <p className="d-inline p-2 mx-5 bbb">
                  Book <span className="yourbook">Your Room</span>
                </p>
              </div>
              <div className="col">
                <h2 className="reservationform">RESERVATION FORM</h2>
              </div>

              <div className="row">
                <div className="col-md-8  col-sm-12">
                  <label className="labelname" htmlFor="">
                    Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    className="reservationsectionname"
                    type="text"
                    name="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row" style={{ marginTop: "-15px" }}>
                <div className="col-md-4">
                  <label className="labelname" htmlFor="">
                    Phone Num <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    className="reservationsectionphone"
                    type="number"
                    name="phoneNumber"
                    onChange={(e) => {
                      setPhNumber(e.target.value);
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <label className="labelname" htmlFor="">
                    Email <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    className="reservationsectionemail"
                    type="email"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row" style={{ marginTop: "-15px" }}>
                <div className="col-md-4 checkIn-div" style={{}}>
                  <label
                    className="labelname-checkIn"
                    htmlFor=""
                    style={{ marginLeft: "30px" }}
                  >
                    Check-In <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    className="reservationsectioncheckinform"
                    style={{}}
                    type="date"
                    name="checkIn"
                    onChange={(e) => {
                      setCheckIn(e.target.value);
                    }}
                  />
                </div>
                <div className="col-md-4 checkOut-div  " style={{}}>
                  <label className="labelname-checkOut" htmlFor="" style={{}}>
                    Check-Out <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    className="reservationsectioncheckoutform"
                    style={{ marginLeft: "5px" }}
                    type="date"
                    name="checkOut"
                    onChange={(e) => {
                      setCheckOut(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="row" style={{ marginTop: "-15px" }}>
                <div className="col-md-4">
                  <label className="labelname" htmlFor="">
                    Adults
                  </label>
                  <select
                    className="reservationsectioncheckoutform1"
                    style={{
                      width: "100%",
                      height: "40px",
                      border: "2px solid gray",
                    }}
                    type="text"
                    name="adults"
                    value={adults}
                    onChange={(e) => {
                      setAdults(e.target.value);
                    }}
                  >
                    <option value="1">1 </option>
                    <option value="2">2 </option>
                    <option value="3">3 </option>
                    <option value="4">4 </option>
                    <option value="5">5 </option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="labelname" htmlFor="">
                    Child
                  </label>
                  <select
                    className="reservationsectioncheckoutform1"
                    style={{
                      width: "100%",
                      height: "40px",
                      border: "2px solid gray",
                    }}
                    type="text"
                    name="childs"
                    value={childs}
                    onChange={(e) => {
                      setChilds(e.target.value);
                    }}
                  >
                    <option value="1">1 </option>
                    <option value="2">2 </option>
                    <option value="3">3 </option>
                    <option value="4">4 </option>
                    <option value="5">5 </option>
                  </select>
                </div>
              </div>

              <div className="row" style={{ marginTop: "-15px" }}>
                <div className="col-md-4">
                  <label className="labelname" htmlFor="">
                    No. of Nights
                  </label>
                  <select
                    className="reservationsectioncheckoutform1"
                    style={{
                      width: "100%",
                      height: "40px",
                      border: "2px solid gray",
                    }}
                    name="noOfNights"
                    value={noOfNights}
                    type="text"
                    onChange={(e) => {
                      setNoOfNights(e.target.value);
                    }}
                  >
                    <option value="1">1 </option>
                    <option value="2">2 </option>
                    <option value="3">3 </option>
                    <option value="4">4 </option>
                    <option value="5">5 </option>
                    <option value="6">6 </option>
                    <option value="7">7 </option>
                    <option value="8">8 </option>
                    <option value="9">9 </option>
                    <option value="10">10 </option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="labelname" htmlFor="">
                    No. of Rooms
                  </label>
                  <select
                    className="reservationsectioncheckoutform1"
                    style={{
                      width: "100%",
                      height: "40px",
                      border: "2px solid gray",
                    }}
                    name="noOfRooms"
                    type="text"
                    value={noOfRooms}
                    onChange={(e) => {
                      setNoOfRooms(e.target.value);
                    }}
                  >
                    <option value="1">1 </option>
                    <option value="2">1 </option>
                    <option value="3">2 </option>
                    <option value="4">3 </option>
                    <option value="5">4 </option>
                  </select>
                </div>
              </div>

              <div className="row" style={{ marginTop: "-15px" }}>
                <div className="col-md-8">
                  <label className="labelname" htmlFor="">
                    Room Type <span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    className="reservationsectioncheckoutform1"
                    style={{
                      width: "100%",
                      height: "40px",
                      border: "2px solid gray",
                    }}
                    name="roomType"
                    type="text"
                    onChange={(e) => {
                      setRoomType(e.target.value);
                    }}
                    value={roomType}
                  >
                    <option value="Deluxe Room">Deluxe Room</option>
                    <option value="Standard Room">Standard Room</option>
                    <option value="Twin Room">Twin Room</option>
                    <option value="Mini Room">Mini Room</option>
                  </select>
                </div>
              </div>
              <div className="row" style={{ marginTop: "-15px" }}>
                <div className="col-md-8">
                  <label className="labelname" htmlFor="">
                    Address <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    className="reservationsectionname"
                    style={{
                      width: "100%",
                      height: "40px",
                      border: "2px solid gray",
                    }}
                    type="text"
                    name="address"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    placeholder="Street Address, Province, State, Country"
                  />
                </div>
              </div>
              <div className="row" style={{ marginTop: "-15px" }}>
                <div className="col-md-8">
                  <label className="labelname" htmlFor="">
                    Order Notes
                  </label>
                  <input
                    className="reservationsectionname"
                    style={{
                      width: "100%",
                      height: "40px",
                      border: "2px solid gray",
                    }}
                    type="text"
                    name="orderNotes"
                    onChange={(e) => {
                      setOrderNotes(e.target.value);
                    }}
                    placeholder="Notes about order,eg. special notes for delivery"
                  />
                </div>
              </div>
              <div className="row" style={{ marginTop: "-15px" }}>
                <div className="col ">
                  <button
                    className="reservationsectionbutton"
                    style={{
                      border: "none",
                      background: "#8e7037",
                    }}
                    type="submit"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationSection;
