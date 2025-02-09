import React, { useEffect, useState } from "react";
import TaskDetails from "./taskDetails";
import AddTask from "./addTask";
import TaskCard from "./taskCard";
import {
  changeStatus,
  createTask,
  deleteTask,
  getAllTask,
  getTaskById,
  updateTask,
} from "../../../container/apiCall/user";
import {
  ChangeStatusProps,
  GetTasksResponse,
  singleTaskProps,
  TaskApiProps,
  TaskStatus,
} from "../../../../interfaces/apiInterface";
import MakeModal from "../../../components/modal/MakeModal";
import { Plus } from "lucide-react";
import {
  errorAlert,
  hideLoader,
  showLoader,
  successAlert,
} from "../../../components/ui/loader/loader";
import { getTaskStatus } from "../../../container/apiCall/common";

const TaskMainPage = () => {
  const [tasks, setTasks] = useState<GetTasksResponse>();
  const [isAddTask, setIsAddTask] = useState(false);
  const [show, setShow] = useState(false);
  const [taskId, setTaskId] = useState("");
  const [singleData, setSingleData] = useState<TaskApiProps>();
  const [status, setStatus] = useState([]);
  const [updateModal, setUpdateModal] = useState(false)
  const [taskState, setTaskState] = useState({
    title: "",
    description: "",
  });
  const fetchAllTasks = async () => {
    showLoader();
    const response: any = await getAllTask();
    if (response?.status === 200) {
      hideLoader();
      setTasks(response);
    } else {
      hideLoader();
      errorAlert(response?.msg);
    }
  };
  useEffect(() => {
    fetchAllTasks();
  }, [show]);

  const handleSubmit = async () => {

    try {
      showLoader()
      const res: any = await createTask(taskState);
      if (res.status === 200) {
        fetchAllTasks();
        setTaskState({
          title: "",
          description: "",
        });
        successAlert(res?.msg)
        hideLoader();
      }
    } catch (error) {
      errorAlert(error.msg);
    } finally {
      hideLoader();
    }
  };
  const fetchTaskById = async (id: string) => {
    showLoader();
    const res = await getTaskById(id);
    if (res.status === 200) {
      setSingleData(res?.data);
      setTaskState({...taskState, title: res?.data.title, description: res?.data?.description})
      hideLoader();
    } else {
      hideLoader();
    }
  };
  console.log(taskState)
  //delete task
  const deleteUserTask = async (id: string) => {
    showLoader();
    const res = await deleteTask(id);
    if (res.status === 200) {
      hideLoader();
      setShow(false)
    }
    fetchAllTasks();
  };
  //change status of task
  const fetchStatusChangeTask = async (data: any, id: string) => {
    const payload: ChangeStatusProps = {
      status: data,
    };
    const response = await changeStatus(payload, id);
    if(response.status === 200){
      fetchAllTasks()
    }
    return response; 
  };
  //taskStatus Data
  const fetchTaskStatus = async () => {
    showLoader()
    const response = await getTaskStatus();
    if (response.status === 200) {
      hideLoader()
      setStatus(
        response.data.map((d) => ({
          label: d?.taskStatus,
          value: d.taskStatus,
        }))
      );
    }
  };
  useEffect(() => {
    if (taskId) {
      fetchTaskById(taskId);
      fetchTaskStatus();
    }
  }, [taskId, updateModal]);

  //update task 
  const handleUpdateTask = async()=>{
    const response = await updateTask(taskState, taskId)
    if(response?.status === 200){
      fetchAllTasks()
    }

  }
  const handleCancelUpdate = async()=>{
    setUpdateModal(false)
    fetchAllTasks()
  }
  return (
    <div className="mx-2 sm:mx-0 w-full sm:w-xl  md:w-2xl xl:w-4xl mt-2">
      {tasks?.data?.map((d: TaskApiProps, index: number) => (
        <div key={`tasks-${index}`} className="mt-8">
          <TaskCard
          setUpdateModal={setUpdateModal}
            setTaskId={setTaskId}
            showTaskFull={setShow}
            data={d}
            onStatusChange={fetchStatusChangeTask}
            onDelete={deleteUserTask}
          />
        </div>
      ))}
      {
        !isAddTask && 
      
      <div
        className="flex gap-2 cursor-pointer mt-4 text-sm group p-2 transition"
        onClick={() => setIsAddTask(true)}
      >
        <Plus
          className="rounded-full text-blue-400 group-hover:text-white group-hover:bg-blue-400"
          size={18}
        />
        <p className="text-gray-400 group-hover:text-blue-400">Add Task</p>
      </div>}
      {isAddTask && (
        <AddTask
          createTask={taskState}
          setCreateTask={setTaskState}
          onAdd={handleSubmit}
          onCancel={() => setIsAddTask(false)}
        />
      )}
      {/* Update Task */}
       <MakeModal
        className="sm:mx-0 w-full sm:w-2xl  md:w-[720px] xl:w-[945px] max-h-[400px]"
        isOpen={updateModal}
        onClose={() => setUpdateModal(false)}
      >
        <AddTask createTask={taskState}
        update={true}
          setCreateTask={setTaskState}
          onAdd={handleUpdateTask}
          onCancel={handleCancelUpdate}
          />
      </MakeModal>

      
      <MakeModal
        className="w-[300px] sm:w-[400px] md:w-[550px] lg:w-[700px] max-h-[400px]"
        isOpen={show}
        onClose={() => setShow(false)}
      >
        <TaskDetails
          taskStatus={status}
          onDelete={deleteUserTask}
          onStatusChange={fetchStatusChangeTask}
          fetchTaskById={fetchTaskById}
          data={
            singleData ?? {
              _id: "",
              title: "",
              description: "",
              status: "pending",
              user: "",
              createdAt: "",
              updatedAt: "",
              __v: 0,
            }
          }
        />
      </MakeModal>
    </div>
  );
};

export default TaskMainPage;
