import { useCallback, useEffect, useState } from "react";

export default function useDark() {
  const [activeState, setActiveState] = useState("light");

  const updateState = useCallback((newState: string) => {
    setActiveState(newState);
    window.localStorage.setItem("theme", newState);
  }, []);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      updateState("dark");
      return;
    }
    updateState("light");
  }, []);

  const toggleMode = () => {
    if (localStorage.getItem("theme") === "dark") {
      updateState("light");
      document.documentElement.classList.remove("dark");
    } else {
      updateState("dark");
      document.documentElement.classList.add("dark");
    }
  };

  return { toggleMode, activeState } as const;
}
