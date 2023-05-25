import React, { useState } from "react";
import "./EmailSubscriptionButton.css";
import axios from "axios";
const Button = () => {
  const [email, setEmail] = useState("");
  const [newsLetter, setNewsLetter] = useState([]);
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value);
  //   setEmail(e.target.value);
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (email === "") {
        alert("Please provide your email");
      } else {
        const { data } = await axios.post(
          "http://localhost:5000/api/v1/newsletter",
          email
        );
        console.log(data, "data");
        setNewsLetter(data);
      }
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="d-flex " style={{}}>
        <form className="d-flex w-100 justify-content-center  ">
          <span className=" footer_input">
            <input
              type="email"
              placeholder="Your email address"
              className="input_for_subscribe"
              value={email}
              // onChange={handleChange}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </span>
          <button
            onSubmit={handleSubmit}
            type="submit"
            className="subscribe_button"
            style={{
              backgroundColor: "transparent",
              border: "2px solid white",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="45"
              fill="currentColor"
              className="bi bi-send send_button"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default Button;
