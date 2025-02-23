import { useEffect, useState } from "react";
import { deleteUser, usersList } from "../../container/apiCall/admin";
import Table from "../../components/table/Table";
import { usersListColumn } from "../../utility/admin";
import { userDataAdminApiProps } from "../../../interfaces/apiInterface";
import {
  confirmShow,
  errorAlert,
  hideLoader,
  showLoader,
} from "../../components/ui/loader/loader";
import { Eye, UserMinus, UserPlus } from "lucide-react";
import Select from "../../components/select/Select";
import { adminUsersListType } from "../../utility/data";

const Users = () => {
  const [usersData, setUsersData] = useState<userDataAdminApiProps[]>([]);
  const [userType, setUserType] = useState<any>(null);
  const fetchusersList = async () => {
    showLoader();
    try {
      const res = await usersList({ isActive: userType ? false : null });
      setUsersData(res.data as userDataAdminApiProps[]);
    } catch (error) {
      errorAlert("Something went Wrong");
    } finally {
      hideLoader();
    }
  };
  console.log(userType);
  useEffect(() => {
    fetchusersList();
  }, [userType]);
  const deleteFunction = async (id: string) => {
    const res = await deleteUser(id);
    if (res) fetchusersList();
  };
  const handleDeleteUser = async (id: string) => {
    confirmShow(
      "Are you sure?",
      `You want to ${userType === null ? "delete" : "unblock"} this user`,
      async () => await deleteFunction(id)
    );
  };
  let rowData =
    usersData &&
    usersData.map((d, i: number) => ({
      sn: i + 1,
      name: d.name,
      email: d.email,
      role: d.role,
      status: d.isActive ? "Active" : "Blocked",
      action: (
        <div className="flex gap-6">
          {userType === null ? (
            <UserMinus
              onClick={() => handleDeleteUser(d._id)}
              className="text-red-400 cursor-pointer hover:text-red-500 duration-300 ease-in-out"
            />
          ) : (
            <UserPlus
              onClick={() => handleDeleteUser(d._id)}
              className="text-green-400 cursor-pointer hover:text-green-500 duration-300 ease-in-out"
            />
          )}
          <Eye className="text-gray-500 cursor-pointer hover:text-gray-600 duration-300 ease-in-out" />
        </div>
      ),
    }));
  console.log(usersData);

  return (
    <div className="w-full mt-16 lg:mt-8 ">
      <div className="flex justify-end pr-6 pb-4">
        <div>
          <Select
            onChange={(e) => setUserType(e.target.value)}
            name="userType"
            value={userType}
            options={adminUsersListType}
            placeholder="Select User Type"
          />
        </div>
      </div>
      <Table columns={usersListColumn} rows={rowData} />
      <div>
        {rowData?.length === 0 && (
          <div className="text-center mt-8">
            <div className="text-xl font-semibold">No Users Found</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
