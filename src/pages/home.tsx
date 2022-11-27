import Announcements from "../components/Announcements";
import Catergory from "../components/Category";
import Slider from "../components/Slider";
import Topbar from "../components/Topbar";

const Home = () => {
  return (
    <>
      <Announcements />
      <Topbar />
      <Slider />
      <Catergory />
      <div>Home</div>
    </>
  );
};

export default Home;
