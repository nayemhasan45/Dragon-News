import { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/home/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';

const NewsDetails = () => {
    const [news,SetNews]=useState({});
    const allData= useLoaderData();
    const {id} = useParams();
    useEffect(()=>{
        const dataSn = allData.find(singleData=>singleData.id==id);
        SetNews(dataSn);
    },[allData,id])
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <header className='space-y-5 w-11/12 mx-auto'>
                <Header></Header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 mt-5'>
                <section className='col-span-9'>
                    <h3 className="text-3xl font-semibold">Dragon News</h3>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <section className='col-span-3'>
                    <aside>
                        <RightAside></RightAside>
                    </aside>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;