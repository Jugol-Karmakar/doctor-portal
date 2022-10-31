import React from "react";
import { Link, Outlet } from "react-router-dom";
import dashboardlogo from "../../Images/image/logo.png";

const Dashboard = () => {
  return (
    <div className="container mx-auto mt-4">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu overflow-y-auto w-80 bg-[#1d2a4e] text-white">
            {/* <!-- Sidebar content here --> */}
            <div className="flex items-center justify-center py-2 my-2">
              <img className="w-14 h-10 mr-3" src={dashboardlogo} alt="" />
              <h2 className="text-2xl font-bold">DashBoard</h2>
            </div>
            <li className="hover:bg-gradient-to-r from-blue-500 to-blue-700  font-medium">
              <Link to="/dashboard">My Appointment</Link>
            </li>
            <li className="hover:bg-gradient-to-r from-blue-500 to-blue-700  font-medium">
              <Link to="/dashboard/review">My Reviews</Link>
            </li>
            <li className="hover:bg-gradient-to-r from-blue-500 to-blue-700  font-medium">
              <Link to="/dashboard/addDoctors">Add Doctors</Link>
            </li>
            <li className="hover:bg-gradient-to-r from-blue-500 to-blue-700  font-medium">
              <Link to="/dashboard/myProfile">My Profile</Link>
            </li>
            <li className="hover:bg-gradient-to-r from-blue-500 to-blue-700  font-medium">
              <Link to="/dashboard/users">All Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
