import { Dispatch, ReactNode } from "react";
import { TaskApiProps } from "./apiInterface";

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
  export interface statusProp{
    status: "pending" | "done" | "in-progress";
  }

  export interface taskCardProps {
    data : TaskApiProps,
    onDelete: (id:string) => void; 
    onStatusChange: (data: any, id: string) => void;
    showTaskFull : React.Dispatch<React.SetStateAction<boolean>>
    setTaskId: React.Dispatch<React.SetStateAction<string>>
  }

  // export enum TaskStatus {
  //   PENDING = "pending",
  //   IN_PROGRESS = "in-Progress",
  //   DONE = "done",
  // }
  // export interface ChangeStatusProps {
  //   status: TaskStatus;
  // }