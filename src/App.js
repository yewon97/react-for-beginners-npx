import {useState} from 'react';

function App() {
  // create-react-app을 써서 React.을 써줄 필요가 없음
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log('call an api');
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
