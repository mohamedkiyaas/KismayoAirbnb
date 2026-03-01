import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import ExperiencesPage from './pages/ExperiencesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import HostProfilePage from './pages/HostProfilePage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import SearchResultsPage from './pages/SearchResultsPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact us",
    element: <ContactPage />,
  },
  {
    path: "/experiences",
    element: <ExperiencesPage />,
  },
  {
    path: "/host",
    element: <HostProfilePage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/search",
    element: <SearchResultsPage />,
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
