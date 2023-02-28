import React from "react";
import "./Login.css";
import MainLogo from "../../../../Images/MainLogo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import LoginForm from "../../../../sections/auth/LoginForm";

function Login() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (isLoggedIn) {
    return <Navigate to="/app" />;
  }

  return (
    <section>
      <div className="AgentLoginMain">
        <div className="LeftAgentLogin">
          <div className="TopAgentLogin">
            <img src={MainLogo} alt="" />
          </div>

          <div className="AgentLogIn">
            <div className="LogHeading">
              <h1>Agent Login</h1>
              <h6>Welcome back! Please enter your details.</h6>
            </div>
            <div className="LogInForm">
              <LoginForm />
            </div>
          </div>
          <div className="FooterAgentLogin">
            <h6>© Reazy 2022</h6>
          </div>
        </div>

        <div className="RightAgentLogin">
          {/* <div className="AgentLogImage">
                    <img src={LogImg} alt="" /> 
                </div> */}
          <Swiper
            className="AgentSwiper"
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <AgentSliders />
            </SwiperSlide>
            <SwiperSlide>
              <AgentSliders />
            </SwiperSlide>
            <SwiperSlide>
              <AgentSliders />
            </SwiperSlide>
            <SwiperSlide>
              <AgentSliders />
            </SwiperSlide>
            <SwiperSlide>
              <AgentSliders />
            </SwiperSlide>
            <SwiperSlide>
              <AgentSliders />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Login;

function AgentSliders() {
  return (
    <div className="AgentSliders">
      <div className="AgentSlidersData">
        <div className="k"></div>
        <div className="AgentSwipHeading">
          <h2>
            “I was amazed with how easy it was to find a tenant for my listing.”
          </h2>
        </div>
        <div className="agentFooterHead">
          <h3>Olivia Rhye</h3>
          <p>Property Manager</p>
          <p>Ray White</p>
        </div>
      </div>
    </div>
  );
}
