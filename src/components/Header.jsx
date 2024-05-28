import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { RiMenu2Line } from "react-icons/ri";
import { GoMoveToBottom } from "react-icons/go";

import { IoRocketOutline } from "react-icons/io5";
import { PiLightning } from "react-icons/pi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";

function Header() {
    return (
        <div className='w-full pt-4'>
            <div className='text-white flex items-center justify-between px-10'>
                <div className='flex items-center gap-6'>
                    <h3 className='text-2xl text-white'>Title</h3>
                    <FaRegStar className='cursor-pointer' />
                    <LuUsers2 className='cursor-pointer' />
                    <button className='flex items-center gap-3 cursor-pointer bg-slate-500 py-2 px-3 rounded-lg'><RiMenu2Line /> <span>Board</span></button>
                    <GoMoveToBottom className='cursor-pointer' />
                </div>
                <div className='flex items-center gap-4'>
                    <IoRocketOutline className='cursor-pointer' />
                    <PiLightning className='cursor-pointer' />
                    <button className='flex items-center gap-3 cursor-pointer bg-slate-400 py-2 px-3 rounded-lg'><CgMenuLeftAlt /><span>Filter</span></button>
                    <button className='flex items-center gap-3 cursor-pointer bg-slate-400 py-2 px-3 rounded-lg'><FaRegUserCircle /> <span>User</span></button>
                </div>
            </div>
        </div>
    )
}

export default Header