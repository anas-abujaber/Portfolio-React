import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="flex justify-around h-[70px]">
      <span className="flex justify-center items-center text-[30px] cursor-pointer font-medium">
        <img
          src={logo}
          alt="Anas.dev Logo"
          className="h-[150px] object-contain"
        />
      </span>
      <ul className="flex justify-around items-center text-[20px] gap-[40px]">
        {["Home", "Education", "Projects", "Contact"].map((page, idx) => (
          <li
            key={idx}
            className="p-[20px] cursor-pointer font-light hover:bg-cyan-300 hover:font-normal"
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
