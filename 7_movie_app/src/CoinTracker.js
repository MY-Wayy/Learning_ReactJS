//7.2 코인 목록 강의

import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); //`([])` 로 초기화 안 하면 `coins.length` 길이 확인 불가로 오류 뜸

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              {coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price} USD{" "}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CoinTracker;
