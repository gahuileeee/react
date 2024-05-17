import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Register from "../../components/user/Register";

const RegisterPage = () => {
  return (
    <DefaultLayout>
      <div id="user">
      <Register/>
      </div>
    </DefaultLayout>
  );
};

export default RegisterPage;
