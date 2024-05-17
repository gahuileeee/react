import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import SubLayout from "../../layouts/SubLayout";

const ListPage = () => {
  return (
    <DefaultLayout>
      <SubLayout>
        {/* 내용시작 */}
        <p class="sort">
          <a href="#" class="on">
            전체(10) |
          </a>
          <a href="#">과일 |</a>
          <a href="#">야채 |</a>
          <a href="#">곡류</a>
        </p>
        <table border="0">
          <thead>
            <tr>
              <th>이미지</th>
              <th>종류</th>
              <th>상품명</th>
              <th>할인</th>
              <th>포인트</th>
              <th>판매가격</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="./view.html">
                  <img
                    src="../images/market_item1.jpg"
                    class="thumbnail"
                    alt="사과 500g"
                  />
                </a>
              </td>
              <td class="type">과일</td>
              <td class="title">
                <a href="#">사과 500g</a>
              </td>
              <td class="discount">10%</td>
              <td class="point">400P</td>
              <td class="price">
                <strong>3,600</strong>
                <del>4,000</del>
              </td>
            </tr>
            <tr>
              <td>
                <a href="./view.html">
                  <img
                    src="../images/market_item2.jpg"
                    class="thumbnail"
                    alt="사과 500g"
                  />
                </a>
              </td>
              <td class="type">과일</td>
              <td class="title">
                <a href="#">전남 완주 배 5kg</a>
              </td>
              <td class="discount">10%</td>
              <td class="point">400P</td>
              <td class="price">
                <strong>3,600</strong>
                <del>4,000</del>
              </td>
            </tr>
            <tr>
              <td>
                <a href="./view.html">
                  <img
                    src="../images/market_item3.jpg"
                    class="thumbnail"
                    alt="사과 500g"
                  />
                </a>
              </td>
              <td class="type">과일</td>
              <td class="title">
                <a href="#">방울 토마토</a>
              </td>
              <td class="discount">10%</td>
              <td class="point">400P</td>
              <td class="price">
                <strong>3,600</strong>
                <del>4,000</del>
              </td>
            </tr>
            <tr>
              <td>
                <a href="./view.html">
                  <img
                    src="../images/market_item6.jpg"
                    class="thumbnail"
                    alt="사과 500g"
                  />
                </a>
              </td>
              <td class="type">곡류</td>
              <td class="title">
                <a href="#">무농약 현미</a>
              </td>
              <td class="discount">10%</td>
              <td class="point">400P</td>
              <td class="price">
                <strong>3,600</strong>
                <del>4,000</del>
              </td>
            </tr>
            <tr>
              <td>
                <a href="./view.html">
                  <img
                    src="../images/market_item7.jpg"
                    class="thumbnail"
                    alt="사과 500g"
                  />
                </a>
              </td>
              <td class="type">야채</td>
              <td class="title">
                <a href="#">팜스토리 하루야채 샐러드</a>
              </td>
              <td class="discount">10%</td>
              <td class="point">400P</td>
              <td class="price">
                <strong>3,600</strong>
                <del>4,000</del>
              </td>
            </tr>
          </tbody>
        </table>

        <p class="paging">
          <a href="#">{"<"}</a>
          <a href="#" class="on">
            [1]
          </a>
          <a href="#">[2]</a>
          <a href="#">[3]</a>
          <a href="#">[4]</a>
          <a href="#">[5]</a>
          <a href="#">{">"}</a>
        </p>
        {/* 내용끝 */}
      </SubLayout>
    </DefaultLayout>
  );
};

export default ListPage;
