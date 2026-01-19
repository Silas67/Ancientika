import React from "react";
import Image from "next/image";
import { PiPlus } from "react-icons/pi";

const Product = () => {
  return (
    <div className="w-full h-fit p-8 flex max-sm:flex-col max-sm:gap-4">
      <div className="w-full h-full">
        <p className="text-sm fontozean font-bold text-amber-700">
          Interactive Exposure
        </p>
        <h1 className="text-9xl zina max-sm:text-5xl">The Winter Editorial</h1>
      </div>
      <div className="w-full h-[90vh] relative">
        <Image
          src={"/img1.jpg"}
          alt="Image"
          className="object-cover w-full h-full hover:scale-105 transition-all duration-300"
          fill
        />

        <div className="w-10 h-10 rounded-full shadow-xl border border-black/15 absolute top-50 left-60 backdrop-blur-2xl flex items-center justify-center max-sm:left-10 max-sm:top-80">
          <PiPlus className="w-full h-full text-black p-2" />
        </div>

        <div className="w-10 h-10 rounded-full shadow-xl border border-black/15 absolute top-50 left-120 backdrop-blur-2xl flex items-center justify-center max-sm:left-60 max-sm:top-60">
          <PiPlus className="w-full h-full text-black p-2" />
        </div>

        <div className="w-10 h-10 rounded-full shadow-xl border border-black/15 absolute top-125 left-100 backdrop-blur-2xl flex items-center justify-center max-sm:top-160 max-sm:left-60">
          <PiPlus className="w-full h-full text-black p-2 max-sm:text-white" />
        </div>
      </div>
    </div>
  );
};

export default Product;
