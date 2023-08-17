"use client";
import React from "react";
import Info from "@/components/Info";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { store } from "@/components/store";

const page = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(store);
  const [total, setTotal] = useState(0);
  const [yearly, setYearly] = useState(false);

  useEffect(() => {
    setTotal((prev) => prev + state.planCost);
    if (
      state.planCost === 90 ||
      state.planCost === 120 ||
      state.planCost === 150
    ) {
      setYearly(true);
      if (state.service) {
        setTotal((prev) => prev + 10);
      }
      if (state.storage) {
        setTotal((prev) => prev + 20);
      }
      if (state.profile) {
        setTotal((prev) => prev + 20);
      }
    } else {
      if (state.service) {
        setTotal((prev) => prev + 1);
      }
      if (state.storage) {
        setTotal((prev) => prev + 2);
      }
      if (state.profile) {
        setTotal((prev) => prev + 2);
      }
    }
  }, []);

  return (
    <div className="home">
      <div className="wrapper">
        <Info
          heading="Finishing up"
          content="Double-check everything looks OK before confirming."
        />
        <div className="page-final-content">
          <div className="summary">
            <div className="arcade-detail">
              <div>
                <h3>{state.plan}</h3>
                <h4
                  onClick={() => {
                    router.push("/plan");
                    dispatch({ type: "CHANGE_PAGENO", payload: 2 });
                  }}
                >
                  Change
                </h4>
              </div>
              <h4>
                ${state.planCost}
                {state.timePeriod}
              </h4>
            </div>
            <hr />
            {state.service && (
              <div className="online-service">
                <h4>Online service</h4>
                {yearly ? <h4>+$10/yr</h4> : <h4>+$1/mo</h4>}
              </div>
            )}
            {state.storage && (
              <div className="larger-storage">
                <h4>Lager storage</h4>
                {yearly ? <h4>+$20/yr</h4> : <h4>+$2/mo</h4>}
              </div>
            )}
            {state.profile && (
              <div className="customizable-profile">
                <h4>customizable profile</h4>
                {yearly ? <h4>+$20/yr</h4> : <h4>+$2/mo</h4>}
              </div>
            )}
          </div>
          <div className="total-val">
            {yearly ? (
              <>
                <h4>Total (per year)</h4>
                <h2>+${total}/yr</h2>
              </>
            ) : (
              <>
                <h4>Total (per month)</h4>
                <h2>+${total}/mo</h2>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
