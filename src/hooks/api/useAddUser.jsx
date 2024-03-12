import { BASE_URL } from "../../utils";
import axios from "axios";

const useAddUser = () => {
  const addUser = async (name, email, password) => {
    try {
      await axios.post(BASE_URL + "/users", {
        name,
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { addUser };
};

export default useAddUser;
