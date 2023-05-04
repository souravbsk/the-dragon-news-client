import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import useTitle from '../../../Hooks/useTitle';

const Category = () => {
    const categoriesNewsData = useLoaderData();

    useTitle("Category")
    
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