import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux' //redux action 가져오기 위햇 (setCookie하려고)
import { login } from '../../slices/authSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        uid : "",
        pass : ""
    })

const submitHandler = (e)=>{
    e.preventDefault();
    console.log(user);

    axios.post("http://localhost:8080/user/login", user).then((response)=>{
        console.log(response.data);
        
 
        //쿠키처리 (redux action 실행)
        dispatch(login(response.data));
        navigate("/");

    }).catch((err)=>{
        console.log(err)
    });

};

const changeHandler = (e)=> {
     e.preventDefault();
    setUser({...user,[e.target.name] : e.target.value})
};

  return (
    <div id="user">
      <section class="login">
        <form onSubmit={submitHandler}>
          <table border="0">
            <tr>
              <td>
                <img src="../images/login_ico_id.png" alt="아이디" />
              </td>
              <td>
                <input type="text" name="uid" placeholder="아이디 입력" value={user.uid} onChange={changeHandler}/>
              </td>
            </tr>
            <tr>
              <td>
                <img src="../images/login_ico_pw.png" alt="비밀번호"  />
              </td>
              <td>
                <input
                  type="password"
                  name="pass"
                  placeholder="비밀번호 입력"
                  value={user.pass} onChange={changeHandler}
                />
              </td>
            </tr>
          </table>
          <input type="submit" value="로그인" class="btnLogin" />
        </form>
        <div>
          <h3>회원 로그인 안내</h3>
          <p>아직 회원이 아니시면 회원으로 가입하세요.</p>
          <Link to={"/user/register"}>회원가입</Link>
        </div>
      </section>
    </div>
  );
}

export default Login