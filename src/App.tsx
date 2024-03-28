import HomePage from "./HomePgCOmponents/HomePage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Showcase from "./ShowCaseComponents/Showcase";
import Navbar from "./Navbar/Navbar";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/showcase" element={<Showcase />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
