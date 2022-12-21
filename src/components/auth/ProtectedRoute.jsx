import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { useContext, useState, useEffect } from "react";
import { api } from "../../services/api";

export const ProtectedRoute = ({ children }) => {
  const { token, clearToken } = useContext(AuthContext);
  const [tokenIsInvalid, setTokenIsInvalid] = useState(false);

  if (!token) {
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    const testToken = async () => {
      try {
        await api.get("/user/isValid", {
          headers: {
            Authorization: `token ${token}`,
          },
        });
      } catch (err) {
        setTokenIsInvalid(true);
      }
    };

    testToken();
  }, []);

  if (tokenIsInvalid) {
    clearToken();
    return <Navigate to="/login" />;
  }

  return children;
};
