import { useState } from "react";
import img1 from "../../assets/port1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";

export default function Portfolio() {
  const [selectedImg, setSelectedImage] = useState(null);
  return (
    <>
      <div>
        <div className="container">
          <h3 className="text-[#2c3e50] text-[40px] font-bold py-2 text-center mt-5">
            PORTFOLIO COMPONENT
          </h3>
          <div className="flex justify-center items-center mb-4">
            <span className="w-[80px] h-1 bg-[#2c3e50]"></span>
            <i class="fa-solid fa-star text-[#2c3e50] mx-3"></i>
            <span className="w-[80px] h-1 bg-[#2c3e50]"></span>
          </div>
          <div className="grid grid-cols-1 px-5 md:grid-cols-2 md:px-5 lg:grid-cols-3 lg:px-0 gap-12 pb-14 pt-3">
            {[img1, img2, img3, img1, img2, img3].map((img, index) => (
              <div
                className="bg-[#1abc9ce6] rounded-lg overflow-hidden cursor-pointer relative card"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  className="w-full transition-opacity duration-500"
                />
                <i class="fa-solid fa-plus absolute text-white top-1/2 left-1/2 text-8xl -translate-y-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-500"></i>
              </div>
            ))}
          </div>
          {selectedImg && (
            <div
              className="fixed bg-blue-600 bg-opacity-30 top-0 left-0 bottom-0 right-0 flex justify-center items-center"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImg}
                className="w-3/4 md:w-[45%]"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
