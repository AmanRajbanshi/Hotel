import React from "react";
import TopContentOfPages from "./TopContentOfPages";
import "./rooms.css";
import AllRoom from "../Pages/Rooms/AllRoom";
const Rooms = () => {
  return (
    <>
      <TopContentOfPages title={"Our Rooms"} />
      <AllRoom />
    </>
  );
};

export default Rooms;
