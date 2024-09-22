import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { setScrollbarWidth } from "@/utils/scrollbarWidth";
import App from "./app/App";

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
