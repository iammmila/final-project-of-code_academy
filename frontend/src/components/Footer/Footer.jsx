import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <p>
            Copyright ©2023 All rights reserved | This template is made with by{" "}
            <Link to="/">Colorlib</Link>
          </p>
          <ul>
            <li>
              <BsTwitter style={{ fontSize: "20px" }} />
            </li>
            <li>
              <BsFacebook style={{ fontSize: "20px" }} />
            </li>
            <li>
              <TfiWorld style={{ fontSize: "20px" }} />
            </li>
            <li>
              <BsInstagram style={{ fontSize: "20px" }} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
