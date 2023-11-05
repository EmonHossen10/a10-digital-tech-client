import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-[500px]"
          src="https://i.ibb.co/b75V90X/404-error-with-landscape-concept-illustration-114360-7888.jpg"
          alt=""
        />
        <Link to="/">
          <button className="btn btn-accent" >Go to Home</button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
