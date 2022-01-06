import { useState, useEffect } from 'react';

function Hello() {
  // function 으로 쓰는 법
  useEffect(function() {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);
  // 화살표함수로 쓰는 법
  // useEffect(() => {
  //   console.log("hi :)");
  //   return () => console.log("bye :(");
  // }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
  <div>
    { // JS 쓸 때는 중괄호 쓰는 거 기억하기!
      showing ? <Hello /> : null
    }
    <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
  </div>
  );
}

export default App;
