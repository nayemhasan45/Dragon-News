import React, { Suspense } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNewsMarquee from '../components/LatestNewsMarquee';
import Navbar from '../components/Navbar';
import LeftAside from '../components/home/LeftAside';
import RightAside from '../components/home/RightAside';
import ScrollToTop from '../components/ScrollToTop';
import Loading from '../components/Loading';

const HomeLayout = () => {
    const { state } = useNavigation();
    // console.log(nav);
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <header>
                <Header></Header>
                <section className='marquee w-11/12 mx-auto my-3'>
                    <LatestNewsMarquee></LatestNewsMarquee>
                </section>
                <nav className='marquee w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 my-5'>
                <aside className='col-span-3 h-fit sticky top-0'>
                   <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    {state=="loading" ? <Loading></Loading>:<Outlet></Outlet>}
                </section>
                <aside className='col-span-3 h-fit sticky top-0'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;