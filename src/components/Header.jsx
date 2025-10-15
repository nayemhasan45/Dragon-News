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
    },
        []);
    const day = format(time,"EEEE");
    const rest = format(time," MMMM dd, yyyy, hh:mm:ss a");
    return (
        <div className='flex justify-center items-center flex-col space-y-5'>
            <img className='w-[400px]' src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-accent'>
                <strong>{day}</strong>,{rest}
            </p>
        </div>
    );
};

export default Header;