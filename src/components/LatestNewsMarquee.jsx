import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNewsMarquee = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-5'>
            <button className='btn btn-secondary p-5'>Latest</button>
            <div>
                <Marquee className='flex gap-9' pauseOnHover={true} gradient={false} speed={50}>
                    <p>
                        <strong>Breaking:</strong> Global markets rally as tech stocks soar!  
                        &nbsp;|&nbsp;
                        &nbsp;|&nbsp;
                    </p>
                    <p>
                        <strong>Dragon News exclusive  :  </strong> New environmental policies announced!
                        &nbsp;|&nbsp;
                        &nbsp;|&nbsp;
                    </p> 
                    <p>
                        <strong> Sports Update:</strong> Local team wins championship!
                    </p>
                </Marquee>
            </div>
        </div>
    );
};

export default LatestNewsMarquee;