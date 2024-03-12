import { useState } from "react";
import { BASE_URL } from "../../utils";
import axios from "axios";

const useGetUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get(BASE_URL + "/users");
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { users, getUsers };
};

export default useGetUsers;
