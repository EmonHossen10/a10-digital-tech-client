import { useLoaderData } from "react-router-dom";
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

  // ************************************************

  const addToCart = (productId, Image, Name, Band_Name, Price) => {
    const newData = { productId, Image, Name, Band_Name, Price };
    console.log(newData);

    // fetching

    fetch("https://digital-tech-server.vercel.app/addcart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.error);
        if (data.error) {
          Swal.fire({
            icon: "error",
            title: "Already exist",
            text: "Already exist in the cart",
          });
        }

        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Successfully Added",
            text: "Successfully Added to the cart",
          });
        }
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
            <div className="my-3">
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
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-10 ">
            <button className="btn btn-success" onClick={handleBuy}>
              Buy Now
            </button>

            <button
              onClick={() => addToCart(_id, Image, Name, Band_Name, Price)}
              className="btn btn-info"
            >
              {" "}
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ProductDetails;
