import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {  MdOutlineSpaceDashboard } from "react-icons/md";
import { BsPeople,BsPersonVcard } from "react-icons/bs";
import { IoListOutline,IoTrashBinOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import {MenuProps} from '../../../../../interfaces/index'
const Menu: React.FC<MenuProps> = () => {
  const location = useLocation();
console.log(location.pathname.startsWith('/billing'));

  const menuItems = [ 

  {
    title: "Tasks",
    icon: <FaTasks size={20} />,
    toLink:"/billing/lists" ,
    userType: [ "user"],
  },
  {
    title: "Deleted Tasks",
    icon: <IoTrashBinOutline size={20} />,
    toLink:"/billing/lists" ,
    userType: [ "user"],
  },
  {
    title: "Users",
    icon: <BsPeople size={20} />,
    toLink: "/admin/shishya",
    userType: ["admin"],
  },
  {
    title: "Profile",
    icon: <CgProfile size={20} />,
    toLink: "/profile",
    userType: ["admin", "user"],
  },
  
]
const currentUserType = location.pathname.startsWith('/billing') ? "billingUser" : "admin";
const filteredMenuData = menuItems.filter(item => item.userType.includes(currentUserType));
  return (
    <div>
      <nav>
        <ul className="flex flex-col gap-2">
          {menuItems.map((route, index) => (
            <li key={index}>
              <NavLink 
                to={route.toLink} 
                className={`flex gap-2 mb-1 items-center font-medium cursor-pointer py-2 pl-2 hover:bg-gray-100 text-gray-500  duration-300 ease-in-out `}
              >
                {route.icon} {route.title}  
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
