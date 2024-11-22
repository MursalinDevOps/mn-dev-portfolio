import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ContactMe from './components/Contact/ContactMe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
  {
    path:'/about',
    element:<About></About>
  },
  {
    path:'/projects',
    element:<Projects></Projects>
  },
  {
path:'/contact',
element:<ContactMe></ContactMe>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
