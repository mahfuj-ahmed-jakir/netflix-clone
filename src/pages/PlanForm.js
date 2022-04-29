import React from "react";
import "./PlanForm.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { TiTick } from "react-icons/ti";
import { FaMobileAlt } from "react-icons/fa";
import { BsTabletLandscape, BsTv } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const PlanForm = () => {
  const navigate = useNavigate();

  let handleNext = () => {
    navigate("/payment");
  };

  return (
    <>
      <Header />
      <section className="reg_plan_step">
        <div className="container">
          <div className="reg_plan_con">
            <p>
              STEP 1 OF <strong>3</strong>
            </p>
            <h5>Choose the plan that’s right for you</h5>
            <h6>
              <TiTick className="tick_text" /> Watch all you want. Ad-free.
            </h6>
            <h6>
              <TiTick className="tick_text" /> Recommendations just for you.
            </h6>
            <h6>
              <TiTick className="tick_text" /> Change or cancel your plan anytime.
            </h6>
            <div className="plan_con">
              <div className="plan_con_box"></div>
              <div className="plan_con_box_sm" style={{ background: "crimson" }}>
                Mobile
              </div>
              <div className="plan_con_box_sm">Basic</div>
              <div className="plan_con_box_sm">Standard</div>
              <div className="plan_con_box_sm">Premium</div>

              <div className="plan_con_box plan_price plan_price_box">Monthly price</div>
              <div className="plan_con_box_sm plan_price">USD 3.99</div>
              <div className="plan_con_box_sm plan_price">USD 7.99</div>
              <div className="plan_con_box_sm plan_price">USD 9.99</div>
              <div className="plan_con_box_sm plan_price">USD 11.99</div>
              <div className="plan_line"></div>
              <div className="plan_con_box plan_price plan_price_box">Video quality</div>
              <div className="plan_con_box_sm plan_price">Good</div>
              <div className="plan_con_box_sm plan_price">Good</div>
              <div className="plan_con_box_sm plan_price">Better</div>
              <div className="plan_con_box_sm plan_price">Best</div>
              <div className="plan_line"></div>
              <div className="plan_con_box plan_price plan_price_box">Resolution</div>
              <div className="plan_con_box_sm plan_price">480p</div>
              <div className="plan_con_box_sm plan_price">480p</div>
              <div className="plan_con_box_sm plan_price">1080p</div>
              <div className="plan_con_box_sm plan_price">4K+HDR</div>
              <div className="plan_line"></div>
              <div className="plan_con_box plan_price plan_price_box">Devices you can use to watch</div>
              <div className="plan_con_box_sm plan_price">
                <FaMobileAlt />
              </div>
              <div className="plan_con_box_sm plan_price">
                <FaMobileAlt />
              </div>
              <div className="plan_con_box_sm plan_price">
                <FaMobileAlt />
              </div>
              <div className="plan_con_box_sm plan_price">
                <FaMobileAlt />
              </div>
              <div className="plan_con_box plan_price plan_price_box"></div>
              <div className="plan_con_box_sm plan_price">
                <BsTabletLandscape />
              </div>
              <div className="plan_con_box_sm plan_price">
                <BsTabletLandscape />
              </div>
              <div className="plan_con_box_sm plan_price">
                <BsTabletLandscape />
              </div>
              <div className="plan_con_box_sm plan_price">
                <BsTabletLandscape />
              </div>
              <div className="plan_con_box plan_price plan_price_box"></div>
              <div className="plan_con_box_sm plan_price"></div>
              <div className="plan_con_box_sm plan_price">
                <RiComputerLine />
              </div>
              <div className="plan_con_box_sm plan_price">
                <RiComputerLine />
              </div>
              <div className="plan_con_box_sm plan_price">
                <RiComputerLine />
              </div>
              <div className="plan_con_box plan_price plan_price_box"></div>
              <div className="plan_con_box_sm plan_price"></div>
              <div className="plan_con_box_sm plan_price">
                <BsTv />
              </div>
              <div className="plan_con_box_sm plan_price">
                <BsTv />
              </div>
              <div className="plan_con_box_sm plan_price">
                <BsTv />
              </div>
            </div>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PlanForm;
