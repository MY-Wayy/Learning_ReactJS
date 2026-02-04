import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

function MovieApp() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {/** :id = id 를 변수처럼 사용 */}
        <Route path={"/movie/:id"} element={<Detail />} />
        <Route path={"/"} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default MovieApp;
