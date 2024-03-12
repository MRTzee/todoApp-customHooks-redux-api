import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mx-auto bg-blue-500 w-full text-white font-bold text-lg">
      <ul className="flex justify-center p-4 gap-4">
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/registers">Registers</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
