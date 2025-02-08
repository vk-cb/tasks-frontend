import { Check, Trash2 , PenLine } from "lucide-react";
import Select from "../../../components/select/Select";

const TaskDetails = ({taskDetails, taskStatusData}) => {
  const variant = {
    pending: "text-gray-500 bg-white",
    inprogress: " border-yellow-500 text-yellow-500 bg-yellow-50",
    completed: "border-green-500 text-green-500 bg-green-50",
  };
  
  return (
    <div>
      <div className="h-8 border-b border-gray-400 flex justify-center">
        <h1 className=" text-lg font-semibold bg-gradient-to-r from-blue-600 to-teal-500 inline-block text-transparent bg-clip-text">
          TaskMaster
        </h1>
      </div>
      <div className="flex gap-2 pl-2 mt-2 max-h-[250px] overflow-y-scroll">
        <div className="">
          <Check
            className={`border rounded-full p-1 ${variant.completed}`}
            size={24}
          />
        </div>
        <div className="w-full ">
          <p className="font-semibold  w-full">
           {taskDetails?.title}
          </p>
          <p className="text-gray-500 text-sm w-full">
            {taskDetails?.description}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6 border-t border-t-gray-400">
        <div className="mt-2">
        <Select placeholder="Select status" />
        </div>
        <div className="flex gap-4 mt-2">
        <PenLine size={28} className="hover:bg-gray-100 p-1 text-gray-500 cursor-pointer" />
        <Trash2  size={28} className="hover:bg-red-100 p-1 text-red-400 hover:text-red-500 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
