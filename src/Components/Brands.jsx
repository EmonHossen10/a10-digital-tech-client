import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Brands = () => {
  const brands = useLoaderData();

  return (
    <div className="my-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 mx-auto gap-10">
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
