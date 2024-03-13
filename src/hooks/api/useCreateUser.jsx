import { BASE_URL } from "../../utils";
import axios from "axios";

const useCreateUser = () => {
  const createUser = async (data) => {
    try {
      await axios.post(BASE_URL + "/users", {
        ...data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { createUser };
};

export default useCreateUser;
