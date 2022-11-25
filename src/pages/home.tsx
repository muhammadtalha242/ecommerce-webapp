import React from "react";

import Announcements from "../components/Announcements";
import Slider from "../components/Slider";
import Topbar from "../components/Topbar";

const Home = () => {
  return (
    <>
      <Announcements />
      <Topbar />
      <Slider />
      <div>Home</div>
    </>
  );
};

export default Home;
