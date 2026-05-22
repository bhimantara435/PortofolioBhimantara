import { useState, useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const ThemeIcon = () =>
    theme === "dark" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0-1.414-1.414M7.05 7.05 5.636 5.636M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        />
      </svg>
    );

  return (
    <div className="sticky top-0 z-50 mx-auto flex max-w-7xl flex-col gap-4 rounded-b-2xl border border-white/10 bg-[#050816]/80 px-5 py-4 backdrop-blur-xl transition-colors duration-300 md:flex-row md:items-center md:justify-between md:px-8">
      <div className="flex w-full items-center justify-between md:w-auto">
        <div className="logo">
          <h1 className="text-3xl font-bold text-white transition-colors duration-300">
            Portofolio
          </h1>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 md:hidden"
          aria-label="Toggle theme"
        >
 
        </button>
      </div>

      <div className="flex w-full items-center justify-between gap-4 md:w-auto">
        <ul className="menu flex w-full items-center justify-between gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-md md:w-auto md:justify-start md:gap-10 md:bg-transparent md:p-0">
          <li>
            <a href="#beranda" className="text-sm font-medium sm:text-base md:text-lg">
              Beranda
            </a>
          </li>
          <li>
            <a href="#tentang" className="text-sm font-medium sm:text-base md:text-lg">
              Tentang
            </a>
          </li>
          <li>
            <a href="#proyek" className="text-sm font-medium sm:text-base md:text-lg">
              Proyek
            </a>
          </li>
          <li>
            <a href="#kontak" className="text-sm font-medium sm:text-base md:text-lg">
              Kontak
            </a>
          </li>
        </ul>
<button
  type="button"
  onClick={toggleTheme}
  className="theme-toggle-btn hidden h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 md:grid"
  aria-label="Toggle theme"
>
  {theme === "dark" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0-1.414-1.414M7.05 7.05 5.636 5.636M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      />
    </svg>
  )}
</button>
      </div>
    </div>
  );
};

export default Navbar;