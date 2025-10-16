import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Career = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto'>
                <h1>this is career</h1>
            </main>
        </div>
    );
};

export default Career;