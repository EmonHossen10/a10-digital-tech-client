import { useLoaderData,  } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const data = useLoaderData();
  const { _id, Image, Name, Band_Name, Price } = data;

  const handleBuy = () => {
    Swal.fire({
      icon: "success",
      title: "Successfully Buy.",
      text: "You Buy the product Successfully",
       
    });
  };
  return (
    <div>
      <Navbar></Navbar>

      <div className="card  my-10 rounded-xl w-10/12 mx-auto  bg-base-100 shadow-xl">
        <figure>
          <img src={Image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {Name}
            <div className="badge badge-accent ">{Band_Name}</div>
          </h2>
          <p>This is the best product </p>
          <div className="text-center  ">
            <p className="text-2xl">Price : {Price}</p>
            <p className="my-3">
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
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </p>
          </div>
          <div className="flex justify-center gap-10 ">
            <button className="btn btn-success" onClick={handleBuy}>Buy Now </button>
            <button className="btn btn-info" > Add to cart</button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
