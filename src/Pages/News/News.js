import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <Card>
            <img className='card-img-top' src={news.image_url} alt="" />
            <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>
                    {news.details}
                </Card.Text>
                <Link to={`/category/${news.category_id}`}>
                    <Button variant="primary">Back to category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;