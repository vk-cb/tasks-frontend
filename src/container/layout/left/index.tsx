import React, { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { MdOutlineArrowOutward } from "react-icons/md";
import Menu from "./menu/menu";
import Button from "../../../components/button/Button";
const LeftBar = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("");

  const handleLogout = () => {
    window.location.href = "/";
  };
  return (
    <div className=" flex flex-col justify-between h-screen w-[300px] p-4 bg-gray-50  ">
      <div className="mb-4">
        <div className="mb-4 flex flex-col items-center border-b-2 pb-2 border-light">
          {/* <img
            src={logoImage}
            alt="logo2"
            className="w-36 h-36 cursor-pointer"
          /> */}
          <p className="bg-gradient-to-r from-blue-600 to-teal-500 inline-block text-transparent bg-clip-text font-semibold tracking-wider pt-2">TaskMaster</p>
        </div>
        <div className="flex flex-col gap-2">
          <Menu setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} />
        </div>
      </div>

      <div className="flex flex-col  gap-5 mb-4 ">
        
        <div className="flex justify-center">
         <Button
                   text="Logout"
                   icon_right={<MdOutlineArrowOutward />}
                 />
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
