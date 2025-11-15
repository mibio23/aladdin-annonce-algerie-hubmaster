import { createRoot } from 'react-dom/client'
import AppWithLanguageRouter from './AppWithLanguageRouter.tsx'
import './index.css'

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

const root = createRoot(container);

// Removed StrictMode to prevent double renders and improve performance
// Using new multilingual URL-based routing system
root.render(<AppWithLanguageRouter />);
