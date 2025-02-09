
import { User, Mail, Briefcase, ListChecks, Clock, CheckCircle, Loader } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

interface ProfileProps {
  name: string;
  email: string;
  role: string;
  totalTasks: number;
  pendingTasks: number;
  completedTasks: number;
  inProgressTasks: number;
}

const Profile: React.FC<ProfileProps> = ({ name, email, role, totalTasks, pendingTasks, completedTasks, inProgressTasks }) => {
  const data = useSelector((state:RootState)=>state?.auth?.user?.data)
  console.log(data)
  return (
    <div className="w-full mx-auto bg-white dark:bg-gray-900 p-6 space-y-4   ">
      {/* User Info */}
      <div className="flex justify-center sm:justify-normal items-center space-x-4">
        <div className="bg-blue-500 text-white p-3 rounded-full">
          <User size={28} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{data?.name}</h2>
          <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2"><Mail size={16} />{data?.email}</p>
        </div>
      </div>

      {/* Role */}
      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
        <Briefcase size={20} className="text-blue-500" />
        <span className="text-lg font-medium">Role : {data?.role}</span>
      </div>

      {/* Task Stats */}
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
          <ListChecks size={24} className="text-blue-500 mx-auto mb-2" />
          <p className="text-lg font-semibold">{totalTasks}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Tasks</p>
        </div>
        <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg shadow">
          <Clock size={24} className="text-yellow-600 mx-auto mb-2" />
          <p className="text-lg font-semibold">{pendingTasks}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Pending</p>
        </div>
        <div className="p-4 bg-green-100 dark:bg-green-900 rounded-lg shadow">
          <CheckCircle size={24} className="text-green-600 mx-auto mb-2" />
          <p className="text-lg font-semibold">{completedTasks}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
        </div>
        <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg shadow">
          <Loader size={24} className="text-blue-600 mx-auto mb-2" />
          <p className="text-lg font-semibold">{inProgressTasks}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">In Progress</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
