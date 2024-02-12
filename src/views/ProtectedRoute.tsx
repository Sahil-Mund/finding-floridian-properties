import { useAuth } from "hooks/useAuth";
import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  // Add your component's props here
  children: ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // const { loading, isAuthenticated } = useSelector((state) => state.user);
  const {isLoggedIn, userData } = useAuth();
  console.log(isLoggedIn, userData);
  

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>; 
};

export default ProtectedRoute;
