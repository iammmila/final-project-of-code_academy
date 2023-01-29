import React from "react";
import "./style.scss";
function ServicesInformation() {
  return (
    <section className="our_best_services">
      <div className="container">
        <div className="services_wrapper">
          <div>
            <img
              src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/about.png"
              alt="about"
            />
          </div>
          <div className="information">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <hr
                style={{
                  width: "10%",
                  height: "2px",
                  border: "none",
                  background: "white",
                }}
              />
              <h3>OUR TOP SERVICES</h3>
            </div>
            <h1>Our Best Services</h1>
            <p>
              Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess
              cillum dolore egru lofrre dsu quality mollit anim laborumuis au
              dolor in voluptate velit cillu.
            </p>
            <span>
              Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re
              voluptate velit esscillumlore eu quife nrulla parihatur.
              Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg
              dhjinulpadeserunt moll.
            </span>
            <button>more about us</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesInformation;
