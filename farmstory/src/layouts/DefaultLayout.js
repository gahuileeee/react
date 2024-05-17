import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div id="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
