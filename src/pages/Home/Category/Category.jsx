import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams();
    const categoriesNewsData = useLoaderData();
    
    return (
        <div>
            <h3>Category Item: {categoriesNewsData.length}</h3>
            {
                categoriesNewsData.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;