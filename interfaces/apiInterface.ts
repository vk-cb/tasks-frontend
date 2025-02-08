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
    status: TaskStatus;
  }
  export interface TaskApiProps {
    _id: string;
    title: string;
    description: string;
    status: "pending" | "completed" | "in-progress"; 
    user: string;
    createdAt: string; 
    updatedAt: string;
    __v: number;
  }
  
  export interface GetTasksResponse {
    msg: string;
    data: TaskApiProps[];
  }
  