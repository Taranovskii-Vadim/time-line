import axios from "axios";

import { IUser } from "../models/users/types";
import { IResponse } from "../types";

export const usersApi = {
  async fetchUsers(): Promise<IUser[]> {
    const { data } = await axios.get<IResponse<IUser[]>>("/users");
    return await data.result;
  },
};
