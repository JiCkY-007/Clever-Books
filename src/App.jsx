import "./App.css";
import Banner1 from "./components/Banner1";
import Banner2 from "./components/Banner2";

import Features from "./components/Features";
import Footer from "./components/Footer";
import Gradient from "./components/Gradient";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <section className="w-full h-full flex flex-col justify-center items-center overflow-x-hidden">
        <Navbar />
        <Herosection />
        <Banner1 />
        <Banner2 />
        <Features />
        <Gradient />
        <Footer/>
      </section>
    </>
  );
}

export default App;
