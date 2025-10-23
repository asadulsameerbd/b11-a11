import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "User Logout Successfully",
      icon: "success",
      draggable: true,
    });
    logout();
    navigate("/");
  };

  const menu = (
    <>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 font-lg">
        <NavLink
          className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#EB3B5A] after:transition-all after:duration-500 md:hover:after:w-full"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="relative after:content-[''] after:absolute after:w-0 after:left-0 after:h-[2px] after:-bottom-2 after:bg-[#EB3B5A] md:hover:after:w-full after:transition-all after:duration-500"
          to="/find-tutors"
        >
          Find Tutors
        </NavLink>
        <NavLink
          className="relative after:content-[''] after:absolute after:w-0 after:left-0 after:h-[2px] after:-bottom-2 after:bg-[#EB3B5A] md:hover:after:w-full after:transition-all after:duration-500"
          to="/add-tutorials"
        >
          Add Tutorials
        </NavLink>
        <NavLink
          className="relative after:content-[''] after:absolute after:w-0 after:left-0 after:h-[2px] after:-bottom-2 after:bg-[#EB3B5A] md:hover:after:w-full after:transition-all after:duration-500"
          to="/my-tutorials"
        >
          My Tutorials
        </NavLink>
        <NavLink
          className="relative after:content-[''] after:absolute after:w-0 after:left-0 after:h-[2px] after:-bottom-2 after:bg-[#EB3B5A] md:hover:after:w-full after:transition-all after:duration-500"
          to="/booked-tutors"
        >
          My Booked Tutors
        </NavLink>
      </div>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#d36f74] shadow-sm">
        <div></div>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            {/* ✅ Here is your dropdown menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-4 shadow text-black bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>

          <Link to="/" className="font-semibold cursor-pointer text-xl">
            SpyWare
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>

        <div className="navbar-end">
          {/* Dark mode switch */}
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" value="night" />
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41 ... " />
            </svg>
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14 ... " />
            </svg>
          </label>

          {/* dark or light mode */}
          <input
            type="checkbox"
            value="dark"
            className="toggle theme-controller"
          />

          {/* User info */}
          {user ? (
            <div className="mx-5 relative flex items-center gap-2">
              <div
                onClick={() => setOpen(!open)}
                className="avatar cursor-pointer relative group"
              >
                <div className="w-12 rounded-full">
                  <img
                    src={
                      user.photoURL ||
                      "https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                    }
                    alt="Profile"
                  />
                  <span className="absolute top-12 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {user.displayName || "User"}
                  </span>
                </div>

                {open && (
                  <div className="absolute top-18 right-0 flex flex-col">
                    <button
                      onClick={handleLogout}
                      className="btn px-2 bg-[#eb3b5a] btn-secondary"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex gap-5">
              <NavLink
                to="/login"
                className="btn hidden md:flex px-7 bg-[#eb3b5a] btn-secondary"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn hidden md:flex px-7 bg-[#eb3b5a] btn-secondary"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
