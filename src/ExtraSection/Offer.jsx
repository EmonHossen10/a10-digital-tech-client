import { Link } from "react-router-dom";

 

const Offer = () => {
    return (
        <div className="relative w-full max-w-screen-xl mb-5 mx-auto">
        <div className="bg-gray-100 p-4">
          <div className="flex flex-col lg:flex-row gap-3 items-center">
            <img
              src="https://i.ibb.co/jkHXJL4/huawei-mateview-usb-c-projection.jpg"
              alt="Electronics Offer"
              className="w-full lg:w-1/2 h-auto"
            />
            <div className="bg-white p-6 lg:w-1/2 lg:mt-0 mt-6">
              <h2 className="text-3xl font-bold text-black mb-4">Special  Offer in November</h2>
              <p className="text-gray-600 text-lg mb-4">Get the latest electronics at 30% discount </p>
              <Link to="/"   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Shop Now</Link>
            </div>
          </div>
        </div> 
      </div>
    );
};

export default Offer;