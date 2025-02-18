import { useEffect, useState } from "react"
import { usersList } from "../../container/apiCall/admin"
import Table from "../../components/table/Table"

const Users = () => {
    const [usersData, setUsersData] = useState([])
    const fetchusersList = async()=>{
    //    const res = await usersList()
    //    if(res.data.length){
    //     setUsersData(res.data)
    //    }
    }
    useEffect(()=>{
        fetchusersList()
    },[])
  return (
    <div>
        {/* <Table/> */}
    </div>
  )
}

export default Users