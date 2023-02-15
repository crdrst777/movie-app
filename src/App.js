import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Detail />} />
        {/* react router한테 여기 오는 id값이 뭔지 알고싶다고 말하고 있는거임 */}
        {/* id가 아닌 다른 변수명을 설정해줄수도 있음 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
