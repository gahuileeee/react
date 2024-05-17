import logo from './logo.svg';
import './App.css';
import {Fragment} from "react";

function App() {

  /*출력할 변수 선언*/

  /*
  JSX
  - Javascript XML
  - 브라우저에 출력할 HTML 태그를 동적 생성하기 위한 Javascript XML 문법
  - HTML 비슷하지만 몇가지 규칙이 다름
  */
let num1 =1;
let num2 =2;
let title ='Hello React!';
let name =null;
let isLogined =false;

const cities = ['서울','대전','대구','부산','광주'];
const users =[
  {uid:"a101",name:"김유신",age:23,addr:"김해"},
  {uid:"a102",name:"김춘추",age:21,addr:"경주"},
  {uid:"a103",name:"장보고",age:33,addr:"완도"},
  {uid:"a104",name:"강감찬",age:43,addr:"서울"},
  {uid:"a105",name:"이순신",age:53,addr:"부산"}
];
const onClickHandler = ()=>{alert('클릭2')};

let count =0;

const btnIncrease = ()=> {
  const countSpan = document.getElementsByClassName ("count")[0];
  countSpan.innerText = ++count;};
const btnDecrease = ()=> {const countSpan = document.getElementsByClassName("count")[0];
countSpan.innerText = --count;};


const onselectHandler =(e)=>{
console.log(e.target.value);
}

const onTextHandler = (e)=>{
  const textResult = document.getElementsByClassName('textResult')[0];
  textResult.innerText = e.target.value;
}

const onSubmitHandler = (e)=>{
  e.preventDefault();

  const formData = {
    uid: e.target.uid.value,
    name: e.target.name.value,
    age: e.target.age.value,
    };

  console.log(formData);
}

//return 여기는 JSX이고 위에는 javascript임
  return (
    <div className="App">
      <h3>ch02. JSX 실습</h3>
      <h4>기본 출력</h4>
      <p>num1 : {num1}</p>
      <p>num2 : {num2}</p>
      <p>title : {title}</p>
      <p>name : {name}</p>
      <p>isLogined : {isLogined}</p>
      <h4>조건 연산자</h4>
      <p>
        {num1 > num2 ? (
          <span>num1은 num2보다 크다</span>
        ) : (
          <span>num1은 num2보다 작다</span>
        )}
      </p>
      <p>{name === null && <span>name이 없습니다</span>}</p>
      <p>{name || <span>name이 없습니다</span>}</p>{" "}
      {/* name이 없으면이랑 같은 말*/}
      {isLogined ? <p>로그인 되었습니다</p> : <p>로그아웃 되었습니다</p>}
      <h4>반복 연산자</h4>
      {/*
        - 반복 연산시 key 속성으로 유일값 설정
        - JSX는 class 속성 대신 className 속성을 사용함
      */}
      <ul>
        {cities.map((city, index) => (
          <li className="city" key={index}>
            {city}
          </li>
        ))}
      </ul>
      {/* map에서 앞에는 값들, 뒤에는 index형태이며 key를 반드시 선언해야함 */}
      {users.map((user) => (
        <p className="user" key={user.uid}>
          {user.uid},{user.name},{user.age},{user.addr}
        </p>
      ))}
      {/* key는 index 뿐만 아니라 이렇게 pk값 같은 걸로도 줄 수 있음*/}
      <h4>JSX Fragment</h4>
      {/*
       - Fragment는 요소를 묶어주는 친구
       - 가상의 tag로서 별도의 div등을 만들어주지는 않음
       - <> </> 이렇게만 표현해도 Fragment임
       - import {Fragment} from "react"; 이렇게 import 선언해주어야 함
      */}
      <Fragment>
        <p>Hello world</p>
        <p>Hello react</p>
      </Fragment>
      <>
        <p>Hello world</p>
        <p>Hello react</p>
      </>
      <h4>이벤트</h4>
      {/*prettier-ignore*/}{" "}
      {/*이렇게 주석처리하면 그 바로 밑에 줄은 prettier가 ignore처리됨 */}
      <button onClick={() => alert("클릭!")}>버튼1</button>
      <button onClick={onClickHandler}>버튼2</button>
      <p>
        count : <span className="count">0</span>
        <br />
        <button onClick={btnIncrease}>증감</button>
        <button onClick={btnDecrease}>감소</button>
      </p>
      <select onChange={onselectHandler}>
        <option>서울</option>
        <option>대전</option>
        <option>대구</option>
        <option>부산</option>
        <option>광주</option>
      </select>

      <p className="textResult"></p>
      <textarea onChange={onTextHandler}></textarea>

      <form action="#" onSubmit={onSubmitHandler}>
        <input type='text' name='uid'/> <br />
        <input type='text' name='name'/> <br />
        <input type='text' name='age'/> <br />
        <input type='submit' value='전송'/> <br />
      </form>
    </div>
  );
}

export default App;
