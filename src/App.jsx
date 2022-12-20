import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { ContractPage } from "./pages/Contract";
import { QueryPage } from "./pages/Query";
import { ProtectedRoute } from "./components/ProtectedRoute";
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
        <Route path="/contract/:id" element={<ContractPage />} />
      </Routes>
    </AuthProvider>
  );
}
