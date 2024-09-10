import React, { useEffect, useRef } from "react";
import { Gradient, applyGrain } from "@prodbyeagle/grainient";
import { useTheme } from "@/contexts/ThemeContext";

const GrainBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderBackground = () => {
      // Set canvas size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if (theme === "light") {
        // Light theme
        Gradient(canvas, {
          colors: ["#F5E6D3", "#FAF3E8"],
          type: "linear",
          angle: 50,
        });
        applyGrain(ctx, canvas.width, canvas.height, 30);
      } else {
        // Dark theme
        Gradient(canvas, {
          colors: ["#26282a", "#26282a"],
          type: "linear",
          angle: 50,
        });
        applyGrain(ctx, canvas.width, canvas.height, 5);
      }
    };

    renderBackground();

    // Resize handler
    const handleResize = () => {
      renderBackground();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]); // Re-run effect when theme changes

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default GrainBackground;
