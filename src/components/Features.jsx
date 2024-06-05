import React, { useState } from "react";

const Features = () => {
  const [selectedImage, setSelectedImage] = useState(1);

  const images = [
    "https://images.unsplash.com/photo-1661936901394-a993c79303c7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1658842042779-dc9ab3125690?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1598738865218-7809c17181c3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1533561304446-88a43deb6229?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1518842013791-b874be246c34?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="flex items-center justify-between p-8 w-[80%]">
      <div className="w-1/2 flex flex-col">
        <div className="flex flex-col space-y-4">
          <h2
            className="cursor-pointer text-2xl font-normal mb-4  hover- transition duration-300 hover:scale-105 "
            onClick={() => handleImageClick(0)}
          >
            Fiction
            <p className="text-sm text-[#e47ab4] mt-3">
              Works created from the imagination, not presented as fact,
              <br /> though they may be based on a true story or situation.
            </p>
          </h2>
          <hr className="my-4" />
          <h2
            className="cursor-pointer text-2xl font-normal mb-4 hover- transition duration-300 hover:scale-105"
            onClick={() => handleImageClick(1)}
          >
            Non-Fiction
            <p className="text-sm text-[#db66a6] mt-3">
              Works that are based on facts, real events, and real people,
              <br /> such as biographies, history books, and memoirs.
            </p>
          </h2>
          <hr className="my-4" />
          <h2
            className="cursor-pointer text-2xl font-normal mb-4 hover- transition duration-300 hover:scale-105"
            onClick={() => handleImageClick(2)}
          >
            Peotry and Drama
            <p className="text-sm text-[#db66a6] mt-3">
              Books that contain poetic works or plays, exploring various
              <br /> themes through verse or dramatic dialogue.
            </p>
          </h2>
          <hr className="my-4" />
          <h2
            className="cursor-pointer text-2xl font-normal mb-4 hover- transition duration-300 hover:scale-105"
            onClick={() => handleImageClick(3)}
          >
            Children's Books
            <p className="text-sm text-[#db66a6] mt-3">
              Books written for children and young readers, ranging from
              <br /> illustrated picture books to young adult novels.
            </p>
          </h2>
          <hr className="my-4" />
          <h2
            className="cursor-pointer text-2xl font-normal mb-4 hover- transition duration-300 hover:scale-105"
            onClick={() => handleImageClick(4)}
          >
            Educational and Academic
            <p className="text-sm text-[#db66a6] mt-3">
              {" "}
              Books that provide information and resources for learning,
              <br /> education, and research purposes.
            </p>
          </h2>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="flex rounded-[40px]  bg-gradient-to-r from-[#fdfdff] to-[#f6bfff] p-4 w-full justify-center">
          <img
            src={images[selectedImage]}
            alt="Carousel Image"
            className="w-[400px] h-[400px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
