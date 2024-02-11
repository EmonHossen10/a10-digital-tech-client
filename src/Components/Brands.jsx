import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Brands = () => {
  const brands = useLoaderData();

  return (
    <div className="my-16">
      <h2 className="text-5xl font-bold text-center mb-10">Here is our all brands</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto gap-8">
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
