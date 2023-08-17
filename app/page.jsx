"use client";
import Info from "@/components/Info";
import { useContext, useEffect } from "react";
import { store } from "@/components/store";

const page = () => {
  const { state } = useContext(store);

  useEffect(() => {
    if (state.pageNo === 1) {
      if (state.name !== "" && state.email !== "" && state.number !== "") {
        document.querySelector(".name").value = state.name;
        document.querySelector(".email").value = state.email;
        document.querySelector(".no").value = state.number;
        document.querySelectorAll(".name, .email, .no").forEach((x) => {
          x.addEventListener("click", () => {
            x.value = "";
          });
        });
      }
    }
  }, []);

  return (
    <div className="home">
      <div className="wrapper">
        <Info
          heading="Personal info"
          content="Please provide your name, email address, and phone number."
        />
        <div className="page-one-content">
          <div className="input-fields">
            <div className="input-heading">
              <p>Name</p>
              <p>This field is required</p>
            </div>
            <input
              type="text"
              placeholder="e.g. Stephen King"
              className="name"
            />
          </div>
          <div className="input-fields">
            <div className="input-heading">
              <p>Email address</p>
              <p>This field is required</p>
            </div>
            <input
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              className="email"
            />
          </div>
          <div className="input-fields">
            <div className="input-heading">
              <p>Phone Number</p>
              <p>This field is required</p>
            </div>
            <input
              type="number"
              placeholder="e.g. +1 234 567 890"
              className="no"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
