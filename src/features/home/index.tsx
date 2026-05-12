import "./home.css";
import Overview from "./components/Overview";
import About from "./components/About";
import Amenities from "./components/Amenities";
import Contact from "./components/Contact";

function Home() {
  return (
    <>
      <Overview />
      <About />
      <Amenities />
      <Contact />
    </>
  );
}

export default Home;
