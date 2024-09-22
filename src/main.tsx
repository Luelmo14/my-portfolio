import { StrictMode, useEffect, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { setScrollbarWidth } from "@/utils/scrollbarWidth";

const App = lazy(() => import("./app/App.tsx"));

function Root() {
  useEffect(() => {
    setScrollbarWidth();
    window.addEventListener("resize", setScrollbarWidth);
    return () => window.removeEventListener("resize", setScrollbarWidth);
  }, []);

  return (
    <StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
