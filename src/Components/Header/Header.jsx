import { useState } from 'react';
import { TbCoinFilled } from "react-icons/tb";
import { HiMenu, HiX } from "react-icons/hi";

const HeaderMenu = ({ coin }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-12'>
            
            {/* Desktop / Tablet Menu */}
            <ul className='hidden sm:flex text-sm gap-12 text-gray-500 items-center'>
                <li className='hover:text-gray-800 cursor-pointer'>Home</li>
                <li className='hover:text-gray-800 cursor-pointer'>Feature</li>
                <li className='hover:text-gray-800 cursor-pointer'>Teams</li>
                <li className='hover:text-gray-800 cursor-pointer'>Schedules</li>
            </ul>

            {/* Hamburger button for mobile */}
            <div className='sm:hidden flex items-center justify-between w-full'>
                <button
                    className='text-2xl text-gray-500'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
                
                <div className='flex items-center gap-1 border border-gray-300 rounded-md py-2 px-4'>
                    <h1 className='text-sm'>{coin} Coin</h1> 
                    <TbCoinFilled className='text-xl text-orange-300'/>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className='flex flex-col sm:hidden gap-4 mt-2 text-gray-500 w-full text-center'>
                    <li className='hover:text-gray-800 cursor-pointer'>Home</li>
                    <li className='hover:text-gray-800 cursor-pointer'>Feature</li>
                    <li className='hover:text-gray-800 cursor-pointer'>Teams</li>
                    <li className='hover:text-gray-800 cursor-pointer'>Schedules</li>
                </ul>
            )}

            {/* Desktop Coin display */}
            <div className='hidden sm:flex items-center gap-1 border border-gray-300 rounded-md py-2 px-4'>
                <h1 className='text-sm'>{coin} Coin</h1> 
                <TbCoinFilled className='text-xl text-orange-300'/>
            </div>
        </div>
    );
};

export default HeaderMenu;
