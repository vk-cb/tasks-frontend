import { useEffect, useState } from "react";
import { usersList } from "../../container/apiCall/admin";
import Table from "../../components/table/Table";
import { usersListColumn } from "../../utility/admin";
import { userDataAdminApiProps } from "../../../interfaces/apiInterface";
import {
  errorAlert,
  hideLoader,
  showLoader,
} from "../../components/ui/loader/loader";
import { Eye, Trash2 } from "lucide-react";
import Select from "../../components/select/Select";
import { buttonData } from "../../utility/data";

const Users = () => {
  const [usersData, setUsersData] = useState<userDataAdminApiProps[]>([]);
  const fetchusersList = async () => {
    showLoader();
    try {
      const res = await usersList();
      if (res.data.length) {
        setUsersData(res.data as userDataAdminApiProps[]);
      }
    } catch (error) {
      errorAlert("Something went Wrong");
    } finally {
      hideLoader();
    }
  };
  useEffect(() => {
    fetchusersList();
  }, []);
  const handleDeleteUser = async () => {};
  let rowData =
    usersData &&
    usersData.map((d) => ({
      name: d.name,
      email: d.email,
      role: d.role,
      status: d.isActive ? "Active" : "Blocked",
      action: (
        <div className="flex gap-4">
          <Trash2
            onClick={handleDeleteUser}
            className="text-red-400 cursor-pointer hover:text-red-500 duration-300 ease-in-out"
          />
          <Eye className="text-gray-500 cursor-pointer hover:text-gray-600 duration-300 ease-in-out" />
        </div>
      ),
    }));

  return (
    <div className="w-full mt-16 lg:mt-8 ">
      <div className="flex justify-end pr-6 pb-4">
        <div>
          <Select options={buttonData} />
        </div>
      </div>
      <Table columns={usersListColumn} rows={rowData} />
    </div>
  );
};

export default Users;
