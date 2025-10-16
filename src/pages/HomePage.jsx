import React from 'react';
import Category from '../components/home/Category';
import { Navigate } from 'react-router';

const HomePage = () => {
    return <Navigate to={'/category/1'}></Navigate>
};

export default HomePage;