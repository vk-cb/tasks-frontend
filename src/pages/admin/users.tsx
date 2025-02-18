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
  let rowData =
    usersData &&
    usersData.map((d) => ({
      name: d.name,
      email: d.email,
      role: d.role,
      status: d.isActive ? "Active" : "Blocked",
      action: "delete",
    }));
  return (
    <div className="w-full mt-16 lg:mt-8">
      <Table columns={usersListColumn} rows={rowData} />
    </div>
  );
};

export default Users;
