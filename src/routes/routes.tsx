import { Navigate, Route, Routes } from "react-router-dom";
import  { lazy, useEffect, useState } from "react";
import Layout from "../container/layout";
import { RouteType } from "../../interfaces";
import AddTask from "../pages/users/tasks/addTask";
import TaskCard from "../pages/users/tasks/taskCard";
const Login = lazy(() => import("../pages/auth/Login"));
const Signup = lazy(() => import("../pages/auth/Signup"));

const openRoutes: RouteType[] = [
    { path: "/", element: <Login /> },
    { path: "/register", element: <Signup/> },
    { path: "/add-task", element: <AddTask/> },
    { path: "/card-task", element: <TaskCard/> },

  ];

  const adminRoute : RouteType[] = [
    
  ]
  const usersRoutes : RouteType[] = [
    { path: "/user/tasks", element: <Login /> },
  ]

  const PagesRoute = () => {
    const [allRoutes, setAllRoutes] = useState<RouteType[]>([])

    useEffect(()=>{
      const role = JSON.parse(localStorage.getItem("user") || "null");
      if(role?.data?.role === "user"){
        setAllRoutes(usersRoutes)
      }
      else if(role?.data?.role === "admin"){
        setAllRoutes(adminRoute)
      }
      else{
        setAllRoutes(openRoutes)
      }
      console.log(role)
    },[])
    return (
      <Layout>
        <Routes>
          {openRoutes.map(({ path, element, navigate }, i) => (
            <Route
              key={i}
              path={path}
              element={navigate ? <Navigate replace to="/" /> : element}
            />
          ))}
        </Routes>
      </Layout>
    );
  };
  
  export default PagesRoute;
