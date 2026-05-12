import "./home.css";
import Overview from "./components/Overview";
import About from "./components/About";
import Amenities from "./components/Amenities";
import Abstract from "./components/Abstract";

function Home() {
  return (
    <>
      <Overview />
      <About />
      <Amenities />
      <Abstract />
    </>
  );
}

export default Home;
