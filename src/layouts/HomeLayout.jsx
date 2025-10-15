import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNewsMarquee from '../components/LatestNewsMarquee';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='marquee w-11/12 mx-auto my-3'>
                    <LatestNewsMarquee></LatestNewsMarquee>
                </section>
                <nav className='marquee w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <section className='left_content'>

                </section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right_content'>

                </section>
            </main>
        </div>
    );
};

export default HomeLayout;