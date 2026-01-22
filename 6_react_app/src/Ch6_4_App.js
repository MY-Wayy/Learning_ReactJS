//Clean Function
import { useState, useEffect } from "react";

function Hello() {
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);
  // 위 코드는 아래 코드와 역할 같음
  // function byeFn() {
  //   console.log("destroyed :(");
  // }
  // function hiFn() {
  //   console.log("created :)");
  //   return byeFn;
  // }
  // useEffect(hiFn, []);
  // useEffect 의 return: 은 그 컴포넌트가 없어질 때 동작

  return <h1>Hello</h1>;
}
// 원래는 함수가 보여질 때만 렌더링 (console.log 보여짐)

function App2() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App2;
