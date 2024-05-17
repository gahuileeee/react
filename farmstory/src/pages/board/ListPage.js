import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import SubLayout from "../../layouts/SubLayout";
import { Link } from "react-router-dom";
import useCates from "../../hooks/useCates";

const ListPage = () => {
  const [cate1, cate2] = useCates();

  return (
    <DefaultLayout>
      <SubLayout>
        <div id="board">
          <section class="list">
            <table border="0">
              <caption>글목록</caption>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>날짜</th>
                <th>조회</th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <a href="./view.html">테스트 제목입니다.[3]</a>
                </td>
                <td>길동이</td>
                <td>20-05-12</td>
                <td>12</td>
              </tr>
            </table>

            <div class="page">
              <a href="#" class="prev">
                이전
              </a>
              <a href="#" class="num current">
                1
              </a>
              <a href="#" class="num">
                2
              </a>
              <a href="#" class="num">
                3
              </a>
              <a href="#" class="next">
                다음
              </a>
            </div>

            <Link
              to={`/board/write?cate1=${cate1}&cate2=${cate2}`}
              class="btn btnWrite"
            >
              글쓰기
            </Link>
          </section>
        </div>
      </SubLayout>
    </DefaultLayout>
  );
};

export default ListPage;
