/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BrandCard = ({ brand }) => {
  const { brand_name, brand_image } = brand;
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="card  group bg-base-100 shadow-xl   "  data-aos="zoom-in-right" data-aos-duration="1000"  data-aos-anchor-placement="bottom-bottom">
      <figure>
        <img
          src={brand_image}
          alt="pic"
          className="h-[350px] w-[610px] transition group-hover:scale-125 "
        />
      </figure>
      <div className="badge badge-accent text-white  absolute right-2 top-2">
        authorized
      </div>
      <div className="card-body">
        <h2 className="card-title font-roboto  text-3xl  ">{brand_name}</h2>
        <div className="text-center mt-5">
          <Link to={`/branddetails/${brand_name}`}>
            <button
              className="btn
          bg-gradient-to-r from-cyan-400 to-blue-400 
          hover:from-green-400 hover:to-blue-500
           "
            >
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
