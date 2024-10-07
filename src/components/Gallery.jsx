import React from "react";

export default function Gallery({ images }) {
    
  let image = Array.isArray(images) ? images : images.results;
  console.log(image);
  
  return (
    <div class="grid bg-black  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {image.map((item,index) => {
        return (
            <div class="group cursor-pointer relative">
            <img
              src={item.urls.regular}
              alt="Image 1"
              class="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
        
          </div>
        );
      })}
    </div>
  );
}
