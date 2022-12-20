import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { useContext } from "react";

export const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};
