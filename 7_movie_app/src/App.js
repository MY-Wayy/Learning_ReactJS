import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo == "") {
      return;
    }
    setToDo("");
    //toDos.push(추가할 것) <- 이렇게 절대 쓰지 않음.
    setToDos((currentArray) => [toDo, ...currentArray]);
    //`currentArray =>` == `function(currentArray){} 히히`
    //`...Array` : 해당 배열의 요소 전부 포함
  };
  console.log(toDos);
  return (
    <div>
      <h1>My Reminder ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        {/*form 태그는 submit 이벤트를 가지고 있음*/}
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {/* .map(함수) : 해당 배열 모든 요소에 함수 적용 
        , 새 배열 만들어 줌*/}
      </ul>
    </div>
  );
}

export default App;
