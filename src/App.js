import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      // 비어 있으면 함수를 실행시키지 않음
      return;
    }
    setToDo(""); // input을 비워줌
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
