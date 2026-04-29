// ─── App.tsx ───────────────────────────────────────────────────────────────────

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard     from './pages/Dashboard'
import Login         from './pages/auth/Login'
import Register      from './pages/auth/Register'
import OtpVerify     from './pages/auth/OtpVerify'
import AuthCallback  from './pages/auth/AuthCallback'
import ForgotPassword from './pages/auth/ForgotPassword'

// LandingPage tetap di posisi semula (tidak diubah strukturnya)
import LandingPage   from './pages/LandingPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                element={<LandingPage />} />
        <Route path="/login"           element={<Login />} />
        <Route path="/register"        element={<Register />} />
        <Route path="/otp"             element={<OtpVerify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/callback"   element={<AuthCallback />} />
        <Route path="/dashboard"       element={<Dashboard />} />
        <Route path="*"                element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}