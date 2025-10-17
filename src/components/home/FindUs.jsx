import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const FindUs = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold mb-5'>Find Us On</h1>
            <div className="join join-vertical w-full space-y-5">

                {/* Facebook */}
                <a
                    href="https://www.facebook.com/nayemhasan450"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn join-item justify-start hover:bg-blue-100 transition"
                >
                    <ImFacebook2 className="text-blue-600" /> Facebook
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/nayemhasan45"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn join-item justify-start hover:bg-gray-200 transition"
                >
                    <FaGithub className="text-gray-800" /> GitHub
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn join-item justify-start hover:bg-blue-100 transition"
                >
                    <ImLinkedin className="text-blue-500" /> LinkedIn
                </a>

            </div>
        </div>
    );
};

export default FindUs;
