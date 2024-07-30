import React from "react";
import { Fragment } from "react";

export default function Services({icon:Icon,paragraph,heading,headings,paragraphs}){
    return(
        <>
        <div className="flex-col ">
            <div className="w-28 h-28 rounded-full bg-[#5ca9fb] pt-8 pl-8 font-extrabold ml-[4%]">
            <Icon className="text-white font-extrabold text-5xl"/>
            </div>
            <h1 className="text-white text-xl font-semibold pt-6 ml-[2%]">{heading}</h1>
            <h1 className="text-[#333] text-xl font-semibold pt-6 ml-[2%]">{headings}</h1>
            <p className="w-[70%] pt-3 text-[#ffffffbf]  block">
                {paragraph}
                </p>
            <p className="w-[70%] pt-3 text-[#777]  block">
                {paragraphs}
                </p>

        </div>
        </>
    )
}