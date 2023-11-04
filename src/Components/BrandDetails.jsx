import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import BrandDetailsSpecific from "./BrandDetailsSpecific";
import Carousel from "./Carousel";

const BrandDetails = () => {
  let datas = useLoaderData();
  const p = useParams();

  let specificData = datas.filter((data) => data.Band_Name == p.name);

  console.log(specificData);

  return (
    <div>
      <Navbar></Navbar>
      <Carousel specificData={specificData} ></Carousel>

      <div>
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
    </div>
  );
};

export default BrandDetails;
