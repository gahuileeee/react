import React from "react";
import Slider from "./Slider";
import Best from "./Best";
import Quick from "./Quick";
import Latest from "./Latest";
import Info from "./Info";

const Main = () => {
  return (
    <>
      <main>
        <Slider />
        <Best />
        <Quick />
        <Latest />
        <Info />
      </main>
    </>
  );
};

export default Main;
