import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import githubLogo from "./images/github.png";

function Footer() {
  return (
    <>
      <div className="bg-color text-dark p-3 ">
        <p className="text-center mt-4">
          Developed By &copy; 2023 ||
          <Link to="https://github.com/yogita-s-24" className="git-profile">
            {" "}
            Yogita Shete{" "}
            <Link to="https://github.com/yogita-s-24/quicklinker">
              <img src={githubLogo} className="github-image" />
            </Link>
          </Link>
        </p>
      </div>
    </>
  );
}

export default Footer;
