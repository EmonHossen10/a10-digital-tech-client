import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { brand_name, brand_image } = brand;

  return (
    <div className="card   bg-base-100 shadow-xl">
      <figure>
        <img src={brand_image} alt="pic" className="w-[500px] h-[300px]" />
      </figure>
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
