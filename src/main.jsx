import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import AouthProvider from './Provider/AouthProvider';
import router from './routes/router';
import ThemeProvider from './Provider/ThemeProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AouthProvider>
        <RouterProvider router={router} />
      </AouthProvider>
    </ThemeProvider>
  </StrictMode>
);
