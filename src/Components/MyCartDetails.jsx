import Swal from "sweetalert2";

const MyCartDetails = ({ data }) => {
  const { Image, Name, Band_Name, Price } = data;
  console.log(data);

  const handleBuy = () => {
    Swal.fire({
      icon: "success",
      title: "Successfully Buy",
      text: "Successfully Buy the product",
 
    });
  };
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
          <button onClick={handleBuy} className="btn btn-success">
            Buy Now{" "}
          </button>
          <button className="btn btn-warning">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MyCartDetails;
