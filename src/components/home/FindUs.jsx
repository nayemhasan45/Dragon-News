import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
const FindUs = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold mb-5'>Find Us On </h1>
            <div className="join join-vertical w-full space-y-5">
                <button className="btn join-item justify-start "><ImFacebook2 /> Facebook</button>
                <button className="btn join-item justify-start "><FaGithub /> Github</button>
                <button className="btn join-item justify-start "> <ImLinkedin />Linkedin</button>
            </div>
        </div>
    );
};

export default FindUs;