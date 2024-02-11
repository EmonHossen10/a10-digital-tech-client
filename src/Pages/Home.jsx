import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Schedule from "../Components/Schedule";
import Customers from "../ExtraSection/Customers";
import Offer from "../ExtraSection/Offer";
 

const Home = () => {
  return (
    <div   >
      <Navbar></Navbar>
      <Banner></Banner>
      <Schedule></Schedule>
      <Brands></Brands>
      <h2 className="lg:text-4xl mb-6 font-bold text-center ">Special Offer </h2>
      <Offer></Offer>
      <h2 className="lg:text-4xl mb-6 font-bold text-center ">Customer Review </h2>
      <Customers></Customers>
     


      <Footer></Footer>
    </div>
  );
};

export default Home;
