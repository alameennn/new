import { NavLink } from "react-router";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Foodie</div>
        <ul className="navbar-links">
          <li>
            <NavLink
              to="./FoodItems"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Food Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="./AddFood"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Add Food Item
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;