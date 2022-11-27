import Announcements from "../components/Announcements";
import Catergory from "../components/Category";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Product from "../components/Product";
import Slider from "../components/Slider";
import Topbar from "../components/Topbar";

const Home = () => {
  return (
    <>
      <Announcements />
      <Topbar />
      <Slider />
      <Catergory />
      <Product />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
