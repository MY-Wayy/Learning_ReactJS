import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // useEffect를 위한 예시 console 출력, 함수
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  };
  // useEffect(): 첫 인자의 함수를 한번만 실행될 수 있도록 보호함
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("i run when 'keyword' changes. keyword:", keyword);
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("i run when 'keyword' & 'counter'  changes.");
  }, [keyword, counter]);
  // [value] : value 값이 변할 때는 해당 함수 실행 (여러개 가능)

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
      {/* <h1 className={styles.title}>{counter}</h1> */}
      {/* <Button text={"Continue"} /> */}
    </div>
  );
}

export default App;
