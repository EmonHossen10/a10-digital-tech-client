import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import BrandDetailsSpecific from "./BrandDetailsSpecific";
import Carousel from "./Carousel";
import Footer from "./Footer";

const BrandDetails = () => {
  let datas = useLoaderData();
  const p = useParams();

  let specificData = datas.filter((data) => data.Band_Name == p.name);

  console.log(specificData);

  return (
    <div>
      <Navbar></Navbar>
      <Carousel specificData={specificData}></Carousel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10 w-10/12 mx-auto"  >
        {specificData.map((specific, idx) => (
          <>
            {" "}
            <BrandDetailsSpecific
              key={idx}
              specific={specific}
            ></BrandDetailsSpecific>
          </>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BrandDetails;
