import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNewsMarquee = () => {
    return (
        <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-5 bg-base-200 p-3 sm:p-5 overflow-hidden'>
            <button className='btn btn-secondary px-4 py-2 sm:px-5 sm:py-5 text-sm sm:text-base'>
                Latest
            </button>
            <div className='w-full overflow-hidden'>
                <Marquee className='flex gap-5 sm:gap-9 text-sm sm:text-base' pauseOnHover={true} gradient={false} speed={50}>
                    <p className='whitespace-nowrap'>
                        <strong>Breaking:</strong> Global markets rally as tech stocks soar!  
                        &nbsp;|&nbsp;
                        &nbsp;|&nbsp;
                    </p>
                    <p className='whitespace-nowrap'>
                        <strong>Dragon News exclusive  :  </strong> New environmental policies announced!
                        &nbsp;|&nbsp;
                        &nbsp;|&nbsp;
                    </p> 
                    <p className='whitespace-nowrap'>
                        <strong> Sports Update:</strong> Local team wins championship!
                    </p>
                </Marquee>
            </div>
        </div>
    );
};

export default LatestNewsMarquee;
