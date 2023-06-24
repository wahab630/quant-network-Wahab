import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Base from "./components/layout/Base";
import Home from "./pages/Home";
import "./App.scss";

function App() {
  AOS.init({
    //initialize
  });
  return (
    <>
      <Router>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />}></Route>
          </Routes>
        </Base>
      </Router>
    </>
  );
}

export default App;
