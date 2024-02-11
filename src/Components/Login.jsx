import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Navbar></Navbar>

      <div
        className="hero min-h-screen  py-32   "   
        style={{
          backgroundImage: 'url("https://i.ibb.co/8zBT99c/background.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="shadow-2xl bg-base-300 lg:w-6/12 w-11/12 rounded-xl mx-auto"  data-aos="zoom-in-right" data-aos-duration="2000">
          <form onSubmit={handleLogin} className="card-body"   
     
      >
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
              <button className="btn btn-accent  ">Login</button>

              
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
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1  h-px sm:w-16 bg-gray-700"></div>
              <p className="px-3 text-sm text-center text-gray-500">
                Login with social accounts
              </p>
              <div className="flex-1  h-px sm:w-16 bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleGoogleLogin}
                aria-label="Log in with Google"
                className="p-1 rounded-sm"
              >
                <FcGoogle className="text-3xl"></FcGoogle>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Login;
