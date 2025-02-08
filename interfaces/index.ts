import { ReactNode } from "react";

export interface MenuProps {
    setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
    selectedMenu: string;
  }

  export interface RouteType {
    path: string;
    element: ReactNode;
    navigate?: boolean;
  }

  export interface layoutPropsType {
    children : ReactNode;
  }

  export interface LoginState {
    email : string,
    password : string
  }

  export interface SignupState {
    name : "",
    email : "",
    role : "",
    password : ""
  }

  export interface baseFunction {
    method : string,
     url : string , 
     data : any ,
     additionalHeaders: any
  }

  export interface taskCardProps {
    title : string, 
    description: string
  }