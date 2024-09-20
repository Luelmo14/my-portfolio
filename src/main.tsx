import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import "unfonts.css";
import "./i18n";
import { setScrollbarWidth } from "@/utils/scrollbarWidth";

function Root() {
  useEffect(() => {
    setScrollbarWidth();
    window.addEventListener("resize", setScrollbarWidth);
    return () => window.removeEventListener("resize", setScrollbarWidth);
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
