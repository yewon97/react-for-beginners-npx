import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json()) // response로 부터 json을 추출
      .then((json) => console.log(json));
    // 빈배열은 딱 한번만 실행 된다.
  }, []);
  return (
    <div>
      <h1>The Coins</h1>
      {loading ? <strong>Loading...</strong> : null}
    </div>
  );
}

export default App;
