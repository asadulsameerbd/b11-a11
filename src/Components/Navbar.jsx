import { Link, NavLink } from "react-router";

const Navbar = () => {
  const menu = (
    <>
      <div className="flex gap-8 font-lg">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Find Tutors</NavLink>
        <NavLink to="/">Add Tutorials</NavLink>
        <NavLink to="/">My Tutorials</NavLink>
        <NavLink to="/">My Booked Tutors</NavLink>
      </div>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#d36f74]  shadow-sm">
        <div>
            
        </div>
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
          <div>
            <NavLink className="btn px-7 bg-[#eb3b5a] btn-secondary">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
