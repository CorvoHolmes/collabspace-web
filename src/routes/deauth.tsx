import { Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

function DeauthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/me" element={<Profile />} />

      <Route path="*" element={<h1>Not found!</h1>} />
    </Routes>
  );
}

export default DeauthRoutes;
