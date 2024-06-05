import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <section className="absolute  top-0 w-[100%] h-[70px] bg-[#000000a6]/0  flex justify-between   max-sm:items-center">
      <div className="ml-[10%] w-[80%] flex justify-between max-md:w-[100%]  max-md:ml-0  ">
        <div className="flex w-[10%]  max-sm:w-[10%]   ">
          <img className=" mr-0  " src={logo} alt="logo" />
          <div className="flex font-semibold text-3xl w-[20%] text-white items-center cursor-pointer ">
            CLEVER
          </div>
        </div>
        <div className="flex justify-center space-x-8 items-center max-lg:hidden  font-normal transition-colors duration-500 ease-in-out  text-white ">
          <div className="flex justify-center transition-colors duration-500 ease-in-out hover:text-orange-500">
            <a href="">Product</a>
          </div>
          <div className="flex  transition-colors duration-500 ease-in-out hover:text-orange-500 ">
            <a href="">Pricing</a>
          </div>
          <div className="flex  transition-colors duration-500 ease-in-out hover:text-orange-500">
            <a href="">Industry</a>
          </div>
          <div className="flex  transition-colors duration-500 ease-in-out hover:text-orange-500">
            <a href="">Customer Stories</a>
          </div>
          <div className="flex  transition-colors duration-500 ease-in-out hover:text-orange-500">
            <a href="">About</a>
          </div>
          <div className="flex pr-2 transition-colors duration-500 ease-in-out hover:text-orange-500">
            <a href="">Blog</a>
          </div>
        </div>

        <div className="flex items-center space-x-4 max-md:hidden p-4  ">
          <div className="hover:text-white  text-pink-400 font-normal py-2 px-4 rounded transition-colors duration-500 ease-in-out">
            <a href="">Login</a>
          </div>

          <div className="font-medium bg-gradient-to-r rounded-full from-fuchsia-400 to-pink-300 hover:text-black hover:from-pink-300 hover:to-fuchsia-400 text-white py-2 px-4 ">
            <button>Talk to us</button>
          </div>
        </div>

        <div className="md:hidden flex items-center p-4 ">
          <button className="text-3xl text-white">☰</button>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
