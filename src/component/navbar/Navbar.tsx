import { NavLink } from "react-router-dom";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { BsMenuApp } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-white shadow-lg mb-1 p-4">
      <div className="flex flex-row gap-2">
        
        <NavLink to="/articles">NationalGeographic</NavLink>
        <DarkModeToggle />
      </div>
      <div className="flex flex-row gap-2">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/menu">
          <BsMenuApp>
          </BsMenuApp>
          </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
