import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Main from "../../components/main/Main";
import DefaultLayout from "../../layouts/DefaultLayout";

const MainPage = () => {
  return (
    <DefaultLayout>
      <Main />
    </DefaultLayout>
  );
};

export default MainPage;
