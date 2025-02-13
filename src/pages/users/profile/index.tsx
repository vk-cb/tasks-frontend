
import { User, Mail, Briefcase, ListChecks, Clock, CheckCircle, Loader } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useEffect, useState } from "react";
import { usersAndTaskDetails } from "../../../container/apiCall/user";
import { hideLoader, showLoader } from "../../../components/ui/loader/loader";
import { profileProps } from "../../../../interfaces/apiInterface";



const Profile = ()=> {
  const data = useSelector((state:RootState)=>state?.auth?.user?.data)
  console.log(data)
  const [user, setUser] = useState<profileProps["data"] | null>(null);
  const fetchUserDetails = async()=>{
    showLoader()
    const res = await usersAndTaskDetails()
    console.log(res)
    if(res.status === 200){
      setUser(res?.data)
      console.log(res.data)
      hideLoader()
    }
  }

  useEffect(()=>{
    fetchUserDetails()
  },[])
  
  return (
    <div className="w-full mx-auto bg-white  p-6 space-y-4   ">
      {/* User Info */}
      <div className="flex justify-center sm:justify-normal items-center space-x-4">
        <div className="bg-blue-500 text-white p-3 rounded-full">
          <User size={28} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700 ">{data?.name}</h2>
          <p className="text-gray-500  flex items-center gap-2"><Mail size={16} />{data?.email}</p>
        </div>
      </div>

      {/* Role */}
      <div className="flex items-center gap-2 text-gray-500 ">
        <Briefcase size={20} className="text-blue-500" />
        <span className="text-lg font-medium">Role : {data?.role}</span>
      </div>
     
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="p-4 bg-gray-200  rounded-lg shadow">
          <ListChecks size={24} className="text-blue-500 mx-auto mb-2" />
          <p className="text-lg font-semibold">{user?.taskStats?.totalTasks}</p>
          <p className="text-sm text-gray-600 ">Total Tasks</p>
        </div>
        <div className="p-4 bg-yellow-100  rounded-lg shadow">
          <Clock size={24} className="text-yellow-600 mx-auto mb-2" />
          <p className="text-lg font-semibold">{user?.taskStats?.pendingTasks}</p>
          <p className="text-sm text-gray-600 ">Pending</p>
        </div>
        <div className="p-4 bg-green-100  shadow">
          <CheckCircle size={24} className="text-green-600 mx-auto mb-2" />
          <p className="text-lg font-semibold">{user?.taskStats?.doneTasks}</p>
          <p className="text-sm text-gray-600 ">Completed</p>
        </div>
        <div className="p-4 bg-blue-100  rounded-lg shadow">
          <Loader size={24} className="text-blue-600 mx-auto mb-2" />
          <p className="text-lg font-semibold">{user?.taskStats?.inProgressTasks}</p>
          <p className="text-sm text-gray-600 ">In Progress</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
