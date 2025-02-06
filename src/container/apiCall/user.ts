import { makeApiRequest } from "../../apis/function"
import { API_URLS } from "../../apis/urls"
import {ChangeStatusProps, createTaskProps} from '../../../interfaces/apiInterface'
import {updateTaskProps} from '../../../types/apiTypes'

export const createTask = async(data :createTaskProps)=>{
    return makeApiRequest("POST", API_URLS.CREATE_TASK, data)
}

export const updateTask = async(data:updateTaskProps, id:string)=>{
    return makeApiRequest("PUT", `${API_URLS.UPDATE_TASK}${id}`, data)
}

export const getAllTask = async ()=>{
    return makeApiRequest("GET", API_URLS.GET_ALL_TASK)
}

export const getTaskById = async(id:string)=>{
    return makeApiRequest("GET", `${API_URLS.GET_TASK_BY_ID}${id}`)
}

export const deleteTask = async(id:string)=>{
    return makeApiRequest("POST", `${API_URLS.DELETE_TASK}${id}`)
}

export const changeStatus = async(data:ChangeStatusProps, id:string)=>{
    return makeApiRequest("PUT",`${API_URLS.CHANGE_STATUS}${id}`, data )
}