import { useState, useEffect } from "react";

export function useScrollspy(ids: string[], offset: number = 0) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const scrollBottom = scroll + windowHeight;

      // Check if the user is near the bottom for the last section
      const nearBottom =
        (documentHeight - scrollBottom) / documentHeight <= 0.03;
      if (nearBottom) {
        setActiveId(ids[ids.length - 1]); // Set the last section as active
        return;
      }

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return { id, visibility: 0 };
          const rect = element.getBoundingClientRect();
          const elementHeight = rect.height;

          // Calculate the amount of the section visible in the viewport
          const visibleHeight = Math.max(
            0,
            Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
          );
          const visibility = (visibleHeight / elementHeight) * 100; // Percentage of visibility

          return { id, visibility };
        })
        .find(({ visibility }) => visibility >= 50); // 50% visibility threshold

      setActiveId(position?.id || "");
    };

    listener();
    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
}
