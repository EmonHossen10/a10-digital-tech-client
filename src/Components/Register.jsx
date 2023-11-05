import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, handleUpdateProfile } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // make user

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        handleUpdateProfile(name, photo).then(() => {
          Swal.fire({
            icon: "success",
            title: "Successful",
            text: "  Successfully Make User ",
          });
        });
      })

      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200   ">
        <div className="shadow-2xl bg-base-300 w-6/12 rounded-xl mx-auto">
          <form onSubmit={handleRegister} className="card-body">
            <h2 className="text-black font-bold text-3xl text-center pb-4">
              Register Here
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo Here"
                className="input input-bordered input-info  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Name </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your  Name "
                className="input input-bordered input-info  "
                required
              />
            </div>

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
              <button className="btn btn-info">Register</button>
            </div>
            <div className="text-center mt-2">
              <p>
                Already Have An Account ?{" "}
                <Link className="text-blue-800 font-bold underline" to="/login">
                  Login{" "}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
