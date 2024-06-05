import React, { useState } from "react";

//Key metric section

function Banner2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      text: "Hey, it's Keanu Reeves here. I just finished reading 'The Name of the Wind' and I have to say, it’s absolutely captivating. The blend of magic, adventure, and profound storytelling is mesmerizing. The characters are incredibly well-developed, and the world-building is top-notch. It's a journey that makes you reflect on life, destiny, and the essence of being. If you're looking for a book that will both entertain and inspire you, this is it. Highly recommend diving into this journey. Trust me, you won’t regret it. 🌬📘",
      text2: "Keanu Reeves",
      image: "https://i.imgur.com/sYdSJ3o.jpeg",
      image2: "https://i.imgur.com/Ll1417db.jpg",
    },
    {
      text: "Hey, it's Scarlett Johansson. I just finished reading 'John Dies at the End' and I have to say, it’s a wild ride! The mix of horror, humor, and unexpected twists kept me hooked from start to finish. The characters are quirky and unforgettable, and the plot is delightfully unpredictable. If you're looking for a book that's both thrilling and entertaining, this is the one. Dive into this bizarre adventure – you won't regret it. 📚✨",
      text2: "scarlett johansson",
      image: "https://i.imgur.com/Nc5Goxc.jpeg",
      image2: "https://i.imgur.com/nxeu7Zib.jpg",
    },
    {
      text2: "Doggo",
      image: "https://i.imgur.com/TEcm74H.jpeg",
      text: "As a dog, I have to admit, 'Catundra' had me hooked from the first page to the last whisker! Despite being a tail-tale about cats, it's filled with intrigue, humor, and some serious claw-biting moments. The characters are purr-fectly crafted, each with their own feline charm. While I may bark up the wrong tree here, this book is a must-read for any adventurous pup or curious cat alike. Paws up for 'Catundra'🐾📚",
      image2: "https://i.imgur.com/zQFfO94.jpeg",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          onClick={handlePrevious}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          onClick={handleNext}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      {/* <div className="shadow rounded-md p-6 bg-pink-100">
          <div className="flex justify-left  mb-4">
            <img src={l1} className="h-6 w-6 text-pink-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">What to order</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita delectus et odio esse eius error, vel inventore
          </p>
        </div> */}

      <div className="flex mt-8 max-sm:flex-col max-md:space-x-14 max-sm:space-x-0 ">
        <div className="w-2/3 pr-4 shadow rounded-md p-4 max-sm:w-[100%] ">
          <img
            className="justify-left flex w-max-18 h-max-18 rounded-full border-2 hover:border-pink-500 border-pink-300"
            src={data[currentIndex].image2}
            alt=""
          />
          <h2 className="text-2xl pt-5 pb-5 flex justify-left">
            {data[currentIndex].text2}
          </h2>
          <p className="text-lg leading-relaxed flex justify-left mb-10">
            {data[currentIndex].text}
          </p>
        </div>
        <div className="w-1/3 max-h-[500px] max-sm:w-[100%]  max-sm:pt-10 flex items-center justify-center max-md:flex-col ">
          <div className="rounded-md border-4 border-orange-500 flex">
            <img
              src={data[currentIndex].image}
              alt="Samosa Party"
              className="max-h-[500px] max-w-350px]"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 w-[100%] flex justify-around space-x-5 ">
        <div className="transition duration-300 hover:scale-105 bg-purple-100 rounded-[40px] p-4 shadow-md w-1/3 text-center s">
          <h3 className="text-3xl font-bold  text-[#e47ab4] ">
            upto <span className="text-[#cb8cd3]">95%</span>
          </h3>
          <p className="text-gray-600">On First Order </p>
        </div>
        <div className="transition duration-300 hover:scale-105 bg-purple-100 rounded-[40px]  p-4 shadow-md w-1/3 text-center">
          <h3 className="text-2xl font-bold text-[#e47ab4]">&lt; 50% SALE </h3>
          <p className="text-gray-600">Daily Stock-out</p>
        </div>
        <div className=" transition duration-300 hover:scale-105 rounded-[40px] border-2 border-[#e47ab4] p-6 shadow-md w-1/3 pt- text-center">
          <h3 className="text-2xl font-bold text-[#e47ab4]">Read stories</h3>
          {/* <p className="text-gray-600">→</p> */}
        </div>
      </div>
    </div>
  );
}

export default Banner2;
