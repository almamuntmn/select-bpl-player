import logo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className=''>
            <div className='flex flex-col items-center mx-4 sm:mx-6 md:mx-8'>
                <img className='w-28 sm:w-32 md:w-36 mb-8 mt-35' src={logo} alt="" />
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 w-full'>
                    <div className='text-center sm:text-left text-white lg:mr-25'>
                        <h2 className='text-sm font-medium mb-2'>About Us</h2>
                        <p className='text-xs font-extralight'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>

                    <div className='text-left text-white'>
                        <h2 className='text-sm font-medium mb-2'>Quick Links</h2>
                        <ul className='text-xs font-light space-y-2 list-disc pl-4'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <div className='text-white lg:mr-20'>
                            <h2 className='text-sm font-medium mb-2 lg:text-left'>Subscribe</h2>
                            <p className='text-xs font-light space-y-2 mb-2 lg:text-left'>Subscribe to our newsletter for the latest updates.</p>
                        </div>
                        <div className='flex flex-col sm:flex-row mt-3 gap-2 w-full'>
                            <input className='bg-white rounded-l-md sm:rounded-md px-3 py-2 text-xs text-black w-full sm:w-auto' type="email" placeholder='Enter your email' />
                            <button className='py-2 px-3 border border-amber-400 rounded-r-md sm:rounded-md bg-amber-400 cursor-pointer hover:bg-gray-300 hover:border-gray-300 text-xs text-black w-full sm:w-auto'>Subscribe</button>
                        </div>
                    </div>
                </div>

                <hr className='border-b-1 border-gray-500 w-full' />
                <p className='text-white text-xs font-extralight my-5 text-center w-full'>&copy;2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
