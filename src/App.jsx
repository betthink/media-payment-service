// library
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// components
import HomePage from "./pages/Home/HomePage";
import RegistrationPage from "./pages/Registration/RegistrationPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import TopUpPage from "./pages/TopUp/TopUpPage";
import TransactionPage from "./pages/Transaction/TransactionPage";
import PaymentPage from "./pages/Payment/PaymentPage";
import Login from "./pages/Login/LoginPage";
import UpdateProfilePage from "./pages/Profile/UpdateProfilePage";


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="home" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="topup" element={<TopUpPage />} />
          <Route path="transaction" element={<TransactionPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="update-profile" element={<UpdateProfilePage />} />
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
