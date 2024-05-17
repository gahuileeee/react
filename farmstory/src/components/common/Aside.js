import React from "react";
import { Link, useLocation } from "react-router-dom";
import useCates from "../../hooks/useCates";

const Aside = () => {
  const [cate1, cate2] = useCates();

  return (
    <>
      {/* introduction */}
      {cate1 === "introduction" && (
        <aside>
          <img src="../images/sub_aside_cate1_tit.png" alt="팜스토리 소개" />

          <ul className="lnb">
            <li className={cate2 === "hello" ? "on" : ""}>
              <Link to="/introduction/hello">인사말</Link>
            </li>
            <li className={cate2 === "direction" ? "on" : ""}>
              <Link to="/introduction/direction">찾아오시는 길</Link>
            </li>
          </ul>
        </aside>
      )}

      {/* market */}
      {cate1 === "market" && (
        <aside>
          <img src="../images/sub_aside_cate2_tit.png" alt="장보기" />

          <ul class="lnb">
            <li class="on">
              <Link to="/market/list">장보기</Link>
            </li>
          </ul>
        </aside>
      )}

      {/* croptalk */}
      {cate1 === "croptalk" && (
        <aside>
          <img src="../images/sub_aside_cate3_tit.png" alt="농작물이야기" />

          <ul class="lnb">
            <li className={cate2 === "story" ? "on" : ""}>
              <Link to="/board/list?cate1=croptalk&cate2=story">
                농작물이야기
              </Link>
            </li>
            <li className={cate2 === "grow" ? "on" : ""}>
              <Link to="/board/list?cate1=croptalk&cate2=grow">텃밭가꾸기</Link>
            </li>
            <li className={cate2 === "school" ? "on" : ""}>
              <Link to="/board/list?cate1=croptalk&cate2=school">귀농학교</Link>
            </li>
          </ul>
        </aside>
      )}

      {/* event */}
      {cate1 === "event" && (
        <aside>
          <img src="../images/sub_aside_cate4_tit.png" alt="이벤트" />

          <ul class="lnb">
            <li class="on">
              <Link to="/board/list?cate1=event&cate2=info">이벤트</Link>
            </li>
          </ul>
        </aside>
      )}

      {/* community */}
      {cate1 === "community" && (
        <aside>
          <img src="../images/sub_aside_cate5_tit.png" alt="커뮤니티" />

          <ul class="lnb">
            <li className={cate2 === "notice" ? "on" : ""}>
              <Link to="/board/list?cate1=community&cate2=notice">
                공지사항
              </Link>
            </li>
            <li className={cate2 === "menu" ? "on" : ""}>
              <Link to="/board/list?cate1=community&cate2=menu">
                오늘의식단
              </Link>
            </li>
            <li className={cate2 === "chef" ? "on" : ""}>
              <Link to="/board/list?cate1=community&cate2=chef">
                나도요리사
              </Link>
            </li>
            <li className={cate2 === "qna" ? "on" : ""}>
              <Link to="/board/list?cate1=community&cate2=qna">
                1:1고객문의
              </Link>
            </li>
            <li className={cate2 === "faq" ? "on" : ""}>
              <Link to="/board/list?cate1=community&cate2=faq">
                자주묻는질문
              </Link>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Aside;
