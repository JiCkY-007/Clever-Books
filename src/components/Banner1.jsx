import React from "react";
import l1 from '../assets/l1.svg';
import  l2 from '../assets/l2.svg';
import l3  from '../assets/l3.svg';
import  l4  from '../assets/l4.svg';



function Banner1() {
  return (
    <div className="container mx-auto px-4 py-10 ">
      <h2 className="text-4xl font-bold text-center mb-10">
        Four key questions answered by Clever Books
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="shadow rounded-md p-6 bg-pink-100">
          <div className="flex justify-left  mb-4">
            <img src={l1} className="h-6 w-6 text-pink-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">What to order</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita delectus et odio esse eius error, vel inventore
          </p>
        </div>
        <div className="bg-pink-100 shadow rounded-md p-6">
          <div className="flex justify-left  mb-4">
            <img src={l2} className="h-6 w-6 text-pink-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">When to order</h3>
          <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita delectus et odio esse eius error, vel inventore
          </p>
        </div>
        <div className="bg-pink-100 shadow rounded-md p-6">
          <div className="flex justify-left  mb-4">
            <img src={l3} className="h-6 w-6 text-pink-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">How to Manage Reading</h3>
          <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita delectus et odio esse eius error, vel inventore
          </p>
        </div>
        <div className="bg-pink-100 shadow rounded-md p-6">
          <div className="flex justify-left mb-4">
            <img src={l4} className="h-6 w-6 text-pink-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">How to Learn and apply</h3>
          <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita delectus et odio esse eius error, vel inventore
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner1;
