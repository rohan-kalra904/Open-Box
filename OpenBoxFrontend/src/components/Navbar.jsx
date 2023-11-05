import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../images/demo/block2.jpg";
import { useStateContext } from "../context/index";
import { CustomButton } from "./";
import { logo, menu, search, thirdweb } from "../assets";
import { navlinks } from "../constants";
import logoo from "../assets/logo.png";
const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address, billId, setBillId } = useStateContext();
  const price = billId[0];
  const prid = billId[1];
  const fname = billId[2];

  return (
    <>
      <div
        style={{
          height: "100px",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",

          backgroundRepeat: "no-repeat",
        }}
        className="flex md:flex-row flex-col-reverse  justify-between mb-[2px] gap-6"
      >
        <div style={{ position: "absolute", left: "5%", top: "2.3%" }}>
          <div
            onClick={() => {
              window.location.href("http://localhost:3000/");
            }}
          >
            <Link to="/">
              <button className="bg-stone-600 font-epilogue font-semibold  text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] hover:text-[18px] hover:font-bold">
                BACK
              </button>
            </Link>
          </div>
        </div>
        <div style={{ position: "absolute", left: "73%", top: "2.3%" }}>
          <Link to="/create-campaign">
            <button className="bg-stone-600 font-epilogue font-semibold  text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px]  hover:text-[16.5px] hover:font-bold">
              Create Campaign
            </button>
          </Link>
        </div>

        <div
          style={{ position: "absolute", left: "23.5%" }}
          className="justify-center lg:flex-1 flex flex-row  py-2 pl-4 pr-2 h-[52px]  rounded-[100px] text-[50px] text-white  font-mono"
        >
          <p
            style={{ marginTop: "20px", marginLeft: "0px" }}
            className=" text-[30px] font-italic font-sans animate-pulse"
          >
            Hello, <b>{fname}</b>
            {/* WELCOME TO THE HOME OF KINDNESS */}
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            left: "88%",
            top: "2.3%",
          }}
          className="sm:flex  hidden h-8   flex-row  gap-4"
        >
          <CustomButton
            btnType="button"
            title={address ? "Connected Successfully" : "Connect"}
            styles={address ? "bg-stone-600" : "bg-green-600"}
            handleClick={() => {
              if (!address) connect();
            }}
          />
        </div>

        <div className="sm:hidden flex justify-between items-center relative">
          <img
            src={menu}
            alt="menu"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />

          <div
            className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${
              !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
            } transition-all duration-700`}
          >
            <div className="flex mx-4">
              <CustomButton
                btnType="button"
                title={address ? "Enroll A Foundation" : "Connect"}
                styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
                handleClick={() => {
                  if (address) navigate("create-campaign");
                  else connect();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
