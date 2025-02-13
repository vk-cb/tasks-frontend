import { taskStatusApiResponse } from "../../../interfaces/apiInterface"
import { makeApiRequest } from "../../apis/function"
import { API_URLS } from "../../apis/urls"

export const getRoles = async():Promise<any>=>{
    return await makeApiRequest("GET",API_URLS.GET_ROLES)
}
export const getTaskStatus = async(): Promise<taskStatusApiResponse>=>{
    return await makeApiRequest("GET",API_URLS.GET_TASK_STATUS)
}