import React from "react";
import Aside from "../components/admin/common/Aside";

const AdminLayout = ({ children }) => {
  return (
    <div id="admin-container">
      <header>
        <a href="./index.html" class="logo">
          <img src="/images/admin_logo.jpg" alt="로고" />
        </a>
        <p>
          <a href="/">HOME |</a>
          <a href="#">로그아웃 |</a>
          <a href="#">고객센터</a>
        </p>
      </header>
      <main>
        <Aside />
        {children}
      </main>
      <footer>
        <p>
          Copyright(C)Farmstory All rights reserved. FARMSTORY ADMINISTRATOR
          Version 1.0.1
        </p>
      </footer>
    </div>
  );
};

export default AdminLayout;
