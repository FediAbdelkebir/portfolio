import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Apply saved theme on initial load before any rendering
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.classList.add(savedTheme);

createRoot(document.getElementById("root")!).render(<App />);
