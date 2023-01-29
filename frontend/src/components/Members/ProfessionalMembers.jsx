import React from "react";
import "./style.scss";
function ProfessionalMembers() {
  return (
    <section className="professionals">
      <div className="container">
        <div className="section_wrapper">
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
            <h3>OUR PROFESSIONAL MEMBERS</h3>
          </div>
          <h1>Our Team Mambers</h1>
          <ul>
            <li>
              <img
                src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png"
                alt="member"
              />
              <div className="member">
                <span>Ethan Welch</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                    width: "100%",
                  }}
                >
                  <hr
                    style={{
                      width: "15%",
                      height: "2px",
                      border: "none",
                      background: "red",
                    }}
                  />
                  <h6>UX Designer</h6>
                </div>
              </div>
            </li>
            <li>
              <img
                src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team3.png"
                alt="member"
              />
              <div className="member">
                <span>Ethan Welch</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                    width: "100%",
                  }}
                >
                  <hr
                    style={{
                      width: "15%",
                      height: "2px",
                      border: "none",
                      background: "red",
                    }}
                  />
                  <h6>UX Designer</h6>
                </div>
              </div>
            </li>
            <li>
              <img
                src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team1.png"
                alt="member"
              />
              <div className="member">
                <span>Ethan Welch</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                    width: "100%",
                  }}
                >
                  <hr
                    style={{
                      width: "15%",
                      height: "2px",
                      border: "none",
                      background: "red",
                    }}
                  />
                  <h6>UX Designer</h6>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalMembers;
