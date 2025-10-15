import React from 'react';
import swimg from '../../assets/swimming.png'
import classroom from '../../assets/class.png'
import palyimg from '../../assets/playground.png'

const QJone = () => {
    return (
        <div className='bg-base-200 p-5'>
            <h1 className='text-2xl font-semibold'>Q-Zone</h1>
            <div className='space-y-5 '>
                <img className='w-full' src={swimg} alt="" />
                <img className='w-full' src={classroom} alt="" />
                <img className='w-full' src={palyimg} alt="" />
            </div>
        </div>
    );
};

export default QJone;