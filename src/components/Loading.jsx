import React from 'react';
import { Puff } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            {/* <span className="loading loading-infinity loading-xl"></span> */}
            <Puff
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
            >
            </Puff>
        </div>
    );
};

export default Loading;