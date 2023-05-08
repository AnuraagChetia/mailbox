import React from "react";
import LoginPage from "./Pages/LoginPage";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import { BrowserRouter } from "react-router-dom";
import InboxPage from "./Pages/InboxPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
        </Routes>
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Home />
                <InboxPage />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
