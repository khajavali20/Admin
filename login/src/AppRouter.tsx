import ForgotPasswordPage from "./pages/ForgotPassword/ForgotPassword";
import LoginPage from "./pages/Login/Login";
import ResetPasswordPage from './pages/ResetPassword/Reset';
import { Routes, Route } from "react-router-dom";
import VerifyOtpPage from "./pages/VerifyOtp/VerifyOtp";

export default function AppRouter() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/verify" element={<VerifyOtpPage />} />
      </Routes> 
    </div>
  )
}
