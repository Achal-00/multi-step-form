"use client";
import Info from "@/components/Info";
import { useContext, useEffect } from "react";
import { store } from "@/components/store";

const page = () => {
  const { state, dispatch } = useContext(store);

  useEffect(() => {
    if (state.pageNo === 2) {
      if (state.plan !== "") {
        switch (state.plan) {
          case "Arcade (Yearly)":
            document.querySelector(".option-1").style.border =
              "thin solid var(--marine-blue)";
            document.querySelector(".switch input").checked = true;
            selectPlan();
            break;
          case "Advanced (Yearly)":
            document.querySelector(".option-2").style.border =
              "thin solid var(--marine-blue)";
            document.querySelector(".switch input").checked = true;
            selectPlan();
            break;
          case "Pro (Yearly)":
            document.querySelector(".option-3").style.border =
              "thin solid var(--marine-blue)";
            document.querySelector(".switch input").checked = true;
            selectPlan();
            break;
          case "Arcade (Monthly)":
            document.querySelector(".option-1").style.border =
              "thin solid var(--marine-blue)";
            break;
          case "Advanced (Monthly)":
            document.querySelector(".option-2").style.border =
              "thin solid var(--marine-blue)";
            break;
          case "Pro (Monthly)":
            document.querySelector(".option-3").style.border =
              "thin solid var(--marine-blue)";
            break;
          default:
            break;
        }
      }
    }
  }, []);

  function selectPlan() {
    if (document.querySelector(".switch input").checked) {
      document.querySelectorAll(".plan-details p").forEach((x) => {
        x.style.display = "block";
      });
    } else {
      document.querySelectorAll(".plan-details p").forEach((x) => {
        x.style.display = "none";
      });
    }
    if (document.querySelector(".switch input").checked) {
      document.querySelector(".option-1 h4").textContent = "$90/yr";
      document.querySelector(".option-2 h4").textContent = "$120/yr";
      document.querySelector(".option-3 h4").textContent = "$150/yr";
    } else {
      document.querySelector(".option-1 h4").textContent = "$9/yr";
      document.querySelector(".option-2 h4").textContent = "$12/yr";
      document.querySelector(".option-3 h4").textContent = "$15/yr";
    }
  }

  function arcadeHandler() {
    document.querySelector(".option-1").style.border =
      "thin solid var(--marine-blue)";
    document.querySelectorAll(".option-2, .option-3").forEach((x) => {
      x.style.border = "thin solid var(--light-grey)";
    });
    if (document.querySelector(".switch input").checked) {
      dispatch({ type: "CHANGE_PLAN", payload: "Arcade (Yearly)" });
      dispatch({ type: "CHANGE_PLAN_COST", payload: 90 });
      dispatch({ type: "CHANGE_TIME_PERIOD", payload: "/yr" });
    } else {
      dispatch({ type: "CHANGE_PLAN", payload: "Arcade (Monthly)" });
      dispatch({ type: "CHANGE_PLAN_COST", payload: 9 });
      dispatch({ type: "CHANGE_TIME_PERIOD", payload: "/mo" });
    }
  }

  function advancedHandler() {
    document.querySelector(".option-2").style.border =
      "thin solid var(--marine-blue)";
    document.querySelectorAll(".option-1, .option-3").forEach((x) => {
      x.style.border = "thin solid var(--light-grey)";
    });
    if (document.querySelector(".switch input").checked) {
      dispatch({ type: "CHANGE_PLAN", payload: "Advanced (Yearly)" });
      dispatch({ type: "CHANGE_PLAN_COST", payload: 120 });
      dispatch({ type: "CHANGE_TIME_PERIOD", payload: "/yr" });
    } else {
      dispatch({ type: "CHANGE_PLAN", payload: "Advanced (Monthly)" });
      dispatch({ type: "CHANGE_PLAN_COST", payload: 12 });
      dispatch({ type: "CHANGE_TIME_PERIOD", payload: "/mo" });
    }
  }

  function proHandler() {
    document.querySelector(".option-3").style.border =
      "thin solid var(--marine-blue)";
    document.querySelectorAll(".option-1, .option-2").forEach((x) => {
      x.style.border = "thin solid var(--light-grey)";
    });
    if (document.querySelector(".switch input").checked) {
      dispatch({ type: "CHANGE_PLAN", payload: "Pro (Yearly)" });
      dispatch({ type: "CHANGE_PLAN_COST", payload: 150 });
      dispatch({ type: "CHANGE_TIME_PERIOD", payload: "/yr" });
    } else {
      dispatch({ type: "CHANGE_PLAN", payload: "Pro (Monthly)" });
      dispatch({ type: "CHANGE_PLAN_COST", payload: 15 });
      dispatch({ type: "CHANGE_TIME_PERIOD", payload: "/mo" });
    }
  }

  return (
    <div className="home">
      <div className="wrapper">
        <Info
          heading="Select your plan"
          content="You have the option of monthly or yearly billing."
        />
        <div className="page-two-content">
          <div className="option-1" onClick={arcadeHandler}>
            <div className="plan-image-container">
              <img src="icon-arcade.svg" alt="arcade" />
            </div>
            <div className="plan-details">
              <h3>Arcade</h3>
              <h4>$9/mo</h4>
              <p>2 months free</p>
            </div>
          </div>
          <div className="option-2" onClick={advancedHandler}>
            <div className="plan-image-container">
              <img src="icon-advanced.svg" alt="advanced" />
            </div>
            <div className="plan-details">
              <h3>Advanced</h3>
              <h4>$12/mo</h4>
              <p>2 months free</p>
            </div>
          </div>
          <div className="option-3" onClick={proHandler}>
            <div className="plan-image-container">
              <img src="icon-pro.svg" alt="pro" />
            </div>
            <div className="plan-details">
              <h3>Pro</h3>
              <h4>$15/mo</h4>
              <p>2 months free</p>
            </div>
          </div>
          <div className="option-selector">
            <h4>Monthly</h4>
            <label className="switch">
              <input type="checkbox" onClick={selectPlan} />
              <span className="slider"></span>
            </label>
            <h4>Yearly</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
