import { adminListUserProps } from "../../../interfaces/apiInterface";
import { makeApiRequest } from "../../apis/function";
import { API_URLS } from "../../apis/urls";

export const usersList = async (data: any): Promise<adminListUserProps> => {
  return makeApiRequest("POST", API_URLS.LIST_OF_USERS, data);
};
