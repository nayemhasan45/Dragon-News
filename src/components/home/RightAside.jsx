import React, { use } from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QJone from './QJone';
import BgPng from './BgPng';
import { AuthContext } from '../../firebase/FirebaseAuthContext';

const RightAside = () => {
    const {crUser}=use(AuthContext);
    return (
        <div className='space-y-5'>
            {
                crUser?'':<SocialLogin></SocialLogin>
            }
            <FindUs></FindUs>
            <QJone></QJone>
            <BgPng></BgPng>
        </div>
    );
};

export default RightAside;