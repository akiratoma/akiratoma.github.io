import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  LineElement,
  PointElement,
  RadialLinearScale,
} from "chart.js";
import App from "./App.tsx";

Chart.defaults.animation = false;
Chart.register(BarElement, CategoryScale, LinearScale, LineElement, PointElement, RadialLinearScale);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
