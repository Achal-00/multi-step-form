"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const width = screen.width;
  const currentPage = usePathname();

  useEffect(() => {
    if (currentPage === "/") {
      document.querySelector(".one").style.background = "var(--light-blue)";
      document.querySelector(".one").style.color = "var(--marine-blue)";
      document.querySelectorAll(".two, .three, .four").forEach((x) => {
        x.style.background = "transparent";
        x.style.color = "var(--white)";
      });
    } else if (currentPage === "/plan") {
      document.querySelector(".two").style.background = "var(--light-blue)";
      document.querySelector(".two").style.color = "var(--marine-blue)";
      document.querySelectorAll(".one, .three, .four").forEach((x) => {
        x.style.background = "transparent";
        x.style.color = "var(--white)";
      });
    } else if (currentPage === "/addOn") {
      document.querySelector(".three").style.background = "var(--light-blue)";
      document.querySelector(".three").style.color = "var(--marine-blue)";
      document.querySelectorAll(".one, .two, .four").forEach((x) => {
        x.style.background = "transparent";
        x.style.color = "var(--white)";
      });
    } else {
      document.querySelector(".four").style.background = "var(--light-blue)";
      document.querySelector(".four").style.color = "var(--marine-blue)";
      document.querySelectorAll(".one, .two, .three").forEach((x) => {
        x.style.background = "transparent";
        x.style.color = "var(--white)";
      });
    }
  }, [currentPage]);

  if (width < 1200) {
    return (
      <div className="header">
        <div className="header-image-container">
          <img src="bg-sidebar-mobile.svg" alt="header background" />
        </div>
        <div className="page-number-holder">
          <div className="one">1</div>
          <div className="two">2</div>
          <div className="three">3</div>
          <div className="four">4</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header">
        <div className="desktop-header-image-holder">
          <img src="bg-sidebar-desktop.svg" alt="header background" />
        </div>
        <div className="desktop-summary">
          <div className="step-1">
            <div className="one common-number">1</div>
            <p>STEP 1</p>
            <h4>YOUR INFO</h4>
          </div>
          <div className="step-1">
            <div className="two common-number">2</div>
            <p>STEP 2</p>
            <h4>SELECT PLAN</h4>
          </div>
          <div className="step-1">
            <div className="three common-number">3</div>
            <p>STEP 3</p>
            <h4>ADD-ONS</h4>
          </div>
          <div className="step-1">
            <div className="four common-number">4</div>
            <p>STEP 4</p>
            <h4>SUMMARY</h4>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;
