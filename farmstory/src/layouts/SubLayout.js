import React from "react";
import Aside from "../components/common/Aside";
import { useLocation } from "react-router-dom";
import useCates from "../hooks/useCates";
import titleLabels from "../data/titleLabels.json";

const SubLayout = ({ children }) => {
  const [cate1, cate2] = useCates();

  return (
    <div id="sub">
      <div>
        <img src={`/images/sub_top_${cate1}.png`} alt={titleLabels[cate1]} />
      </div>
      <section className={cate1}>
        <Aside />
        <article className={cate2}>
          <nav>
            <img
              src={`/images/sub_nav_tit_${cate1}_${cate2}.png`}
              alt={titleLabels[cate2]}
            />
            <p>
              HOME {">"}
              {titleLabels[cate1]} {">"}
              <em>{titleLabels[cate2]}</em>
            </p>
          </nav>

          {/* 내용 시작 */}
          {children}
          {/* 내용 끝  */}
        </article>
      </section>
    </div>
  );
};

export default SubLayout;
