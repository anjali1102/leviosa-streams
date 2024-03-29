import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const {
    user: { token },
  } = useSelector((state) => state.auth);

  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate replace to="/login" state={{ from: location }} />
  );
};

const NotRequireAuth = ({ children }) => {
  const {
    user: { token },
  } = useSelector((state) => state.auth);

  const location = useLocation();

  return token ? <Navigate to="/" state={{ from: location }} /> : children;
};

export { RequireAuth, NotRequireAuth };
