import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('i run all the time');
  useEffect(() => {
    console.log('CALL THE API...');
  }, []);
  useEffect(() => {
    // keyword가 바뀔 때 리렌더링 하고 싶으면 []안에 keyword를 적으면됨
    console.log('Search for', keyword);
  }, [keyword]);
    return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
