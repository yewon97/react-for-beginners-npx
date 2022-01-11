// 복습하기
// 컴포넌트 파일의 첫 번째 글자는 대문자로!
import React from 'react';

// Potato 컴포넌트의 기본틀
// 컴포넌트를 작성할 때 규칙 1. 이름은 대문자로 시작
function Potato() {
  // 이 안에 컴포넌트가 반환할 값을 JSX로 작성 
  return <h3>I love potato!!</h3>;
}

// 마지막에 꼭 export 해줘야함
// 그래야지 다른 파일에서 Potato 컴포넌트 사용할 수 있음
export default Potato;

// 컴포넌트는 무조건 App 컴포넌트 안에 넣어야함!
// 컴포넌트 안에 컴포넌트!

// App.js 에 가서
// import Potato from "./component/Potato"
// 그다음 <Potato /> 컴포넌트 추가해주면된다.

// 재사용 안하고, 짧은 문장들은 그냥 App.js에 바로 컴포넌트 작성해도됨