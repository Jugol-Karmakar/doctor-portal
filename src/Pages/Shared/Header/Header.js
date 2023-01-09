import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../Images/image/logo.png";
import { toast } from "react-toastify";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    toast("Log out Successfully..");
  };

  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/doctors">Doctors</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        {user ? (
          <button
            onClick={logOut}
            className="bg-blue-600 px-6 text-white font-medium"
          >
            Sign Out
          </button>
        ) : (
          <button className="border px-6 border-blue-600 font-semibold hover:bg-blue-600  hover:text-white transition-all duration-300">
            <Link to="/signin">Sign In</Link>
          </button>
        )}
      </li>
    </>
  );
  return (
    <div className="bg-base-100 sticky top-0 z-40 shadow">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <Link to="/" className="flex items-center">
            <img className="w-20 mr-2" src={logo} alt="" />
            <h4 className="text-lg font-medium">Doctor Portal</h4>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-2">{menuItem}</ul>
        </div>
        {/* <div className="flex justify-end">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden justify-end"
          >
            Dashboard Item
          </label>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
