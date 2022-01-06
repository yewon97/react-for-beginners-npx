import {useState, useEffect} from 'react';

function App() {
  // create-react-app을 써서 React.을 써줄 필요가 없음
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log('i run all the time');
  const iRunOnlyOnce = () => {
    console.log('I run only once.');
  };
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
