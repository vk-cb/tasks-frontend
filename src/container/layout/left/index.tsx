import React, { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { MdOutlineArrowOutward } from "react-icons/md";
import Menu from "./menu/menu";
import Button from "../../../components/button/Button";
import { logout } from "../../../store/reducers/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { MenuIcon, CircleX } from "lucide-react";
const LeftBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
   const res = dispatch(logout())
   navigate('/')
  };
  return (
    <>
      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 bg-gray-800 text-white p-2 rounded-md shadow-md z-50"
      >
        <MenuIcon size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 h-screen w-[300px] bg-gray-200 p-4 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 shadow-lg lg:shadow-none z-40`}
      >
        {/* Close Button (Mobile Only) */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-md shadow-md"
        >
          <CircleX  size={24} />
        </button>
        {/* Logo & Title */}
        <div className="mb-4 flex flex-col items-center border-b-2 pb-2 border-light">
          <p className="bg-gradient-to-r from-blue-600 to-teal-500 inline-block text-transparent bg-clip-text font-semibold tracking-wider pt-2">
            TaskMaster
          </p>
        </div>

        {/* Sidebar Menu */}
        <div className="flex flex-col gap-2">
          <Menu setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} />
        </div>

        {/* Logout Button */}
        <div className="flex flex-col absolute  bottom-5 left-[90px] gap-5 mt-auto">
          <div className="flex justify-center">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
            >
              Logout <MdOutlineArrowOutward />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay (Mobile Only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default LeftBar;
