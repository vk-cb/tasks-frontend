import { Navigate, Route, Routes } from "react-router-dom";
import  { lazy, useEffect, useState } from "react";
import Layout from "../container/layout";
import { RouteType } from "../../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import TaskMainPage from "../pages/users/tasks";
const Login = lazy(() => import("../pages/auth/Login"));
const Signup = lazy(() => import("../pages/auth/Signup"));
const Profile = lazy(() => import("../pages/users/profile"));

const openRoutes: RouteType[] = [
    { path: "/", element: <Login /> },
    { path: "/register", element: <Signup/> },
  ];

  const adminRoute : RouteType[] = [
  ]
  const usersRoutes : RouteType[] = [
    { path: "/user/tasks", element: <TaskMainPage/> },
    { path: "/profile", element: <Profile/> },
    { path: "*", element: <TaskMainPage/> },
  ]

  const PagesRoute = () => {
    const [allRoutes, setAllRoutes] = useState<RouteType[]>([])
    const user = useSelector((state:RootState)=>state.auth)
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
      console.log(role?.data?.role)
    },[user])
    return (
      <Layout>
        <Routes>
          {allRoutes.map(({ path, element, navigate }, i) => (
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
