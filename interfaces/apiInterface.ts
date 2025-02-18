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
    taskStatus : TaskStatusProps[]
    handleSelect :any
    setUpdateModal: React.Dispatch<React.SetStateAction<boolean>>
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
   }

   export interface deleteApiResponse{
    status: number;
    msg: string;
   }

   export interface singleTaskPropsApiResponse{
    id: string,
    taskStatus : string
   }
  export interface taskStatusApiResponse{
    status: number;
    message: string;
    data : singleTaskPropsApiResponse[]
  }
  // {
  //   "msg": "Task details fetched successfully",
  //   "status": 200,
  //   "data": {
  //     "profile": {
  //       "_id": "67951e1790c38a251f4e42b5",
  //       "name": "Vicky Gupta",
  //       "email": "vicky@user.in",
  //       "role": "user"
  //     },
  //     "taskStats": {
  //       "totalTasks": 5,
  //       "pendingTasks": 1,
  //       "doneTasks": 1,
  //       "inProgressTasks": 3
  //     }
  //   }
  // }
  export interface profileProps {
    msg: string;
    status: number;
    data: {
      profile: {
        _id: string;
        name: string;
        email: string;
        role: string;
      };
      taskStats: {
        totalTasks: number;
        pendingTasks: number;
        doneTasks: number;
        inProgressTasks: number;
      };
    };
  }