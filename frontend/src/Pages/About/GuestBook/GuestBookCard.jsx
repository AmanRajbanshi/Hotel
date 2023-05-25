import React from "react";
import "./guest.css";
const GuestBookCard = ({ image, name, description, title }) => {
  return (
    <>
      <div
        className=" card d-flex justify-content-center align-items-center p-5 guestbookcard"
        style={{
          fontFamily: "poppins,sans-serrif",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "22.5px",
          color: "rgb(137, 137, 137)",
          backgroundColor: "#F9F9F9",
          border: "none",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-quote "
          viewBox="0 0 16 16"
        >
          <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
        </svg>
        <img className="p-3" src={image} alt="" />
        <h4
          className="titleInGuestBookCard"
          style={{ color: "black", fontWeight: "bold" }}
        >
          {title}
        </h4>
        <p className="text-center p-3">{description}</p>
        <p style={{ color: "black" }}>{name}</p>
      </div>
    </>
  );
};

export default GuestBookCard;
