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
