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
          <Route path="/img" element={<Img />} />
          <Route path="/planet" element={<Planet />} />
          <Route path="/Jupi" element={<Jupi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
