import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <>
      <div class="seven">
        <h1>BlockChain Based Platform</h1>
      </div>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Spinner;
