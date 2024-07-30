import React from "react";
import image from '../assets/image/back.jpg';

export default function Hello() {
    const text = 'We are a Landing Page'
    return (
        <div className="w-full h-full bg-cover" style={{ backgroundImage: `url(${image})`}}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <h1 className="text-6xl font-bold w-[30%] ml-[35%] pt-[17%] text-center text-white absolute">{text.toUpperCase()}</h1>
            <p className="text-2xl w-[50%] ml-[25%] text-center text-white absolute pt-[27%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</p>
            <div className="rounded-3xl w-32 h-16 pt-5 ml-[45%] bg-[#6372ff] absolute mt-[35%]">
                <h1 className="text-center text-white ">LEARN MORE</h1>
            </div>
           
        </div>
    );
}
