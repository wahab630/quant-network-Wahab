import React from "react";
import Cardpic from "../components/elements/Cardpic";

import FirstComponent from "../components/elements/FirstComponent";
import Fivecomp from "../components/elements/Fivecomp";
import Flow from "../components/elements/Flow";
import Fourcomp from "../components/elements/Fourcomp";
import Hero from "../components/elements/Hero";
import Lastpic from "../components/elements/Lastpic";
import PicComponent from "../components/elements/PicComponent";
import Secondcomponent from "../components/elements/Secondcomponent";
import SixColumn from "../components/elements/SixColumn";
import Thirdcomp from "../components/elements/Thirdcomp";

const Home = () => {
  return (
    <>
      <Hero />
      <FirstComponent />
      <PicComponent />
      <Flow />
      <SixColumn />
      <Cardpic/>
      <Secondcomponent />
      <Thirdcomp />
      <Fourcomp/>
      <Fivecomp/>
      <Lastpic />
    </>
  );
};

export default Home;
