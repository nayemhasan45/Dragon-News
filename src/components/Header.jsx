import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    const day = format(time,"EEEE");
    const rest = format(time," MMMM dd, yyyy, hh:mm:ss a");

    return (
        <div className='flex justify-center items-center flex-col space-y-3 sm:space-y-5 my-3 sm:my-5 px-3 sm:px-0'>
            <img className='w-48 sm:w-[400px]' src={logo} alt="" />
            <p className='text-accent text-sm sm:text-base'>Journalism Without Fear or Favour</p>
            <p className='text-accent text-xs sm:text-sm'>
                <strong>{day}</strong>,{rest}
            </p>
        </div>
    );
};

export default Header;
