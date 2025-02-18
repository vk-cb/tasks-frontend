import { makeApiRequest } from "../../apis/function"
import { API_URLS } from "../../apis/urls"

export const usersList = async()=>{
    return makeApiRequest("GET", API_URLS.LIST_OF_USERS)
}