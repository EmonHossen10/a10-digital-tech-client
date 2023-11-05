import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Schedule from "../Components/Schedule";

const Home = () => {
  return (
    <div   >
      <Navbar></Navbar>
      <Banner></Banner>
      <Schedule></Schedule>
      <Brands></Brands>

      <Footer></Footer>
    </div>
  );
};

export default Home;
