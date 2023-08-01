import useDark from "../hooks/useDarkMode";
import LightMoon from "../assets/LightMoon.svg"
import DarkMoon from "../assets/DarkMoon.svg"

export default function ModeButton() {
  const { toggleMode, activeState } = useDark();
  return (
    <button onClick={toggleMode}>
      {activeState === "dark" ? (
        <span className="flex items-center dark:text-white">
          <img src={LightMoon} className="w-4 md:w-6" alt="light mode" />
          <span className="ml-3 text-sm md:text-base">Light Mode</span>
        </span>
      ) : (
        <span className="flex items-center dark:text-white">
          <img src={DarkMoon} className="w-4 md:w-6" alt="dark mode" />
          <span className="whitespace-pre ml-3 text-sm md:text-base">Dark Mode</span>
        </span>
      )}
    </button>
  );
}
