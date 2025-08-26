import { useState } from 'react';
import logo from '../../assets/logo.png';
import { TbCoinFilled } from "react-icons/tb";
import { HiMenu, HiX } from "react-icons/hi";

const Header = ({ coin }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='flex flex-col sm:flex-row justify-between items-center sticky top-0 bg-white/30 backdrop-blur-md border-b border-white/20 z-50 mb-6 px-4 sm:px-6 md:px-8 py-3'>

            {/* Logo */}
            <div className='hidden md:block mb-2 sm:mb-0'>
                <img src={logo} alt="Logo" className='w-15 sm:w-32 md:w-20' />
            </div>

            {/* Desktop / Tablet Menu and Coin */}
            <div className='hidden sm:flex flex-row gap-12 items-center'>
                <ul className='text-sm flex gap-12 text-gray-500 items-center'>
                    <li className='hover:text-gray-800 cursor-pointer'>Home</li>
                    <li className='hover:text-gray-800 cursor-pointer'>Feature</li>
                    <li className='hover:text-gray-800 cursor-pointer'>Teams</li>
                    <li className='hover:text-gray-800 cursor-pointer'>Schedules</li>
                </ul>

                <div className='flex items-center gap-1 border border-gray-300 rounded-md py-2 px-4'>
                    <h1 className='text-sm'>{coin} Coin</h1>
                    <TbCoinFilled className='text-xl text-orange-300' />
                </div>
            </div>

            {/* Mobile Hamburger */}
            <div className='sm:hidden flex items-center justify-between w-full'>
                <button
                    className='text-2xl text-gray-500'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>

                <div className='flex items-center gap-1 border border-gray-300 rounded-md py-2 px-4'>
                    <h1 className='text-sm'>{coin} Coin</h1>
                    <TbCoinFilled className='text-xl text-orange-300' />
                </div>
                <div>
                    <div className='mb-2 sm:mb-0'>
                        <img src={logo} alt="Logo" className='w-15 sm:w-32 md:w-20' />
                    </div>
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
        </div>
    );
};

export default Header;
