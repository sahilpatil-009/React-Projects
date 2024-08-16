import React, { useRef, useState } from 'react';
import Card from './Card'

function Forground() {

    const ref = useRef(null);

    const data = [
         {
          desc:"This is the Background color of the card that will be displayed.",
          filesize: ".9mb",
          close: false,
          tag:{ isOpen:true, tageTitle: "Download Now", tagColor:"bg-green-600"},
         },
         {
            desc:"This is the Background color of the card that will be displayed.",
            filesize: ".9mb",
            close: true,
            tag:{ isOpen:true, tageTitle: "Upload", tagColor:"bg-red-600"},
           },
           {
            desc:"This is the Background color of the card that will be displayed.",
            filesize: ".9mb",
            close: false,
            tag:{ isOpen:false, tageTitle: "Download Now", tagColor:"green"},
           },
           {
            desc:"This is the Background color of the card that will be displayed.",
            filesize: ".9mb",
            close: false,
            tag:{ isOpen:true, tageTitle: "Download Now", tagColor:"bg-green-600"},
           },
    ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-10">
        {data.map((item, index)=>(
            <Card data={item} refrence={ref} />
        ))}
        
    </div>
  )
}

export default Forground