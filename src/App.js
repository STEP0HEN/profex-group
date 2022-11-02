import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./client/components/Home/Home";
import Navbar from "./client/components/Navbar/Navbar"

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Navbar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
