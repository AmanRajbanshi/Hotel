import React from "react";
import Aboutus from "./AboutUsInHomePage";
import BookingSection from "./BookingSection";
import CarouselOfHomePage from "./CarouselOfHomePage";
import OurRooms from "./OurRoomsInHome";

const Home = () => {
  return (
    <>
      <CarouselOfHomePage />
      <BookingSection />
      <OurRooms />
      <Aboutus />
    </>
  );
};

export default Home;
