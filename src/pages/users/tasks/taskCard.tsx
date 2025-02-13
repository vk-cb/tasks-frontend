import { Check, Ellipsis, PenLine } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "./task.css";
import { taskCardProps } from "../../../../interfaces";
import { buttonData } from "../../../utility/data";
const TaskCard = ({onDelete, onStatusChange, data, showTaskFull, setTaskId, setUpdateModal}:taskCardProps) => {
  const variant = {
    pending: "text-gray-500 bg-white",
    inprogress: " border-yello-500 text-yellow-500 bg-yellow-50",
    completed: "border-green-500 text-green-500 bg-green-50",
  };
  const styleVariable = data?.status === "done" ? variant.completed : data?.status === "in-progress" ? variant.inprogress : variant.pending
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

const handleSetData = (id:string)=>{
  showTaskFull(true)
  setTaskId(id)
}
const handleUpdateModal = ()=>{
  setUpdateModal(true)
  setTaskId(data?._id)
}

  return (
    <div
      className="border-b-[1px] border-gray-300  mt-2 mx-2 sm:mx-0 w-full sm:w-xl  md:w-2xl xl:w-4xl relative group"
    >
      <div className="flex gap-2 pl-2 ">
        <div className="">
          <Check
            className={`border rounded-full p-1 ${styleVariable}`}
            size={24}
          />
        </div>
        <div className="w-full overflow-hidden" onClick={()=>handleSetData(data?._id)}>
          <p className="font-semibold truncate w-full">
            {data?.title}
          </p>
          <p className="text-gray-500 text-sm truncate w-full">
            {data?.description}
          </p>
        </div>
      </div>
      <div
        className={`bg-white bg-opacity-10 p-1 hidden sm:flex items-center absolute top-0 right-0 gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 `}
      >
        <PenLine onClick={handleUpdateModal} size={32} className="hover:bg-gray-100 p-1 text-gray-500 cursor-pointer" />
        <Ellipsis
          size={32}
          className="hover:bg-gray-100 p-1 text-gray-500 cursor-pointer relative"
          onClick={() => setPopoverOpen(!popoverOpen)}
        />
        {popoverOpen && (
          <div ref={popoverRef} className="absolute -right-16 top-8 w-40 bg-white  rounded-md z-10 popOver">
            {
            buttonData.map((d, index)=>(
              <button
              className="cursor-pointer w-full px-4 py-2 text-left hover:bg-gray-100"
              onClick={() => {
                onStatusChange(d.value, data?._id)
                setPopoverOpen(false);
              }}
            >
              {d.label}
            </button>
            ))     
            }
          
           
            <button
              className="cursor-pointer w-full px-4 py-2 text-left text-red-500 hover:bg-red-100"
              onClick={() => {
                onDelete(data?._id)
                // setPopoverOpen(false);
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
     
    </div>
  );
};

export default TaskCard;
