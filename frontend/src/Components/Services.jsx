import React from "react";
import TopContentOfPages from "./TopContentOfPages";
import ServiceSectionCard from "../Pages/Services/ServiceSectionCard";
import ServiceSectionCard2 from "../Pages/Services/ServiceSectionCard2";
const Services = () => {
  return (
    <>
      <TopContentOfPages
        title={"Our Services"}
        subtitle={"Our exquisite services"}
      />
      <ServiceSectionCard
        image1={"https://hotelasiatique.com.np/images/Room/room-26.jpg"}
        title1={"INTERNATIONAL CUISINES"}
        title2={"PROFESSIONAL CHEF PREPARED"}
        description={
          "Enjoy the finest food in Biratnagar prepared delicately by our  professional chef and served with humble staffs."
        }
        image2={"https://hotelasiatique.com.np/images/Room/room-27.jpg"}
      />
      <ServiceSectionCard2
        image1={"https://hotelasiatique.com.np/images/Room/room-25.jpg"}
        title1={"RESTAURANT & BAR"}
        title2={"WITH BUFFET BREAKFAST"}
        description={
          "Serving you the delicious cuisines our 45 seated restaurant cum bar serves breakfast, lunch , dinner in Indian, Nepalese, Chinese and Continental style."
        }
        image2={"https://hotelasiatique.com.np/images/Room/room-24.jpg"}
      />
      <ServiceSectionCard
        image1={"https://hotelasiatique.com.np/images/Room/room-18.jpg"}
        title1={"BANQUET HALL"}
        title2={"500 SEATED"}
        description={
          "Our banquet hall is suitable for large wedding receptions, professional conferences and seminars with the latest equipments and selective lighting."
        }
        image2={"https://hotelasiatique.com.np/images/Room/room-19.jpg"}
      />
      <ServiceSectionCard2
        image1={"https://hotelasiatique.com.np/images/Room/room-21.jpg"}
        title1={"MULTIPURPOSE HALLS"}
        title2={"MEDIUM & LARGE MEETINGS/SEMINARS"}
        description={
          "Hotel Asiatique provides 500 seated hall suitable for large scale conferences and theatre based seminars."
        }
        image2={"https://hotelasiatique.com.np/images/Room/room-20.jpg"}
      />
      <ServiceSectionCard
        image1={"https://hotelasiatique.com.np/images/Room/room-22.jpg"}
        title1={"MEETING HALLS"}
        title2={"SMALL & MEDIUM SCALE MEETINGS"}
        description={
          "Our two different meeting rooms are private with perfect settings for 21 to 250 guests and equipped with all technical equipments."
        }
        image2={"https://hotelasiatique.com.np/images/Room/room-23.jpg"}
      />
    </>
  );
};

export default Services;
