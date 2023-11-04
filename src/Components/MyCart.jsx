import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MyCartDetails from "./MyCartDetails";

const MyCart = () => {
  const cartData = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>

      {cartData.length == 0 ? (
        <div className="mt-10   " >
            <h2 className="lg:text-3xl text-center font-semibold ">Nothing Added to the Cart</h2>
          <img
          className="text-center w-[300px] lg:w-[500px] mx-auto "
            src="https://i.ibb.co/HTYR76N/data-management-share-information-protect-it-from-computer-viruses-68708-2932.jpg"
            alt=""
          />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10 w-10/12 mx-auto">
            {cartData.map((data, idx) => (
              <MyCartDetails key={idx} data={data}></MyCartDetails>
            ))}
          </div>
        </>
      )}

     

      <Footer></Footer>
    </div>
  );
};

export default MyCart;
