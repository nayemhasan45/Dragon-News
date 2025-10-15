import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QJone from './QJone';
import BgPng from './BgPng';

const RightAside = () => {
    return (
        <div className='space-y-5'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QJone></QJone>
            <BgPng></BgPng>
        </div>
    );
};

export default RightAside;