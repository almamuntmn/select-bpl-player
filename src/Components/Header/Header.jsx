import logo from '../../assets/logo.png'
import { TbCoinFilled } from "react-icons/tb";

const Header = ({coin}) => {
    return (
        <div className='flex justify-between items-center sticky top-0 bg-white/30 backdrop-blur-md border-b border-white/20 z-50 mb-6'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='flex gap-12 items-center'>
                <ul className='text-sm flex gap-12 text-gray-500'>
                    <li>Home</li>
                    <li>Feature</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
            
            <div className='flex items-center gap-1 border border-gray-300 rounded-md py-2 px-4'><h1 className='text-sm'>{coin} Coin</h1> <TbCoinFilled className='text-xl text-orange-300'></TbCoinFilled></div>
            
            </div>
        </div>
    );
};

export default Header;