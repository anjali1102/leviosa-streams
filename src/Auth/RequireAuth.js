import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const RequireAuth = ({ children }) => {
  const login = useAuth();
  // const location = useLocation();

  return login ? children : <Navigate to="/login" />;
};

export { RequireAuth };
