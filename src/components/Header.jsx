import React from "react";
import Logo from "../assets/Logo.png";
import Admin from "../assets/Admin.png";
import { FaBell } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-[#54BAB9] flex items-center justify-end gap-10 px-12 py-2 text-white">
      <img className="mr-auto" src={Logo} alt="logo" width={48} />
      <FaBell className="text-2xl" />
      <div className="flex gap-5">
        <img src={Admin} alt="Admin" />
        <div className="flex flex-col justify-between">
          <h1 className="font-bold font-[Poppins]">Lisa</h1>
          <p className="font-[Poppins]">Operator</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
