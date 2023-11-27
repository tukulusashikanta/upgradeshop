import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useState } from 'react';
import Home from './components/Layout';
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUp";
import { AuthContext } from "./components/Auth";
import OrderStep from './components/OrderStep';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "sign-up",
        element: <SignUpPage />
      },
      {
        path: "product/:productId",
        element: <OrderStep />
      }
    ]
  },
]);

export default function App() {
  const [authTokens, setAuthTokens] = useState(
    !!window.sessionStorage.getItem("access-token")
  );
  const setTokens = (data) => {
    window.sessionStorage.setItem("access-token", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    </AuthContext.Provider>
  );
}
