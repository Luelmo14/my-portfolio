import { useState, useEffect } from "react";

export function useScrollspy(ids: string[], offset: number = 0) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = rect.top + scroll;
          const bottom = rect.bottom + scroll;

          return { id, top, bottom };
        })
        .find(
          ({ top, bottom }) =>
            scroll >= top - offset && scroll < bottom - offset
        );

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
