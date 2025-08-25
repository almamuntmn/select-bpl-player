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
        <div
            className='flex flex-col items-center justify-center rounded-2xl mt-6 px-4 sm:px-6 md:px-8 text-center'
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                height: "auto",
                minHeight: "400px",
                backgroundColor: "black",
            }}
        >
            <img className='w-40 sm:w-48 md:w-52 mb-6' src={banner} alt="Banner" />
            <div>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>
                <p className='text-base sm:text-lg md:text-xl text-gray-300 font-light mt-4'>
                    Beyond Boundaries Beyond Limits
                </p>
            </div>
            <button
                onClick={() => { handleCoinAdd(200000); notify(); }}
                className='text-sm sm:text-base mt-6 bg-[#E7FE29] text-black py-2 px-4 sm:py-3 sm:px-6 rounded-lg cursor-pointer hover:bg-amber-300 transition-colors duration-200'
            >
                Claim Free Credit
            </button>
        </div>
    );
};

export default Hero;
