import { Link } from "react-router-dom";

const BrandDetailsSpecific = ({ specific }) => {
  const {_id, Image, Name, Band_Name, Price } = specific;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={Image} className=" lg:h-[300px]" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title "> Brand: {Band_Name}</h2>
        <h2 className="text-2xl font-bold">Name : {Name} </h2>

        <div className="text-center my-5">
          Price : {Price}
          <p  className="my-3">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </p>
        </div>

        <div className="  flex justify-around  ">
         <Link to={`/productdetails/${_id}`} > 
         <button className="btn btn-success">Details</button>
         </Link>
          <button className="btn btn-warning">Update</button>
        </div>
      </div>
    </div>
  );
};

export default BrandDetailsSpecific;
