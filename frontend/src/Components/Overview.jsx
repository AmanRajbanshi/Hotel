import React from "react";
import OverviewPage from "../Pages/About/Overview/OverviewPage";
import TopContentOfPages from "./TopContentOfPages";
const Overview = () => {
  return (
    <>
      <TopContentOfPages
        title={"About Us"}
        subtitle={"Hotel Asiatique Biratnagar"}
      />

      <OverviewPage />
    </>
  );
};

export default Overview;
