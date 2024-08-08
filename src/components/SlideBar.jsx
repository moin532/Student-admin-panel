import React, { useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { FaTable } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiUserAddFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
const SlideBar = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };
  return (
    <div className="bg-violet-900  text-white min-h-screen p-6">
      <h2 className="text-2xl font-semibold mb-24">Menu</h2>
      <ul>
        <li
          className={` mb-11 flex items-center text-lg cursor-pointer ${
            activeMenu === "dashboard" ? " text-yellow-400" : ""
          }`}
          onClick={() => handleMenuClick("dashboard")}
        >
          <span className="mr-3 "></span>
          <RiUserAddFill />
          {/* Dashboard */}
        </li>
        <li
          className={`mb-11 flex items-center text-lg cursor-pointer ${
            activeMenu === "user" ? "text-yellow-400" : ""
          }`}
          onClick={() => handleMenuClick("user")}
        >
          <span className="mr-3"></span>
          <FaUserGraduate />
        </li>
        <li
          className={`mb-11 flex items-center text-lg cursor-pointer ${
            activeMenu === "chart" ? "text-yellow-400" : ""
          }`}
          onClick={() => handleMenuClick("chart")}
        >
          <span className="mr-3"></span>
          <IoBarChartSharp />
        </li>
        <li
          className={`mb-11 flex items-center text-lg cursor-pointer ${
            activeMenu === "table" ? "text-yellow-400" : ""
          }`}
          onClick={() => handleMenuClick("table")}
        >
          <span className="mr-3"></span>
          <FaTable />
        </li>
        <li
          className={`mb-11 flex items-center text-lg cursor-pointer ${
            activeMenu === "setting" ? "text-yellow-400" : ""
          }`}
          onClick={() => handleMenuClick("setting")}
        >
          <span className="mr-3"></span>
          <IoMdSettings />
        </li>
        <li
          className={` mt-52 flex items-center text-lg cursor-pointer ${
            activeMenu === "Logout" ? "text-yellow-400" : ""
          }`}
          onClick={() => handleMenuClick("Logout")}
        >
          <span className="mr-3"></span>
          <IoLogOut />
        </li>
      </ul>
    </div>
  );
};

export default SlideBar;
