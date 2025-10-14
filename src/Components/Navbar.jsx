import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  // logout

  const handleLogout = () => {
    logout();
    Swal.fire({
      title: "User Logout Successfully",
      icon: "success",
      draggable: true,
    });
  };

  // menu

  const menu = (
    <>
      <div className="flex gap-8 font-lg">
        <NavLink
          className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#EB3B5A] after:transition-all after:duration-500 md:hover:after:w-full"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="relative after:content-[''] after:absolute after:w-0  after:left-0 after:h-[2px] after:-bottom-2 after:bg-[#EB3B5A] md:hover:after:w-full after:transition-all after:duration-500"
          to="/find-tutors"
        >
          Find Tutors
        </NavLink>
        <NavLink
          className="relative after:content-[''] after:absolute after:w-0  after:left-0 after:h-[2px] after:-bottom-2 after:bg-[#EB3B5A] md:hover:after:w-full after:transition-all after:duration-500"
          to="/add-tutorials"
        >
          Add Tutorials
        </NavLink>
        <NavLink
          className="relative after:content-[''] after:absolute after:w-0  after:left-0 after:h-[2px] after:-bottom-2 after:bg-[#EB3B5A] md:hover:after:w-full after:transition-all after:duration-500"
          to="/my-tutorials"
        >
          My Tutorials
        </NavLink>
        <NavLink
          className="relative after:content-[''] after:absolute after:w-0  after:left-0 after:h-[2px] after:-bottom-2 after:bg-[#EB3B5A] md:hover:after:w-full after:transition-all after:duration-500"
          to="/booked-tutors"
        >
          My Booked Tutors
        </NavLink>
      </div>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#d36f74]  shadow-sm">
        <div></div>
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
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
          {user ? (
            // profile
            <div className="mx-5">
              <div onClick={() => setOpen(!open)} className="relative avatar cursor-pointer">
                <div className="relative w-12 rounded-full">
                  <img
                    src={
                      user.photoURL ||
                      "https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                    }
                  />
                </div>
                {/* Tooltip */}
                <div className="absolute w-full left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {user.displayName || "User"}
                </div>

                {open && (
                  <div className="absolute top-15 right-5  flex flex-col">
                    <button
                      onClick={handleLogout}
                      className="btn  px-2 bg-[#eb3b5a] btn-secondary"
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
