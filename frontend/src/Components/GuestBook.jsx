import React from "react";
import GuestBookCard from "../Pages/About/GuestBook/GuestBookCard";
import TopContentOfPages from "./TopContentOfPages";
import "./mainguestbook.css";
const GuestBook = () => {
  return (
    <>
      <TopContentOfPages
        title={"Our Guest "}
        subtitle={"Hotel Asiatique Biratnagar"}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="text-center p-3 mainTitle ">
                  READ OUR GUEST BOOK FROM CUSTOMER
                </h2>
              </div>
            </div>
          </div>
          <div className="col-md-4  pb-2 car ">
            <GuestBookCard
              image={
                "https://hotelasiatique.com.np/images/Guestbook/Guest-Book-1.png"
              }
              title={"GREAT PLACE"}
              description={
                "The food is very good. Rooms are well maintained. Overall it is a great place to stay for vacation. Recently they've constructed a swimming pool which is supposed to have really good features ."
              }
              name={"AZZYOL DHAMALA"}
            />
          </div>
          <div className="col-md-4  pb-2 car">
            <GuestBookCard
              image={
                "https://hotelasiatique.com.np/images/Guestbook/Guest-Book-2.png"
              }
              title={"QUIET &FRIENDLY"}
              description={
                "Location wise very close to the airport yet surprisingly quiet. Rooms are decent enough for a short stay. Staff are equally polite and very customer friendly. I didn't stay long enough to rate it 4 star but the place is one of the best in the town."
              }
              name={"MK NOMAD TRAVELLER"}
            />
          </div>
          <div className="col-md-4  pb-2 car">
            <GuestBookCard
              image={
                "https://hotelasiatique.com.np/images/Guestbook/Guest-Book-3.png"
              }
              title={"LOVE THE HOTEL"}
              description={
                "One of the better hotel in Biratnagar, airport road with reasonable price. Beds and toilets are found to be clean. Lots of car parking facility. Good restaurants in the vicinity. Overall, good place to stay."
              }
              name={"SURAJ PRASAD MUDBHARI"}
            />
          </div>
          <div className="col-md-4  pb-2 car">
            <GuestBookCard
              image={
                "https://hotelasiatique.com.np/images/Guestbook/Guest-Book-4.png"
              }
              title={"LOVED THE EXPERIENCE"}
              description={
                "Loved the experience I had here . Loved the service here. Friendly and supportive staffs. The selection of location of hotel, near the domestic airport , is really good for travellers. Impressed with late night service here."
              }
              name={"SABIN ACHARYA"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestBook;
