import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { ContractPage } from "./pages/Contract";
import { QueryPage } from "./pages/Query";
import { ErrorPage } from "./pages/Error";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { AuthProvider } from "./contexts/auth";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/query"
          element={
            <ProtectedRoute>
              <QueryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contract/:id"
          element={
            <ProtectedRoute>
              <ContractPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AuthProvider>
  );
}
