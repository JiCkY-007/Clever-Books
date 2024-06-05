import React from "react";
import bg from "../assets/1.png";
import hero from "../assets/heroImage.png";
import btn from "../assets/btn.png";

function Herosection() {
  return (
    <section
      className="w-full h-[750px] grid grid-cols-2 space-x-4 pl-[150px] pr-[100px] max-xl:h-[1300px] max-xl:grid-cols-1 "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center  text-white items-center mt-[150px] ">
        <div className="text-7xl text-left">
          Every Order <br /> fulfilled,
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            {" "}
            on time.
          </span>
        </div>
        <div className="mt-[50px] text-left">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. uidem,
            corporis pariatur velit eaque illo optio beatae cupiditate excepturi
            in atque numquam, consequatur id officia accusantium tenetur? Iusto,
            hic necessitatibus!
          </p>
        </div>
        <div className="mt-[50px] text-left  flex group ">
          <div>
            <button className="bg-transparent border-2 border-pink-500 rounded-full px-4 py-2 text-pink-500 font-medium hover:bg-pink-500 hover:text-white">
              get started with clever
            </button>
          </div>
          <div>
            <img
              className=" flex flex-col w-[350px] transition duration-300 group-hover:scale-110   "
              src={btn}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="text-center text-white items-center mt-[150px] max-md:mt-[0px] ">
        <img
          className="transition-transform duration-300 ease-out transform hover:scale-110"
          src={hero}
          alt=""
        />
      </div>
    </section>
  );
}

export default Herosection;
