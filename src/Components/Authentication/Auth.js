import React, { useRef, useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Input from "../UI/Input";
import { authActions } from "../../Store/auth-reducer";
const Login = (props) => {
  const dispatch = useDispatch();
  const [isLogin, setisLogin] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const [forgetMode, setForgetMode] = useState(false);

  const switchModeHandler = () => {
    setisLogin((prevState) => !prevState);
    setForgetMode(false);
  };
  const switchToForgetPassword = () => {
    setisLogin((prevState) => !prevState);
    setForgetMode((prevState) => !prevState);
  };

  const forgetPasswordHandler = async () => {
    const enteredEmail = emailInputRef.current.value;
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyD6M77g5hyGAAfUwgTZiK0AFwn3M1o5cpc",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: enteredEmail,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (res.ok) {
      alert("Check your mail");
    }
  };
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;
      let enteredConfirmPassword = "";
      if (!isLogin) {
        enteredConfirmPassword = confirmPasswordInputRef.current.value;
      }

      let url;

      if (isLogin) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD6M77g5hyGAAfUwgTZiK0AFwn3M1o5cpc";
      } else if (
        enteredConfirmPassword &&
        enteredConfirmPassword === enteredPassword
      ) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD6M77g5hyGAAfUwgTZiK0AFwn3M1o5cpc";
      } else {
        alert("Password does not match");
      }

      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data;

      if (res.ok) {
        data = await res.json();
        localStorage.setItem("email", enteredEmail);
      } else {
        let errorMessage = "Authentication failed!";
        throw new Error(errorMessage);
      }
      const token = data.idToken;

      dispatch(authActions.login(token));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className=" h-100 d-flex align-items-center justify-content-center">
      <Form
        className="rounded p-4 p-sm-3 border border-primary w-sm-25 bg-light"
        onSubmit={formSubmitHandler}
      >
        <FormGroup>
          {!forgetMode && (
            <>
              <h1>{isLogin ? "Login" : "Signup"}</h1>
              <Input
                label="Email address"
                type="email"
                placeholder="name@example.com"
                text="We will never share your email with anyone else."
                ref={emailInputRef}
              ></Input>

              <Input
                label="Password"
                type="password"
                placeholder="Password"
                ref={passwordInputRef}
              ></Input>
              {!isLogin && (
                <Input
                  label="Confirm Password"
                  type="password"
                  placeholder="Password"
                  ref={confirmPasswordInputRef}
                ></Input>
              )}
              <Button
                variant="primary"
                type="submit"
                className="col-md-12 text-center"
              >
                {isLogin ? "Login" : "Signup"}
              </Button>
              {isLogin && (
                <Button
                  type="button"
                  variant="danger"
                  className="col-md-12 text-center mt-2"
                  onClick={switchToForgetPassword}
                >
                  Forget Password?
                </Button>
              )}
            </>
          )}

          {forgetMode && (
            <>
              <h3>Enter the email with which you have registered</h3>
              <Input
                label="Enter email"
                type="email"
                placeholder="name@example.com"
                ref={emailInputRef}
              />
              <Button
                variant="secondary"
                type="button"
                className="col-md-12 text-center"
                onClick={forgetPasswordHandler}
              >
                Send link
              </Button>
            </>
          )}

          <Button
            className="col-md-12 text-center mt-2"
            variant="warning"
            type="button"
            onClick={switchModeHandler}
          >
            {isLogin ? "Create new account" : " Have an account? Login"}
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};
export default Login;
