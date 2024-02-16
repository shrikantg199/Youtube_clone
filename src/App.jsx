import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Watch from "./components/Watch";
import Body from "./components/Body";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex w-full mt-[75px]">
        <Router>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/watch" element={<Watch />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
