import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/Register";
import { VerifyUser } from "./utils/VerifyUser";
import Home from "./components/Home";

function App() {
  return (
    <div className="p-2 w-screen h-screen flex items-center justify-center">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<VerifyUser />}>
          <Route path="/chatapp" element={<Home />} />
        </Route>
        <Route path="/" element={<Navigate to="/chatapp" />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
