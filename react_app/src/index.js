import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App2 from "./Ch6_4_App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App2 />);

//root.render() 안에
//chapter 6.3 까지는 <App />
//chapter 6.4 는 <App2 />
