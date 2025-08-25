
import banner from '../../assets/banner-main.png'
import bg from '../../assets/bg-shadow.png'
import { ToastContainer, toast } from 'react-toastify';


const Hero = ({ handleCoinAdd }) => {
    const notify = () => toast.success("🎉 You claimed 200,000 free credits!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    });

    return (
        <div className='flex flex-col items-center justify-center rounded-2xl mt-6' style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", height: "400px", backgroundColor: "black" }}>
            <img className='w-[200px] mb-6' src={banner} alt="" />
            <div>
                <h1 className='text-3xl font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className=' text-lg text-gray-300 font-light mt-4'>Beyond Boundaries Beyond Limits</p>
            </div>
            <button onClick={() => { handleCoinAdd(200000); (notify()) }} className='text-sm mt-6 bg-[#E7FE29] text-black py-2 px-4 rounded-lg cursor-pointer hover:bg-amber-300'>Claim Free Credit</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Hero;