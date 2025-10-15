import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
  const [user, SetUser] = useState([]);
  const { id } = useParams();
  const idInt = parseInt(id);
  const users = useLoaderData();


  // filter data 
  useEffect(() => {
    if (idInt === 0) {
      SetUser(users)
      return
    } else if (idInt === 1) {
      const filteredUsers = users.filter((user) => user.others.is_today_pick == true)
      SetUser(filteredUsers)
    } else {
      const filteredUsers = users.filter((user) => user.category_id === idInt);
      SetUser(filteredUsers);
    }
  }, [users, idInt])
  return (

    <div>
      <p>Total News Found : <span className='text-red-500 font-semibold'>{user.length}</span> </p>
      <div className='grid grid-cols-1 gap-5'>

        {
          user.map((singleUser) => <NewsCard key={singleUser.id} singleUser={singleUser}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;