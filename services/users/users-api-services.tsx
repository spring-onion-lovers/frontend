import { FindUserSuccessResponse } from "@/types/services/user";
import apiService from "../../utils/service-utils";

export namespace UsersAPIService {
  export async function findUser(user_id: number) {
    try {
      const url = `/api/users/${user_id}`;
      const response = await apiService.get(url);
      return response.data as FindUserSuccessResponse;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return;
    }
  }
}
