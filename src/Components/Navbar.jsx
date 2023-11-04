import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = (
    <>
      <li>
        {" "}
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline font-bold  " : ""
          }
        >
          Home{" "}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addproduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline font-bold " : ""
          } //underline
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mycart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " underline font-bold " : ""
          } //bg-sky-300 p-2 rounded-lg
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <Link to="/">
          <img
            className=" lg:w-[200px] w-[100px]  "
            src="https://i.ibb.co/V2qz5Jc/logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  ">{navlinks}</ul>
      </div>
      <div className="navbar-end ">
        <Link to="/login" >
          <button className="btn btn-ghost ">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
