import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        uid :"",
        pass :"",
        name :"",
        nick :"",
        email :"",
        hp :"",
        zip :"",
        addr1 :"",
        addr2 :"",
    })
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(user);

        axios.post("http://localhost:8080/user" , user).then((response)=>{
            console.log(response.data);
            alert('회원가입 완료');

            navigate("/user/login");
        }).catch((err)=>{
            console.log(err);
        });
    };
    const changeHandler = (e)=>{
        e.preventDefault();
        setUser({...user,[e.target.name]: e.target.value});
    };
  return (
    <section class="register">
      <form onSubmit={submitHandler}>
        <table border="1">
          <caption>사이트 이용정보 입력</caption>
          <tr>
            <td>아이디</td>
            <td>
              <input
                type="text"
                name="uid"
                placeholder="아이디 입력"
                value={user.uid}
                onChange={changeHandler}
              />
              <button>
                <img src="../images/chk_id.gif" alt="" />
              </button>
              <span class="resultId"></span>
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input type="password" name="pass" placeholder="비밀번호 입력"  value={user.pass}
                onChange={changeHandler} />
            </td>
          </tr>
          <tr>
            <td>비밀번호 확인</td>
            <td>
              <input
                type="password"
                name="pass2"
                placeholder="비밀번호 확인 입력"
              />
              <span class="resultPass"></span>
            </td>
          </tr>
        </table>
        <table border="1">
          <caption>개인정보 입력</caption>
          <tr>
            <td>이름</td>
            <td>
              <input type="text" name="name" placeholder="이름 입력" value={user.name} onChange={changeHandler} />
            </td>
          </tr>
          <tr>
            <td>별명</td>
            <td>
              <p>공백없이 한글, 영문, 숫자만 입력가능</p>
              <input type="text" name="nick" placeholder="별명 입력" value={user.nick} onChange={changeHandler} />
              <span class="resultNick"></span>
            </td>
          </tr>
          <tr>
            <td>E-Mail</td>
            <td>
              <input type="email" name="email" placeholder="이메일 입력"  value={user.email} onChange={changeHandler}/>
            </td>
          </tr>
          <tr>
            <td>휴대폰</td>
            <td>
              <input
                type="text"
                name="hp"
                placeholder="- 포함 13자리 입력"
                minlength="13"
                maxlength="13"
                value={user.hp} onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>주소</td>
            <td>
              <div>
                <input type="text" name="zip" placeholder="우편번호" readonly  value={user.zip} onChange={changeHandler}/>
                <button class="btnZip">
                  <img src="../images/chk_post.gif" alt="" />
                </button>
              </div>
              <div>
                <input
                  type="text"
                  name="addr1"
                  placeholder="주소를 검색하세요."
                  value={user.addr1} onChange={changeHandler}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="addr2"
                  placeholder="상세주소를 입력하세요."
                  value={user.addr2} onChange={changeHandler}
                />
              </div>
            </td>
          </tr>
        </table>

        <div>
          <a href="#" class="btnCancel">
            취소
          </a>
          <input type="submit" class="btnRegister" value="회원가입"  />
        </div>
      </form>
    </section>
  );
}

export default Register