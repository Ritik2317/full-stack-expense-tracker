import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Income from './pages/Dashboard/Income';
import Home from './pages/Dashboard/Home';
import Expense from './pages/Dashboard/Expense';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import UserProvider from './context/userContext';

// ✅ Add this import
import { Toaster } from 'sonner';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/income',
    element: <Income />,
  },
  {
    path: '/dashboard',
    element: <Home />,
  },
  {
    path: '/expense',
    element: <Expense />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right" closeButton />
    </UserProvider>
  </StrictMode>
);
