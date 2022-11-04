import "../src/styles/icons/icons.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Index";
import Profile from "./pages/profile/Index";
import Home from "./pages/home/Index";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/profile" exact element={<Profile />} />
      </Routes>
    </>
  );
}
