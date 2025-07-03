import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) => {
    return {
      fontWeight: isActive ? 500 : 200,
      textDecoration: "none",
    };
  };

  return (
    <div className="Navbar">
      <span className="logoName">
        <img
          src={logo}
          alt="Anas.dev Logo"
          style={{ height: "150px", objectFit: "contain" }}
        />
      </span>
      {/* text logo if i need it */}
      {/* <span className="logoName">
        <span style={{ fontWeight: 700 }}>Anas</span>.dev
      </span> */}
      <ul className="navPages">
        <li>
          <NavLink to="/" style={navLinkStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" style={navLinkStyle}>
            Education
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" style={navLinkStyle}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={navLinkStyle}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
