//7.2 코인 목록 강의

import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coinId, setCoinId] = useState("");
  const [coins, setCoins] = useState([]); //`([])` 로 초기화 안 하면 `coins.length` 길이 확인 불가로 오류 뜸
  const [usd, setUsd] = useState();

  const onChange = () => {
    setChangedUsd(usd);
  };
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
      {/*TODO (Code Challenge): USD to Coin 환산기 만들기*/}
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <input value={usd}></input>
          <select value={coinId}>
            {coins.map((coin) => (
              <option value={coin.id}>
                {coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price} USD{" "}
              </option>
            ))}
          </select>
          {<h2></h2>}
        </div>
      )}

      {/* 원래 강의 코드
      <ul>
        {coins.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price} USD{" "}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default CoinTracker;
