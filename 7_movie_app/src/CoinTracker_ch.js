//7.2 코인 목록 강의

import { useEffect, useState } from "react";

function CoinTracker_ch() {
  {
    /*TODO: 완료 - (Code Challenge) USD to Coin 환산기 만들기*/
  }
  const [loading, setLoading] = useState(true);
  const [isEnable, setIsEnable] = useState(false);
  const [currentCoin, setCurrentCoin] = useState("0");
  const [coins, setCoins] = useState([]); //`([])` 로 초기화 안 하면 `coins.length` 길이 확인 불가로 오류 뜸
  const [usd, setUsd] = useState("0");
  const selectedCoin = coins.find((coin) => coin.id === currentCoin);
  // const [selectedCoin, setSelectedCoin] = useState(null); // selectedCoin 을 state로 한다면

  //NaN 요소 표시 제거 함수
  const enable = (props) => {
    if (selectedCoin) {
      if (isNaN(props)) {
        return "";
      }
      return props;
    }
  };

  const onSelect = (event) => {
    setCurrentCoin(event.target.value);
    // selectedCoin 을 state로 - 방법 1 (권장 X)
    // setSelectedCoin(
    //   coins.find((coin) => coin.id === event.target.value) ?? null,
    // );
  };
  const onChange = (event) => setUsd(event.target.value);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  // selectedCoin 을 state로 - 방법 2
  // useEffect(
  //   () =>
  //     setSelectedCoin(coins.find((coin) => coin.id === currentCoin) ?? null),
  //   [coins, currentCoin],
  // );

  return (
    <div>
      <h1>USD to Coin Inverter {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <input
            type="number"
            value={usd}
            onChange={onChange}
            disabled={selectedCoin ? false : true}
          />
          <br />
          <select value={currentCoin} onChange={onSelect}>
            <option value="0">select coin</option>
            {coins.map((coin) => (
              <option value={coin.id} key={coin.id}>
                {coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price} USD{" "}
              </option>
            ))}
          </select>
          <br />
          <p>
            {selectedCoin ? enable(usd / selectedCoin.quotes.USD.price) : null}
            {selectedCoin ? ` '${selectedCoin.symbol}'` : null}
          </p>
        </div>
      )}
    </div>
  );
}

export default CoinTracker_ch;
