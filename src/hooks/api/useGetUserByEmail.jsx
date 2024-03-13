import axios from "axios";
import { BASE_URL } from "../../utils";

const useGetUserByEmail = () => {
  const getUserByEmail = async (email) => {
    try {
      const { data } = await axios.get(BASE_URL + `/users?email=${email}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return { getUserByEmail };
};

export default useGetUserByEmail;
