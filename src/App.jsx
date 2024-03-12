import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/registers" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
