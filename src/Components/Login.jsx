import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { loginUser, GoogleSignIn } = useContext(AuthContext);

  const location = useLocation();
  console.log("location in login page", location);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // login user
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          title: "Successfully added",
          text: "Products Successfully added to backend",
        });

        // navigate after login

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  /// google
  const handleGoogleLogin = () => {
    GoogleSignIn()
      .then((result) => {
        console.log(result.user);

        Swal.fire({
          icon: "success",
          title: "Successfully added",
          text: "Products Successfully added to backend",
        });
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);

        toast.error(error.message);
      });
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="hero min-h-screen bg-base-200   ">
        <div className="shadow-2xl bg-base-300 lg:w-6/12 w-11/12 rounded-xl mx-auto">
          <form onSubmit={handleLogin} className="card-body">
            <h2 className="text-black font-bold text-3xl text-center pb-4">
              Login Here
            </h2>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered input-info  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="input input-bordered input-info  "
                required
              />
            </div>

            {/* ************************************************ */}
            <div className="form-control mt-6">
              <button className="btn btn-accent">Login</button>
            </div>
            <div className="text-center mt-2">
              <p>
                New here ?{" "}
                <Link
                  className="text-blue-800 font-bold underline"
                  to="/register"
                >
                  Register
                </Link>
              </p>
            </div>
            <h2
              onClick={handleGoogleLogin}
              className="btn btn-xs    sm:btn-sm md:btn-md lg:btn-lg"
            >
              Google Login
            </h2>
          </form>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Login;
