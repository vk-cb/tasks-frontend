import React, { useEffect, useState } from "react";
import TaskDetails from "./taskDetails";
import AddTask from "./addTask";
import TaskCard from "./taskCard";
import { changeStatus, createTask, deleteTask, getAllTask, getTaskById } from "../../../container/apiCall/user";
import {
  GetTasksResponse,
  TaskApiProps,
  TaskStatus,
} from "../../../../interfaces/apiInterface";
import MakeModal from "../../../components/modal/MakeModal";
import { Plus } from "lucide-react";
import { errorAlert, hideLoader, showLoader, successAlert } from "../../../components/ui/loader/loader";
import { getTaskStatus } from "../../../container/apiCall/common";

const TaskMainPage = () => {
  const [tasks, setTasks] = useState<GetTasksResponse>();
  const [isAddTask, setIsAddTask] = useState(false)
  const [taskState,setTaskState] = useState({
    title: "",
    description : ""
  })
  const fetchAllTasks = async () => {
    showLoader()
    const response: any = await getAllTask();
    if(response?.status === 200){
      hideLoader()
      setTasks(response);
    }else{
      hideLoader();
      errorAlert(response?.msg);
    }

    console.log(response);
  };
  useEffect(() => {
    fetchAllTasks();
  }, []);

  const handleSubmit = async()=>{
    showLoader()
    const res:any = await createTask(taskState)
    if(res.status === 200){
      fetchAllTasks()
      setTaskState({
        title: "",
        description : ""
      })
      hideLoader()
    }
  }
  const fetchTaskById = async ()=>{
    getTaskById("67a4e5d394dd5df6ef6c269c")
  }
  //delete task 
  const fetchDeleteTask = async ()=>{
    deleteTask("jkjk")
  }
  //change status of task
  const payload = {
        status : TaskStatus.IN_PROGRESS,
      }
  const fetchStatusChangeTask = async()=>{
    changeStatus(payload, "ndjkgnkj")
  }
  //taskStatus Data 
  const fetchTaskStatus = async ()=>{
    getTaskStatus()
  }

  return (
    <div className="mx-2 sm:mx-0 w-full sm:w-xl  md:w-2xl xl:w-4xl mt-2">
      {tasks?.data?.map((d: TaskApiProps, index: number) => (
        <div key={`tasks-${index}`} className="mt-8">
          <TaskCard title={d.title} description={d.description}/>
        </div>
      ))}
      <div className="flex gap-2 cursor-pointer mt-4 text-sm group p-2 transition" onClick={()=>setIsAddTask(true)}>
  <Plus className="rounded-full text-blue-400 group-hover:text-white group-hover:bg-blue-400" size={18}/>
  <p className="text-gray-400 group-hover:text-blue-400">Add Task</p>
</div>
{
  isAddTask && <AddTask createTask={taskState} setCreateTask={setTaskState} onAdd={handleSubmit} onCancel={()=>setIsAddTask(false)}/>
}
      <MakeModal
        className="w-[300px] sm:w-[400px] md:w-[550px] lg:w-[700px] max-h-[400px]"
        isOpen={false}
        onClose={() => {}}
      >
        <TaskDetails />
      </MakeModal>
    </div>
  );
};

export default TaskMainPage;
