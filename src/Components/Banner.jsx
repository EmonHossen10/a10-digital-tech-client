const Banner = () => {
  return (
    <>
      <section
        className="flex justify-between min-h-full font-roboto items-center p-16 flex-col-reverse  lg:flex-row gap-5
        bg-gradient-to-r from-blue-300 via-purple-300 to-blue-400
      "
      >
        {/* Text part */}
        <div className="  lg:w-6/12 md:mx-auto">
          <p className="font-roboto font-bold text-left text-white">
            WELCOME TO OUR WEBSITE
          </p>
          <h2 className=" font-semibold text-4xl my-5 text-left  ">
            Get your all tech product with{" "}
            <span className="text-blue-800">affordable price</span>
          </h2>
          <p className="font-roboto text-left text-xs lg:text-sm  mb-5">
            Electronics companies bring a multitude of positive impacts to the
            modern world. These companies are known for their relentless
            innovation, pushing the boundaries of technology and creating
            cutting-edge solutions that can transform industries and improve our
            daily lives.
          </p>
          <button className="btn btn-primary">More Details </button>
        </div>
        {/* image part */}
        <div className=" lg:w-5/12 mx-auto  ">
          <img
            src="https://i.ibb.co/yqPgWN5/davide-boscolo-gz9njd0z-Yb-Q-unsplash.jpg"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Banner;
