import React from "react";
import backLogo from "../../../images/sec-logo.svg";
import "./background.css";

export default function Background() {
  return (
    <div id="background" className="text-white">
      <div className="backgroundText">
        <h2>Betmore Rajpara Union Aadarsa Secondary School</h2>
        <img src={backLogo} alt="logo" />
      </div>
    </div>
  );
}
