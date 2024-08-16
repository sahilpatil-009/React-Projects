import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

export default function Card({data, refrence}) {
  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.2}} dragElastic={1} dragTransition={{ bounceStiffness:100, bounceDamping: 5 }} className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
        <FaRegFileAlt/>
        <p className='text-sm mt-5 font-semibold leading-tight' >{data.desc}</p>
        <div className='footer absolute bottom-0  w-full left-0'>
            <div className='flex items-center justify-between mb-3 py-3 px-8'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoMdClose/> : <LuDownload size=".8em" color='#fff'/>}
                </span>
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tageTitle}</h3>
                </div>
            )}
        </div>
    </motion.div>
  )
}
