import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import emailjs from 'emailjs-com';
import App from './App.tsx';
import './index.css';

// Initialize EmailJS
emailjs.init("ZKzMGfxWiWUTmtiiK");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
