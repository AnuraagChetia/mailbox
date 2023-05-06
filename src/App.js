import React from "react";
import LoginPage from "./Pages/LoginPage";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<LoginPage></LoginPage>}></Route>
        </Routes>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
