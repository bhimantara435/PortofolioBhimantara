import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#050816]/80 px-6 py-4 backdrop-blur-xl transition-colors duration-300 md:px-8">
      <div className="logo">
        <h1 className="text-3xl font-bold text-white transition-colors duration-300">
          Portofolio
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <ul
          className={`menu fixed left-1/2 z-40 flex -translate-x-1/2 items-center gap-4 rounded-br-2xl rounded-bl-2xl bg-white/30 p-4 backdrop-blur-md transition-all sm:gap-10 md:static md:translate-x-0 md:bg-transparent md:p-0 md:opacity-100 md:transition-none ${
            active ? "top-0 opacity-100" : "-top-10 opacity-0"
          }`}
        >
          <li>
            <a href="#beranda" className="text-base font-medium sm:text-lg">
              Beranda
            </a>
          </li>
          <li>
            <a href="#tentang" className="text-base font-medium sm:text-lg">
              Tentang
            </a>
          </li>
          <li>
            <a href="#proyek" className="text-base font-medium sm:text-lg">
              Proyek
            </a>
          </li>
          <li>
            <a href="#kontak" className="text-base font-medium sm:text-lg">
              Kontak
            </a>
          </li>
        </ul>

       <button
  type="button"
  onClick={toggleTheme}
  className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
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