import { Check, Edit, Ellipsis, PenLine } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "./task.css";
import MakeModal from "../../../components/modal/MakeModal";
import TaskDetails from "./taskDetails";
const TaskCard = () => {
  const variant = {
    pending: "text-gray-500 bg-white",
    inprogress: " border-yellow-500 text-yellow-500 bg-yellow-50",
    completed: "border-green-500 text-green-500 bg-green-50",
  };
  const [status, setStatus] = useState("pending");
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setPopoverOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div
      
      className="border-b-[1px] border-gray-300  mt-2 mx-2 sm:mx-0 w-full sm:w-xl  md:w-2xl xl:w-4xl relative group"
    >
      <div className="flex gap-2 pl-2 ">
        <div className="">
          <Check
            className={`border rounded-full p-1 ${variant.completed}`}
            size={24}
          />
        </div>
        <div className="w-full overflow-hidden">
          <p className="font-semibold truncate w-full">
            You can further customize the UI by adding more features like task
            deletion, task completion, due dates, etc., and styling it further
            with Tailwind CSS. This is a basic example to get you started. You
            can expand upon it to create a more feature-rich task management
            application.
          </p>
          <p className="text-gray-500 text-sm truncate w-full">
            You can further customize the UI by adding more features like task
            deletion, task completion, due dates, etc., and styling it further
            with Tailwind CSS. This is a basic example to get you started. You
            can expand upon it to create a more feature-rich task management
            application.
          </p>
        </div>
      </div>
      <div
        className={`bg-white bg-opacity-10 p-1 hidden sm:flex items-center absolute top-0 right-0 gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 `}
      >
        <PenLine size={32} className="hover:bg-gray-100 p-1 text-gray-500 cursor-pointer" />
        <Ellipsis
          size={32}
          className="hover:bg-gray-100 p-1 text-gray-500 cursor-pointer relative"
          onClick={() => setPopoverOpen(!popoverOpen)}
        />
        {popoverOpen && (
          <div ref={popoverRef} className="absolute -right-16 top-8 w-40 bg-white  rounded-md z-10 popOver">
            <button
              className="cursor-pointer w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() => {
                // setStatus(state);
                setPopoverOpen(false);
              }}
            >
              Pending
            </button>
            <button
              className="cursor-pointer w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() => {
                // setStatus(state);
                setPopoverOpen(false);
              }}
            >
              In Progress
            </button>
            <button
              className="cursor-pointer w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() => {
                // setStatus(state);
                setPopoverOpen(false);
              }}
            >
              Completed
            </button>
            <button
              className="cursor-pointer w-full px-4 py-2 text-left text-red-500 hover:bg-red-100"
              onClick={() => {
                // setStatus(state);
                setPopoverOpen(false);
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
      <MakeModal className="w-[300px] sm:w-[400px] md:w-[550px] lg:w-[700px] max-h-[400px]" isOpen={false} onClose={()=>{}}>
      <TaskDetails/>
      </MakeModal>
    </div>
  );
};

export default TaskCard;
