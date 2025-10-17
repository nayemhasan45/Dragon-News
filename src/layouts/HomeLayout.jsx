import React, { use, useState } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNewsMarquee from '../components/LatestNewsMarquee';
import Navbar from '../components/Navbar';
import LeftAside from '../components/home/LeftAside';
import RightAside from '../components/home/RightAside';
import ScrollToTop from '../components/ScrollToTop';
import Loading from '../components/Loading';
import { FaBars } from 'react-icons/fa';
import SocialLogin from '../components/home/SocialLogin';
import { AuthContext } from '../firebase/FirebaseAuthContext';

const HomeLayout = () => {
    const { state } = useNavigation();
    const [showLeftAside, setShowLeftAside] = useState(false);
    const {crUser}=use(AuthContext)

    // 🔸 Will be passed to LeftAside and called on category click
    const handleCategoryClick = () => {
        setShowLeftAside(false);
    };

    return (
        <div>
            <ScrollToTop />

            {/*  Header & Navbar  */}
            <header>
                <Header />
                <section className='marquee w-11/12 mx-auto my-3'>
                    <LatestNewsMarquee />
                </section>
                <nav className='marquee w-11/12 mx-auto my-3'>
                    <Navbar />
                </nav>
            </header>

            <main className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 my-5'>

                {/*  Toggle Button (only on mobile) */}
                <div className='flex md:hidden justify-between items-center p-2 bg-gray-100 rounded mb-3 col-span-1'>
                    <span className='font-bold'>All Category</span>
                    <button
                        onClick={() => setShowLeftAside(!showLeftAside)}
                        className={`text-2xl text-accent transition-transform duration-300 ${showLeftAside ? 'rotate-90' : 'rotate-0'}`}
                        aria-label="Toggle All Category"
                    >
                        <FaBars />
                    </button>
                </div>

                {/* social log-in on small device  */}
                <section className='md:hidden'>
                    {
                        crUser?'':<SocialLogin></SocialLogin>
                    }
                </section>

                {/*  Left Aside  */}
                <aside
                    className={`col-span-1 md:col-span-3 h-fit sticky top-0 transition-all duration-300 ease-in-out 
                    ${showLeftAside ? 'block' : 'hidden'} md:block`}
                >
                    <LeftAside onCategoryClick={handleCategoryClick} />
                </aside>
                
                {/*  Main Content  */}
                <section className='col-span-1 md:col-span-6'>
                    {state === "loading" ? <Loading /> : <Outlet />}
                </section>

                {/*  Right Aside (Hidden on Mobile)  */}
                <aside className='hidden md:block col-span-1 md:col-span-3 h-fit sticky top-0'>
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;
