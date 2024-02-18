import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Watch from "./components/Watch";
import Body from "./components/Body";
import Shorts from "./components/Shorts";
function App() {
  return (
    <>
      <Navbar />
      <div className=" w-full mt-[75px]">
        <Router>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/shorts" element={<Shorts />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
