import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Swal from "sweetalert2";

const Update = () => {
  const loadedUser = useLoaderData();
  console.log(loadedUser);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const Image = form.photo.value;
    const Name = form.Name.value;
    const p_type = form.productType.value;
    const Price = form.price.value;
    const rating = form.rating.value;

    const updatedProduct = {
      Image,
      Name,
      p_type,
      Price,
      rating,
    };
    console.log(updatedProduct);

    // fetching

    fetch(`https://digital-tech-server.vercel.app/branddetails/${loadedUser._id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(updatedProduct)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.matchedCount>0){
            Swal.fire({
                icon: "success",
                title: "Successfully ",
                text: "Products Successfully Updated",
              });
        }
      });
  };
  return (
    <div>
      <Navbar></Navbar>
 

      <div className="hero min-h-screen bg-base-200   ">
        <div className="shadow-2xl bg-base-300 w-8/12 rounded-xl mx-auto">
          <form onSubmit={handleUpdateProduct} className="card-body">
            <h2 className="text-black font-bold text-3xl text-center pb-4">
              Update a Product
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
                <span className="label-text">Product Name </span>
              </label>
              <input
                type="text"
                name="Name"
                placeholder="Product Name "
                className="input input-bordered input-info  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name :</span>
              </label>
              <input
                type="text"
                name="productName"
                placeholder="Product Name "
                className="input input-bordered input-info  "
                defaultValue={loadedUser?.Band_Name}
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Type of Products</span>
              </label>
              <input
                type="text"
                name="productType"
                placeholder="Products Type"
                className="input input-bordered input-info  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price </span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price here"
                className="input input-bordered input-info  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Ratings</span>
              </label>
              <input
                type="number"
                name="rating"
                placeholder="ratings"
                className="input input-bordered input-info  "
                required
              />
            </div>

            {/* ************************************************ */}
            <div className="form-control mt-6">
              <button className="btn btn-accent">Update Product</button>
            </div>
          </form>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Update;
