"use client";
import { useRouter, usePathname } from "next/navigation";
import { store } from "./store";
import { useContext, useEffect } from "react";

const Footer = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(store);
  const currentPage = usePathname();

  useEffect(() => {
    if (currentPage === "/") {
      document.querySelector(".back-button").style.visibility = "hidden";
    } else {
      document.querySelector(".back-button").style.visibility = "visible";
    }
    if (currentPage === "/final") {
      document.querySelector(".next-button button").textContent = "Confirm";
      document.querySelector(".next-button button").style.background =
        "var(--purplish-blue)";
    } else {
      document.querySelector(".next-button button").textContent = "Next Step";
      document.querySelector(".next-button button").style.background =
        "var(--marine-blue)";
    }
    if (currentPage === "/placed") {
      document.querySelector(".footer").style.background = "var(--magnolia)";
      document.querySelector(".back-button").style.display = "none";
      document.querySelector(".next-button").style.display = "none";
    } else {
      document.querySelector(".footer").style.background = "var(--white)";
      document.querySelector(".back-button").style.display = "block";
      document.querySelector(".next-button").style.display = "block";
    }
  }, [currentPage]);

  useEffect(() => {
    if (state.name !== "" && state.email !== "" && state.number !== "") {
      router.push("/plan");
      dispatch({ type: "CHANGE_PAGENO", payload: 2 });
    }
  }, [state.name, state.email, state.number]);

  function nextHandler() {
    if (state.pageNo === 1) {
      let username = document.querySelector(".name").value;
      let email = document.querySelector(".email").value;
      let no = document.querySelector(".no").value;
      if (username === "") {
        document.querySelector(
          ".page-one-content .input-fields:nth-child(1) p:nth-child(2)"
        ).style.display = "block";
        document.querySelector(".name").style.border =
          "thin solid var(--strawberry-red)";
      } else {
        document.querySelector(
          ".page-one-content .input-fields:nth-child(1) p:nth-child(2)"
        ).style.display = "none";
        document.querySelector(".name").style.border = "thin solid green";
        dispatch({ type: "CHANGE_NAME", payload: username });
      }
      if (email === "") {
        document.querySelector(
          ".page-one-content .input-fields:nth-child(2) p:nth-child(2)"
        ).style.display = "block";
        document.querySelector(".email").style.border =
          "thin solid var(--strawberry-red)";
      } else {
        document.querySelector(
          ".page-one-content .input-fields:nth-child(2) p:nth-child(2)"
        ).style.display = "none";
        var validRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)) {
          document.querySelector(".email").style.border = "thin solid green";
          dispatch({ type: "CHANGE_EMAIL", payload: email });
        }
      }
      if (no === "") {
        document.querySelector(
          ".page-one-content .input-fields:nth-child(3) p:nth-child(2)"
        ).style.display = "block";
        document.querySelector(".no").style.border =
          "thin solid var(--strawberry-red)";
      } else {
        document.querySelector(
          ".page-one-content .input-fields:nth-child(3) p:nth-child(2)"
        ).style.display = "none";
        document.querySelector(".no").style.border =
          "thin solid var(--strawberry-red)";
        if (no.length == 10) {
          document.querySelector(".no").style.border = "thin solid green";
          dispatch({ type: "CHANGE_NO", payload: no });
        }
      }
      if (state.name !== "" && state.email !== "" && state.number !== "") {
        router.push("/plan");
        dispatch({ type: "CHANGE_PAGENO", payload: 2 });
      }
    } else if (state.pageNo === 2) {
      if (state.plan !== "") {
        router.push("/addOn");
        dispatch({ type: "CHANGE_PAGENO", payload: 3 });
      }
    } else if (state.pageNo === 3) {
      router.push("/final");
      dispatch({ type: "CHANGE_PAGENO", payload: 4 });
    } else {
      router.push("/placed");
    }
  }

  function goBack() {
    router.back();
    switch (currentPage) {
      case "/plan":
        dispatch({ type: "CHANGE_PAGENO", payload: 1 });
        break;
      case "/addOn":
        dispatch({ type: "CHANGE_PAGENO", payload: 2 });
        break;
      case "/final":
        dispatch({ type: "CHANGE_PAGENO", payload: 3 });
        break;
      default:
        break;
    }
  }

  return (
    <div className="footer">
      <div className="back-button">
        <button onClick={goBack}>Go Back</button>
      </div>
      <div className="next-button">
        <button onClick={nextHandler}>Next Step</button>
      </div>
    </div>
  );
};

export default Footer;
