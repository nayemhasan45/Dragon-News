import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res => res.json());
const Category = () => {
    const categories = use(categoryPromise);
    return (
        <div>
            <h1 className='font-bold'>Category news</h1>
            <div className='grid grid-cols-1 gap-3 mt-5'>
                {
                    categories.map(category =>
                        <NavLink to={`/category/${category.id}`} key={category.id} className={`btn btn-outline border-0 text-accent`}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;