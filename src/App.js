import React from "react";
import LoginPage from "./Pages/LoginPage";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import { BrowserRouter } from "react-router-dom";
import InboxPage from "./Pages/InboxPage";
import Sidebar from "../src/Components/UI/SideBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/inbox" element={<InboxPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
