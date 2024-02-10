import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import logo from "../../public/logo.png";
import Content from "../Content/Content";

const Navbar = () => {
  const { user, Logout } = useContext(AuthContext);
  const [mode, setMode] = useState("light");
  const changeTheme = () => {
    const html = document.documentElement;

    if (mode == "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  };

  useEffect(() => {
    const currentMode = localStorage.getItem("mode") || "light";
    setMode(currentMode);
    const html = document.documentElement;
    html.classList.add(currentMode);
  }, []);

  const HandleLogout = () => {
    Logout().then(() => {
      Swal.fire({
        icon: "success",
        title: "Successful",
        text: "  Successfully LogOut ",
      });
    });
  };

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
    <Content>
      <div className="navbar bg-base-100    ">
      <div className="navbar-start   ">
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
          <img className=" hidden md:block lg:w-[180px]  w-[100px]  " src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  ">{navlinks}</ul>
      </div>
      {/* display user name */}
      <div className="navbar-end ">
        {user ? (
          <div className="flex">
            <p className=" flex  flex-col lg:flex-row items-center gap-2 lg:mr-3">
              <span className="lg:text-lg  font-semibold">
                {user.displayName}
              </span>
              <div className="avatar">
                <div className="w-8 mask rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
            </p>

            <button onClick={HandleLogout} className="btn btn-ghost ">
              LogOut
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-ghost ">Login</button>
          </Link>
        )}
      </div>
      {/* theme change here */}
      <button onClick={changeTheme} className="btn ">
        Theme{" "}
      </button>
    </div>
    </Content>
  );
};

export default Navbar;
