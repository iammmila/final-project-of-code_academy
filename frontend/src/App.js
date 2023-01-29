import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ROUTES } from './routes/route';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter(ROUTES)
function App() {
  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
}

export default App;
