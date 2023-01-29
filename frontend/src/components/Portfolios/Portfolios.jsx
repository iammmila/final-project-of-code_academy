import React from "react";
import "./style.scss";
function Portfolios() {
  return (
    <div className="portfolios_section">
      <div className="container">
        <div className="wrapper_portfolios">
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
                background: "red",
              }}
            />
            <h3>OUR PORTFOLIOS OF CASES</h3>
          </div>
          <h1>Featured Case Study</h1>
          <ul>
            <li>
              <img
                src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services1.png"
                alt="portfolio1"
              />
              <div className="info">
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
                      background: "red",
                    }}
                  />
                  <h3>Strategy planing</h3>
                </div>
                <p>Within the construction industry as their overdraft</p>
              </div>
            </li>
            <li>
              <img
                src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services2.png"
                alt="portfolio1"
              />
              <div className="info">
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
                      background: "red",
                    }}
                  />
                  <h3>Strategy planing</h3>
                </div>
                <p>Within the construction industry as their overdraft</p>
              </div>
            </li>
            <li>
              <img
                src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services3.png"
                alt="portfolio1"
              />
              <div className="info">
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
                      background: "red",
                    }}
                  />
                  <h3>Strategy planing</h3>
                </div>
                <p>Within the construction industry as their overdraft</p>
              </div>
            </li>
            <li>
              <img
                src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services4.png"
                alt="portfolio1"
              />
              <div className="info">
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
                      background: "red",
                    }}
                  />
                  <h3>Strategy planing</h3>
                </div>
                <p>Within the construction industry as their overdraft</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Portfolios;
