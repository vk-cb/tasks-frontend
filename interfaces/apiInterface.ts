export interface createTaskProps{
    title: string,
    description : string
}
 export enum TaskStatus {
    PENDING = "pending",
    IN_PROGRESS = "in-Progress",
    DONE = "done",
  }
  export interface ChangeStatusProps {
    status:"pending" | "done" | "in-progress";
  }
  export interface TaskApiProps {
    _id: string;
    title: string;
    description: string;
    status: "pending" | "done" | "in-progress"; 
    user: string;
    createdAt: string; 
    updatedAt: string;
    __v: number;
  }
  
  export interface GetTasksResponse {
    msg: string;
    data: TaskApiProps[];
  }
  
  export interface singleTaskProps {
    data: TaskApiProps;
    msg : string;
    status: number
  }
  export interface TaskStatusProps {
    label : string;
    value : string
  }
   export interface taskDetailProps{
    data : TaskApiProps;
    onDelete: (id:string) => void;
    onStatusChange: (data: any, id: string) => void;
    taskStatus : TaskStatusProps
   }