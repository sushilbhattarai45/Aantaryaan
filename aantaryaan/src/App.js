import logo from "./logo.svg";
import "./App.css";
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Saturn from "./pages/saturn";
import Img from "./pages/img";
import MyBook from "./pages/flipbook";
import Jupi from "./pages/Jupi";
import Planet from "./pages/Planet";
function App() {
  return (
    <Router>
      {" "}
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/saturn" element={<Saturn />} />
          <Route path="/universe" element={<Img />} />
          <Route path="/planet" element={<Planet />} />
          <Route path="/Jupi" element={<Jupi />} />
          <Route path="/flip" element={<MyBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
