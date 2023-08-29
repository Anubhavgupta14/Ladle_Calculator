"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
import Navbar from "../navbar/page";
import Footer from "../Footer/page";
import Link from "next/link";

const LoginPage = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [timer, setTimer] = useState(null);
  const [mail, setmail] = useState({ email: "" });
  const [name,setname]  = useState("")
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [toggle_form,settoggle_form] = useState(true);
  const [newpassword,setnewpassword] = useState("");
  const [cnfpassword,setcnfpassword] = useState("");
  const [matchpass,setmatchpass] = useState(true);

  const handleLogin = () => {
    if (isLoggingIn) return;

    setIsLoggingIn(true);
    loginStateToggle();

    clearTimeout(timer);
    setTimer(setTimeout(reset, 1500));
  };

  const loginStateToggle = () => {
    const loginBtn = document.querySelector("[data-login]");
    if (loginBtn) {
      loginBtn.disabled = isLoggingIn;
      loginBtn.setAttribute("data-login", isLoggingIn);
    }
  };

  const reset = () => {
    setIsLoggingIn(false);
    loginStateToggle();
    const form = document.querySelector(".login__form");
    form.reset();
  };

  const mail_check = (e) => {

    const value = e.target.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setIsEmailValid(isValidEmail || value === ""); // Update email validity
    setmail({ email: value }); // Update email value in the state
    // console.log(isEmailValid);
  };

  const checkpass =(e)=>{
    setcnfpassword(e.target.value)
    if (newpassword !== e.target.value) {
        setmatchpass(false);
      } else {
        setmatchpass(true);
      }

  };



  const forget=()=>{
    settoggle_form(!toggle_form);
  }

  useEffect(() => {
    // Initialize on component mount
    const year = document.querySelector("[data-year]");
    if (year) year.innerHTML = new Date().getFullYear();

    const form = document.querySelector(".login__form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      handleLogin();
    });

    const loginBtn = document.querySelector("[data-login]");
    loginBtn.addEventListener("click", () => {
      handleLogin();
    });

    return () => {
      // Cleanup on component unmount
      form.removeEventListener("submit", handleLogin);
      loginBtn.removeEventListener("click", handleLogin);
      clearTimeout(timer);
    };
  }, [timer]);

  return (
    <div>
      <Navbar />
      <div className="body_login">
        <main className="login">
          <div className="login__col">
            <form className="login__form" method="post" action="">
              <div className="login__form-wrapper">
                <h1 className="h1">Register Here</h1>
                <p>Sign up to your account.</p>
                <div className="login__field-group">
                  <label className="login__label" htmlFor="user-name">
                    Name
                  </label>
                  <input
                    className="login__field"
                    id="user-name"
                    type="text"
                    name="user_name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="login__field-group">
                  <label className="login__label" htmlFor="user-email">
                    Email
                  </label>
                  <input
                    className="login__field"
                    id="user-email"
                    type="text"
                    name="user_email"
                    value={mail.email}
                    onChange={mail_check}
                  />
                  <p className={isEmailValid ? "error hide" : "error"}>
                    {isEmailValid ? "ok" : "Error: Invalid Email"}
                  </p>
                </div>
                <div className="login__field-group2">
                  <label className="login__label" htmlFor="pass">
                    New Password
                  </label>
                  <input
                    className="login__field"
                    id="pass"
                    type="text"
                    name="pass"
                    value={newpassword}
                    onChange={(e) => setnewpassword(e.target.value)}
                  />
                </div>
                <div className="login__field-group">
                  <label className="login__label" htmlFor="pass">
                    Confirm Password
                  </label>
                  <input
                    className="login__field"
                    id="pass"
                    type="password"
                    name="pass"
                    value={cnfpassword}
                    onChange={checkpass}
                  />
                  <p className={matchpass?"p error2":"p"}>{matchpass?"ok":"error: both password shoule be same"}</p>
                </div>
                <div className="login__field-group login__field-group--horz">
                </div>
                <button className="login__btn" type="button" data-login="false">
                  <span className="login__btn-label">Sign up</span>
                  <span className="login__btn-spinner"></span>
                </button>
                <p className="login__sign-up">
                  Already have a account?{" "}
                  <Link className="a forget" href="/components/LoginPage">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
            <footer className="login__copyright">
              <p>
                © <span data-year>2023</span> Dsign Engg. All rights reserved.
              </p>
            </footer>
          </div>
          <div className="login__col">
            <div className="login__bg-img"></div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
