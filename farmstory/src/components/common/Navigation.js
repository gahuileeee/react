import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <ul class="gnb">
        <li>
          <Link to="/introduction/hello">팜스토리소개</Link>
        </li>
        <li>
          <Link to="/market/list">
            <img src="/images/head_menu_badge.png" alt="30%" />
            장보기
          </Link>
        </li>
        <li>
          <Link to="/board/list?cate1=croptalk&cate2=story">농작물이야기</Link>
        </li>
        <li>
          <Link to="/board/list?cate1=event&cate2=info">이벤트</Link>
        </li>
        <li>
          <Link to="/board/list?cate1=community&cate2=notice">커뮤니티</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
