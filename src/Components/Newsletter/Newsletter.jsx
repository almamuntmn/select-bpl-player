import bg from '../../assets/bg-shadow.png'

const Newsletter = () => {
    return (
        <div className='flex flex-col items-center justify-center rounded-2xl mt-12 mx-4 sm:mx-6 md:mx-8 bg-white border border-gray-300 px-4 sm:px-6 md:px-8 py-8 text-center'
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "auto",
                minHeight: "300px",
            }}>
            <div className='mb-6'>
                <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-2'>Subscribe to our Newsletter</h1>
                <p className='text-sm sm:text-base text-gray-500 mb-4'>Get the latest updates and news right in your inbox!</p>
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto'>
                <input className='text-sm sm:text-base py-2 px-4 border border-gray-300 rounded-lg w-full sm:w-auto' type="email" placeholder="Enter your email" />
                <button className='py-2 px-4 sm:py-3 sm:px-6 border border-amber-400 rounded-lg bg-amber-400 cursor-pointer hover:bg-gray-300 hover:border-gray-300 w-full sm:w-auto text-sm sm:text-base'>Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;
