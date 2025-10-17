import React from 'react';
import Category from './Category';

const LeftAside = ({ onCategoryClick }) => {
    return (
        <div>
            <Category onCategoryClick={onCategoryClick}></Category>
        </div>
    );
};

export default LeftAside;