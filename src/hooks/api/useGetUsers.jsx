import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "../../redux/slices/usersSlice";
import { BASE_URL } from "../../utils";

const useGetUsers = () => {
  const dispatch = useDispatch();
  const getUsers = async () => {
    try {
      const { data } = await axios.get(BASE_URL + "/users");
      dispatch(addUsers(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { getUsers };
};

export default useGetUsers;
