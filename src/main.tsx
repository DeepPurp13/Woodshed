import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText.js";
import { Flip } from "gsap/Flip";
import { CustomEase } from "gsap/CustomEase";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import App from "./App";
import "../styles/template.css";

gsap.registerPlugin(ScrollTrigger, SplitText, Flip, CustomEase, ScrollToPlugin);
CustomEase.create("hop", ".87, 0, .13, 1");
CustomEase.create("common", ".23, .65, .74, 1.09");
CustomEase.create("custom", ".23, .65, .74, 1.09");

function initializeThemeAndFonts(): void {
  const savedTheme = localStorage.getItem("template.theme");
  const initialTheme = savedTheme === "dark" ? "dark" : "light";
  const htmlEl = document.documentElement;
  const bodyEl = document.body;

  htmlEl.setAttribute("color-scheme", initialTheme);
  htmlEl.style.setProperty("--font-manrope", '"Manrope", sans-serif');
  htmlEl.style.setProperty(
    "--font-jetbrains-mono",
    '"JetBrains Mono", sans-serif',
  );
  bodyEl.style.setProperty("--_font-default", "var(--font-manrope)");
  bodyEl.style.setProperty("--_font-accent", "var(--font-jetbrains-mono)");
}

initializeThemeAndFonts();

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Root element #root not found");
}

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
