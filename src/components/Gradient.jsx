import React from "react";

function Gradient() {
  return (
    <div class="area flex items-center justify-center">
      <ul class="circles">
        <div class=" circles h-[550px]  pt-15 flex flex-col justify-center relative overflow-hidden ">
          <div class="circles max-w-[80%] rounded-[25px] bg-white/10 mx-40 my-20 ">
            <h2 className="text-center pt-5 text-2xl font-medium text-[#d4b6fe] ">
              You Can Grow Faster than you Think
            </h2>
            <p className="px-20 py-5 text-[#fef3ff] font-medium text-base ">
              In our fast-paced world, books remain unparalleled tools for
              growth. Reading enriches our minds with new ideas, stimulates
              critical thinking, and improves focus. Beyond intellectual
              benefits, books foster empathy by immersing us in diverse
              narratives, enhancing interpersonal skills. They offer stress
              relief and mental relaxation, providing a break from our hectic
              lives. Professionally, reading provides insights and keeps us
              updated with trends, offering a competitive edge. Ultimately,
              books make us more knowledgeable, empathetic, and effective
              individuals.
            </p>
            <div className=" flex justify-center   ">
              <button className="rounded-[25px] text-center hover:text-black text-white px-20 py-5 bg-gradient-to-r from-[#c349c5] to-[#7300ff]">
                BE CLEVER
              </button>
            </div>
          </div>
        </div>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default Gradient;
