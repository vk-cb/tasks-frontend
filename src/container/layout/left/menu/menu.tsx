import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { BsPeople } from "react-icons/bs";
import { IoTrashBinOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { MenuProps } from "../../../../../interfaces/index";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

const Menu: React.FC<MenuProps> = () => {
  const location = useLocation();
  console.log(location.pathname.startsWith("/profile"));
  const role = useSelector((state: RootState) => state?.auth?.user?.data?.role);
  console.log(role);
  const menuItems = [
    {
      title: "Tasks",
      icon: <FaTasks size={20} />,
      toLink: `user/tasks`,
      userType: ["user"],
    },

    {
      title: "Users",
      icon: <BsPeople size={20} />,
      toLink: `admin/users-list`,
      userType: ["admin"],
    },
    {
      title: "Deleted Tasks",
      icon: <IoTrashBinOutline size={20} />,
      toLink: `${role}/deleted-task`,
      userType: ["admin"],
    },
    {
      title: "Profile",
      icon: <CgProfile size={20} />,
      toLink: "/profile",
      userType: ["user"],
    },
  ];

  const currentUserType = role === "user" ? "user" : "admin";
  const filteredMenuData = menuItems.filter((item) =>
    item.userType.includes(currentUserType)
  );
  return (
    <div>
      <nav>
        <ul className="flex flex-col gap-2">
          {filteredMenuData.map((route, index) => (
            <li key={index}>
              <NavLink
                to={route.toLink}
                className={({ isActive }) =>
                  `flex gap-2 mb-1 items-center font-medium cursor-pointer py-2 pl-2 duration-300 ease-in-out 
                  ${
                    isActive
                      ? "bg-blue-400 text-white"
                      : "hover:bg-gray-100 text-gray-500"
                  }`
                }
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
