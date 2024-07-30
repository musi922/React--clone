import React from "react";

export default function Images({ image }) {
  return (
    <div className="w-full h-full border-2 border-white">
      <img src={image} alt="Gallery Image" className="w-full h-full object-cover" />
    </div>
  );
}
