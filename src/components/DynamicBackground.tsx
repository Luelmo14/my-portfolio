import React, { useEffect, useRef } from "react";
import { Gradient, applyGrain } from "@prodbyeagle/grainient";

const DynamicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Apply gradient
    Gradient(canvas, {
      colors: ["#FAF3E8", "#F5E6D3"], // Lighter beige/latte colors
      type: "linear",
      angle: 45,
    });

    // Apply grain
    applyGrain(ctx, canvas.width, canvas.height, 8); // Reduced grain intensity

    // Animation function
    let offset = 0;
    const animate = () => {
      offset += 0.5;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Re-apply gradient
      Gradient(canvas, {
        colors: ["#FAF3E8", "#F5E6D3"],
        type: "linear",
        angle: 45 + Math.sin(offset * 0.01) * 5, // Slight angle variation
      });

      // Re-apply grain with slight variation
      applyGrain(
        ctx,
        canvas.width,
        canvas.height,
        8 + Math.sin(offset * 0.05) * 1.5
      );

      requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

export default DynamicBackground;
