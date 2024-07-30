import React from "react";
import Services from "./components/Services";
import ServiceData from "./components/ServiceData";
import Images from "./components/Images";
import ImagesData from "./ImagesData";
import {FaWordpress, FaCartArrowDown, FaPaintBrush, FaCloud, FaShoppingCart } from "react-icons/fa";
import Hello from "./components/Hello";


function App() {
  return (
    <>
    <div className="h-screen w-[100%]">
    <Hello/>
    </div>
      <div className="bg-[#f6f6f6] h-[80vh] w-[100%] pl-[10%] pt-14">
        <h1 className="text-5xl font-bold text-[#333] pl-[30%]">Features</h1>
        <div className="flex  mt-20 justify-center text-[#333]">
          <Services 
           paragraphs="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
           icon={FaWordpress}
            headings="Lorem ipsum dolor"
            />
          <Services 
           paragraphs="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
           icon={FaCartArrowDown}
            headings="Lorem ipsum dolor"
            />
          <Services 
           paragraphs="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
           icon={FaPaintBrush}
            headings="Lorem ipsum dolor"
            />
          <Services 
           paragraphs="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
           icon={FaCloud}
            headings="Lorem ipsum dolor"
            />
        
        </div>
      </div>
      <div className="bg-[#6372ff] h-[120vh] mt-9 w-[100%] pl-[10%] pt-14">
        <h1 className="text-5xl font-bold text-white pl-[30%]">Our Services</h1>
        <p className="text-[#ffffffbf] pt-6 pl-[20%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
        <div className="flex flex-wrap mt-20 justify-center">
          {ServiceData.map((service, index) => (
            <div key={index} className="w-full lg:w-1/3 mb-8">
              <Services
                icon={service.icon}
                heading={service.heading}
                paragraph={service.paragraph}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[white] h-[120vh] mt-9 w-[100%] pl-[10%] pt-14">
        <h1 className="text-5xl font-bold text-[#333] pl-[30%]">Gallery</h1>
        <p className="text-[#777777] pt-6 pl-[20%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
        <div className="flex flex-wrap mt-20 -mx-4">
          {ImagesData.map((image, index) => (
            <div key={index} className="w-full md:w-1/3 ">
              <Images
                image={image.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
