import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.webp";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pages = ["Home", "Education", "Projects", "Contact"];

  return (
    <div className="flex justify-between sm:justify-around items-center h-[70px] px-4 shadow-md relative">
      <span className="flex justify-center items-center cursor-pointer">
        <img
          src={logo}
          alt="Anas.dev Logo"
          className="h-[100px] sm:h-[150px] object-contain"
        />
      </span>

      <button
        className="flex sm:hidden cursor-pointer text-[30px]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <FormatAlignJustifyIcon fontSize="inherit" />
      </button>

      <ul className="hidden sm:flex justify-around items-center text-[20px] gap-[40px]">
        {pages.map((page, idx) => (
          <li
            key={idx}
            className="p-[10px] cursor-pointer font-light hover:bg-cyan-300 hover:font-normal rounded transition"
          >
            <NavLink
              to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
              className={({ isActive }) =>
                `${isActive ? "font-medium" : "font-light"} no-underline`
              }
            >
              {page}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul
        className={`absolute top-[70px] left-0 w-full bg-white shadow-lg flex flex-col items-center text-[20px] sm:hidden z-50 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        {pages.map((page, idx) => (
          <li
            key={idx}
            className="p-[15px] w-full text-center cursor-pointer font-light hover:bg-cyan-300 active:bg-cyan-400 hover:font-normal transition"
            onClick={() => setIsOpen(false)}
          >
            <NavLink
              to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
              className={({ isActive }) =>
                `${isActive ? "font-medium" : "font-light"} no-underline`
              }
            >
              {page}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
