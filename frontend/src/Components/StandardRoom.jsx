import React from "react";
import MiniRoomContent from "../Pages/Rooms/MiniRoomContent";
import TopContentOfPages from "./TopContentOfPages";

const StandardRoom = () => {
  return (
    <>
      <TopContentOfPages title={"Standard Room"} />
      <MiniRoomContent />
    </>
  );
};

export default StandardRoom;
