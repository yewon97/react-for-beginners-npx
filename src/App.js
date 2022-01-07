import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // empty array로 만들어서 undefined가 반환되지 않게 해야함 -> coins.length에서 오류가 남
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json()) // response로 부터 json을 추출
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins ({coins.length})개</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
