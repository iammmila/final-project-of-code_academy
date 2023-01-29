import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.scss";

// import required modules
import { Navigation } from "swiper";
function HeroSection() {
  return (
    <section className="hero_section">
      <div className="hero_section_wrapper">
        <Swiper
          style={{ width: "100%" }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide style={{ width: "50%" }} className="slide">
            <div className="container">
              <div className="sliderContent">
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
                  <h3>committed to success</h3>
                </div>
                <div style={{ width: "100%" }} className="wrapper_content">
                  <h1>we help to grow your bussiness</h1>
                  <p>
                    Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr
                    indd re voluptate Mollit anim laborum.Dvcuis aute serunt
                    iruxvfg dhjkolohr indd re voluptate
                  </p>
                </div>
                <button>our services</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: "50%" }} className="slide">
            <div className="container">
              <div className="sliderContent">
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
                  <h3>committed to success</h3>
                </div>
                <div style={{ width: "100%" }} className="wrapper_content">
                  <h1>we help to grow your bussiness</h1>
                  <p>
                    Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr
                    indd re voluptate Mollit anim laborum.Dvcuis aute serunt
                    iruxvfg dhjkolohr indd re voluptate
                  </p>
                </div>
                <button>our services</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: "50%" }} className="slide">
            <div className="container">
              <div className="sliderContent">
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
                  <h3>committed to success</h3>
                </div>
                <div style={{ width: "100%" }} className="wrapper_content">
                  <h1>we help to grow your bussiness</h1>
                  <p>
                    Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr
                    indd re voluptate Mollit anim laborum.Dvcuis aute serunt
                    iruxvfg dhjkolohr indd re voluptate
                  </p>
                </div>
                <button>our services</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default HeroSection;
