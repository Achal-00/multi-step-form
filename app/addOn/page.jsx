"use client";
import React from "react";
import Info from "@/components/Info";
import { useContext, useEffect, useState } from "react";
import { store } from "@/components/store";

const page = () => {
  const { state, dispatch } = useContext(store);
  const [temp, setTemp] = useState(false);
  const [yearly, setYearly] = useState(false);

  useEffect(() => {
    if (
      state.planCost === 90 ||
      state.planCost === 120 ||
      state.planCost === 150
    ) {
      setYearly(true);
    }
  }, []);

  useEffect(() => {
    if (state.service === true) {
      document.querySelector(".addon-one input").checked = true;
      document.querySelector(".addon-one").style.border =
        "thin solid var(--marine-blue)";
      document.querySelector(".addon-one").style.background = "var(--magnolia)";
    }
    if (state.storage === true) {
      document.querySelector(".addon-two input").checked = true;
      document.querySelector(".addon-two").style.border =
        "thin solid var(--marine-blue)";
      document.querySelector(".addon-two").style.background = "var(--magnolia)";
    }
    if (state.profile === true) {
      document.querySelector(".addon-three input").checked = true;
      document.querySelector(".addon-three").style.border =
        "thin solid var(--marine-blue)";
      document.querySelector(".addon-three").style.background =
        "var(--magnolia)";
    }
  }, []);

  useEffect(() => {
    if (document.querySelector(".addon-one input").checked) {
      document.querySelector(".addon-one").style.border =
        "thin solid var(--marine-blue)";
      document.querySelector(".addon-one").style.background = "var(--magnolia)";
      dispatch({ type: "CHANGE_SERVICE", payload: true });
    } else {
      document.querySelector(".addon-one").style.border =
        "thin solid var(--light-grey)";
      document.querySelector(".addon-one").style.background = "var(--white)";
      dispatch({ type: "CHANGE_SERVICE", payload: false });
    }
    if (document.querySelector(".addon-two input").checked) {
      document.querySelector(".addon-two").style.border =
        "thin solid var(--marine-blue)";
      document.querySelector(".addon-two").style.background = "var(--magnolia)";
      dispatch({ type: "CHANGE_STORAGE", payload: true });
    } else {
      document.querySelector(".addon-two").style.border =
        "thin solid var(--light-grey)";
      document.querySelector(".addon-two").style.background = "var(--white)";
      dispatch({ type: "CHANGE_STORAGE", payload: false });
    }
    if (document.querySelector(".addon-three input").checked) {
      document.querySelector(".addon-three").style.border =
        "thin solid var(--marine-blue)";
      document.querySelector(".addon-three").style.background =
        "var(--magnolia)";
      dispatch({ type: "CHANGE_PROFILE", payload: true });
    } else {
      document.querySelector(".addon-three").style.border =
        "thin solid var(--light-grey)";
      document.querySelector(".addon-three").style.background = "var(--white)";
      dispatch({ type: "CHANGE_PROFILE", payload: false });
    }
  }, [temp]);

  return (
    <div className="home">
      <div className="wrapper">
        <Info
          heading="Pick add-ons"
          content="Add-ons help enhance your gaming experience."
        />
        <div className="page-three-content">
          <div className="addon-one">
            <div className="addon-input-container">
              <input type="checkbox" onClick={() => setTemp((prev) => !prev)} />
            </div>
            <div className="addon-details">
              <h3>Online service</h3>
              <h5>Access to multiplayer games</h5>
            </div>
            {yearly ? <p>+$10/yr</p> : <p>+$1/mo</p>}
          </div>
          <div className="addon-two">
            <div className="addon-input-container">
              <input type="checkbox" onClick={() => setTemp((prev) => !prev)} />
            </div>
            <div className="addon-details">
              <h3>Larger storage</h3>
              <h5>Extra 1TB of cloud save</h5>
            </div>
            {yearly ? <p>+$20/yr</p> : <p>+$2/mo</p>}
          </div>
          <div className="addon-three">
            <div className="addon-input-container">
              <input type="checkbox" onClick={() => setTemp((prev) => !prev)} />
            </div>
            <div className="addon-details">
              <h3>Customizable profile</h3>
              <h5>Custom theme on your profile</h5>
            </div>
            {yearly ? <p>+$20/yr</p> : <p>+$2/mo</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
