import "./App.css";

import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route
          path="/home"
          element={
            <>
              <Manager></Manager>
            </>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
