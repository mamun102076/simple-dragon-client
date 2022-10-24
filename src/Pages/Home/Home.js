import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardSummery from '../Shared/CardSummery/CardSummery';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            {
                allNews.map( news => <CardSummery key={news._id} news={news}></CardSummery>)
            }
        </div>
    );
};

export default Home;