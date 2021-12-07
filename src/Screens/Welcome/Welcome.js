import "./Welcome.css";
import User from "../../User";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import UsernameIcon from "../../Utils/Icons/UsernameIcon";
import PasswordIcon from "../../Utils/Icons/PasswordIcon";
import RepasswordIcon from "../../Utils/Icons/RepasswordIcon";

let users = [];

const Welcome = () => {
  const nav = useNavigate();
  const [uName, setUName] = useState("");
  const [pass, setPass] = useState("");
  const [correct, setCorrect] = useState(true);
  const [flipped, setFlipped] = useState(false);
  const [uNameR, setUNameR] = useState("");
  const [passR, setPassR] = useState("");
  const [repassR, setRepassR] = useState("");
  useEffect(() => {
    if (uNameR !== "" && passR !== "") {
      if (passR === repassR) {
        document.getElementsByClassName("rx")[0].style.opacity = "0";
        document.getElementsByClassName("rc")[0].style.opacity = "1";
        document.getElementsByClassName("r-icon")[0].style.opacity = "0";
      } else {
        document.getElementsByClassName("rc")[0].style.opacity = "0";
        document.getElementsByClassName("rx")[0].style.opacity = "1";
        document.getElementsByClassName("r-icon")[0].style.opacity = "1";
      }
    }
  }, [repassR, passR, uNameR]);
  function submitForm(e) {
    e.preventDefault();
    if (uName === "") {
      document.getElementsByClassName("u-icon")[0].style.opacity = "1";
      setTimeout(() => {
        document.getElementsByClassName("u-icon")[0].style.opacity = "0";
      }, 2000);
    }
    if (pass === "") {
      document.getElementsByClassName("p-icon")[0].style.opacity = "1";
      setTimeout(() => {
        document.getElementsByClassName("p-icon")[0].style.opacity = "0";
      }, 2000);
    }
    if (uName !== "" && pass !== "") {
      for (let i = 0; i < users.length; i++) {
        const u = users[i];
        if (uName === u.username && pass === u.password) {
          nav("/Home/" + u.id);
          return;
        }
      }
      setCorrect(false);
    }
  }
  function submitRegister(e) {
    e.preventDefault();
    if (uNameR === "") {
      document.getElementsByClassName("u-icon")[1].style.opacity = "1";
      setTimeout(() => {
        document.getElementsByClassName("u-icon")[1].style.opacity = "0";
      }, 2000);
    }
    if (passR === "") {
      document.getElementsByClassName("p-icon")[1].style.opacity = "1";
      setTimeout(() => {
        document.getElementsByClassName("p-icon")[1].style.opacity = "0";
      }, 2000);
    }
    if (uNameR !== "" && passR !== "") {
      if (passR === repassR) {
        let u = new User(users.length + 1, uNameR, uNameR, passR);
        users.push(u);
        document.querySelectorAll("form")[1].reset();
        document.querySelector(".popup").style.transform = "translateY(0px)";
        setTimeout(() => {
          document.querySelector(".popup").style.transform = "translateY(50px)";
        }, 3000);
        setFlipped(false);
        document.getElementsByClassName("rx")[0].style.opacity = "0";
        document.getElementsByClassName("rc")[0].style.opacity = "1";
        document.getElementsByClassName("r-icon")[0].style.opacity = "0";
      } else {
        document.getElementsByClassName("rx")[0].style.opacity = "1";
        document.getElementsByClassName("rc")[0].style.opacity = "0";
        document.getElementsByClassName("r-icon")[0].style.opacity = "1";
      }
    }
  }
  return (
    <div className="welcome-container">
      <div className="flip-container">
        <div
          className="flip-card"
          style={
            flipped
              ? { transform: "rotateY(180deg)" }
              : { transform: "rotateY(0deg)" }
          }
        >
          <div className="front">
            <form onSubmit={submitForm} noValidate>
              <input
                type="text"
                required
                onChange={(e) => setUName(e.target.value)}
                disabled={flipped ? "disabled" : ""}
              />
              <div className="uname">Username</div>
              <div className="ux">
                <CloseIcon style={{ height: "20px", width: "20px" }} />
              </div>
              <div className="uc">
                <CheckIcon style={{ height: "20px", width: "20px" }} />
              </div>
              <div className="u-icon">
                <UsernameIcon />
              </div>
              <input
                type="password"
                required
                onChange={(e) => setPass(e.target.value)}
                disabled={flipped ? "disabled" : ""}
              />
              <div className="pass">Password</div>
              <div className="sx">
                <CloseIcon style={{ height: "20px", width: "20px" }} />
              </div>
              <div className="sc">
                <CheckIcon style={{ height: "20px", width: "20px" }} />
              </div>
              <div className="p-icon">
                <PasswordIcon />
              </div>
              <input
                type="submit"
                value="Sign in"
                disabled={flipped ? "disabled" : ""}
              />
              <input
                type="button"
                value="Register"
                className="register"
                onClick={() => setFlipped(true)}
                disabled={flipped ? "disabled" : ""}
              />
              <div
                className="incorrect"
                style={
                  correct
                    ? { color: "transparent" }
                    : { color: "rgba(161, 24, 0, 0.664)" }
                }
              >
                Username or password incorrect!
              </div>
            </form>
          </div>
          <div className="back">
            <form onSubmit={submitRegister} noValidate>
              <div className="arrow">
                <ArrowBackIcon onClick={() => setFlipped(false)} />
              </div>
              <input
                type="text"
                required
                onChange={(e) => setUNameR(e.target.value)}
                disabled={!flipped ? "disabled" : ""}
              />
              <div className="uname">Username</div>
              <div className="ux">
                <CloseIcon style={{ height: "20px", width: "20px" }} />
              </div>
              <div className="uc">
                <CheckIcon style={{ height: "20px", width: "20px" }} />
              </div>
              <div className="u-icon">
                <UsernameIcon />
              </div>
              <input
                type="password"
                required
                onChange={(e) => setPassR(e.target.value)}
                disabled={!flipped ? "disabled" : ""}
              />
              <div className="pass">Password</div>
              <div className="sx">
                <CloseIcon style={{ height: "20px", width: "20px" }} />
              </div>
              <div className="sc">
                <CheckIcon style={{ height: "20px", width: "20px" }} />
              </div>
              <div className="p-icon">
                <PasswordIcon />
              </div>
              <input
                type="password"
                required
                onChange={(e) => setRepassR(e.target.value)}
                disabled={!flipped ? "disabled" : ""}
              />
              <div className="re-pass">Re-type Password</div>
              <div className="rx">
                <CloseIcon style={{ height: "20px", width: "20px" }} />
              </div>
              <div className="rc">
                <CheckIcon style={{ height: "20px", width: "20px" }} />
              </div>
              <div className="r-icon">
                <RepasswordIcon />
              </div>
              <input
                type="submit"
                value="Register"
                disabled={!flipped ? "disabled" : ""}
              />
            </form>
          </div>
        </div>
      </div>
      <div className="popup">User created</div>
    </div>
  );
};

export default Welcome;
