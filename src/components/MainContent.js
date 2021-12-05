import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";

function MainContent() {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/item1" element={<Item1/>} />
        <Route path="/item2" element={<Item2/>} />
        <Route path="/item3" element={<Item3/>} />
        <Route path="/" element={Home} />
      </Routes>
    </div>
  );
}

export default MainContent;
