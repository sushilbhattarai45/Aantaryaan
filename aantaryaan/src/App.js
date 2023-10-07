import logo from "./logo.svg";
import "./App.css";
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Saturn from "./pages/saturn";
import Img from "./pages/img";
function App() {
  return (
    <Router>
      {" "}
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/saturn" element={<Saturn />} />
          <Route path="/img" element={<Img />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;