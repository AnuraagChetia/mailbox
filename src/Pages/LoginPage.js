import React from "react";
import Auth from "../Components/Authentication/Auth";
import bgImg from "../Assets/loginBackground.jpg";
const LoginPage = (props) => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})`, height: "100vh" }}>
      <Auth></Auth>
    </div>
  );
};
export default LoginPage;
