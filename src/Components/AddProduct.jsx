import Swal from "sweetalert2";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const Image = form.photo.value;
    const Name = form.productName.value;
    const Band_Name = form.brandName.value;
    const p_type = form.productType.value;
    const Price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const product = {
      Image,
      Name,
      Band_Name,
      p_type,
      Price,
      rating,
      description,
    };
    console.log(product);

    // fetching

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "success");
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Successfully added",
            text: "Products Successfully added to backend",
          });
        }
      });
  };
  return (
    <div className="">
      <Navbar></Navbar>

      <div className="hero min-h-screen bg-base-200   ">
        <div className="shadow-2xl bg-base-300 w-8/12 rounded-xl mx-auto">
          <form onSubmit={handleAddProduct} className="card-body">
            <h2 className="text-black font-bold text-3xl text-center pb-4">
              Add Product
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
                name="productName"
                placeholder="Product Name "
                className="input input-bordered input-info  "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name :</span>
              </label>
              <select className="input input-bordered input-info  " id="fruits">
                <option value="apple">Apple</option>
                <option value="banana">Samsung</option>
                <option value="cherry">Sony</option>
                <option value="grape">Google</option>
                <option value="orange">Intel</option>
                <option value="strawberry">Huawei</option>
              </select>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <textarea
                className="textarea textarea-info"
                name="description"
                placeholder="Description"
              ></textarea>
            </div>

            {/* ************************************************ */}
            <div className="form-control mt-6">
              <button className="btn btn-info">Add Product</button>
            </div>
          </form>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AddProduct;
