import { useEffect } from "react";
import useGetUsers from "../hooks/api/useGetUsers";

const Users = () => {
  const { users, getUsers } = useGetUsers();
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="container">
      <div>
        <div className="w-[800px] h-[500px] mx-auto mt-20">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-300">
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
