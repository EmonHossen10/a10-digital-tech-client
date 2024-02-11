import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SingleCustomer = ({ customer }) => {
  const { name, review, imageUrl } = customer;

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="card  my-10 bg-base-100 shadow-xl"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <figure>
        <div className="avatar ">
          <div className="w-32 rounded-full">
            <img src={imageUrl} />
          </div>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{review}</p>
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
            checked
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
  );
};

export default SingleCustomer;
