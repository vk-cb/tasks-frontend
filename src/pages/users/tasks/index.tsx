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
      console.log(res.data, "hjkjhjjklllllllllllll")
      hideLoader();
    } else {
      hideLoader();
    }
  };
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
    return response; 
  };
  //taskStatus Data
  const fetchTaskStatus = async () => {
    const response = await getTaskStatus();
    if (response.status === 200) {
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
  }, [taskId]);

  return (
    <div className="mx-2 sm:mx-0 w-full sm:w-xl  md:w-2xl xl:w-4xl mt-2">
      {tasks?.data?.map((d: TaskApiProps, index: number) => (
        <div key={`tasks-${index}`} className="mt-8">
          <TaskCard
            setTaskId={setTaskId}
            showTaskFull={setShow}
            data={d}
            onStatusChange={fetchStatusChangeTask}
            onDelete={deleteUserTask}
          />
        </div>
      ))}
      <div
        className="flex gap-2 cursor-pointer mt-4 text-sm group p-2 transition"
        onClick={() => setIsAddTask(true)}
      >
        <Plus
          className="rounded-full text-blue-400 group-hover:text-white group-hover:bg-blue-400"
          size={18}
        />
        <p className="text-gray-400 group-hover:text-blue-400">Add Task</p>
      </div>
      {isAddTask && (
        <AddTask
          createTask={taskState}
          setCreateTask={setTaskState}
          onAdd={handleSubmit}
          onCancel={() => setIsAddTask(false)}
        />
      )}
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
