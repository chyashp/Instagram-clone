import React from "react";
import "./Authentication.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from "react";
import { SpaRounded } from "@mui/icons-material";

function Authentication() {
  const [active, setActive] = useState("login ");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className="authentication">
      <div className="auth__left">
        <img src="http://i.imgur.com/P3Vm1Kq.png" alt="" />
      </div>
      <div className="auth__right">
        {active === "login" ? <Login /> : <SignUp />}
        <div className="auth__more">
          <span>
            {active === "login" ? (
              <>
                {" "}
                Don't have an account?{" "}
                <button onClick={handleChange}>Sign Up</button>
              </>
            ) : (
              <>
                Have an account? <button onClick={handleChange}>Log in</button>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
