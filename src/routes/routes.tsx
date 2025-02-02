import { Navigate, Route, Routes } from "react-router-dom";
import  { lazy, useEffect } from "react";
import Layout from "../container/layout";
import { RouteType } from "../../interfaces";
const Login = lazy(() => import("../pages/auth/Login"));
const Signup = lazy(() => import("../pages/auth/Signup"));

const openRoutes: RouteType[] = [
    { path: "/", element: <Login /> },
    { path: "/register", element: <Signup/> },
  ];

  const adminRoute : RouteType[] = [
    
  ]
  const usersRoutes : RouteType[] = [
   
  ]

  const PagesRoute = () => {
    useEffect(()=>{

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
