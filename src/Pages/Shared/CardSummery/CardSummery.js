import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { BsBookmark, BsEye, BsShare, BsStar } from "react-icons/bs";
import { Link } from 'react-router-dom';

const CardSummery = ({ news }) => {
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image style={{ 'height': '50px' }} roundedCircle src={news.author.img}></Image>
                    <div className='ms-3'>
                        <p className='mb-0'>{news.author.name}</p>
                        <p className='mb-0'>{news.author.published_date}</p>
                    </div>
                </div>
                <div>
                    <span className='me-2'><BsBookmark></BsBookmark></span>
                    <span><BsShare></BsShare></span>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <img className='card-img-top' src={news.image_url} alt="" />
                <Card.Text>
                    {
                        news.details.length > 250 ? <span>{news.details.slice(0,250) + '....'}  <Link to={`/news/${news._id}`}>see details</Link></span> : news.details
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <p className='mb-0'><BsStar className='me-2'></BsStar> {news.rating.number}</p>
                <p className='mb-0'><BsEye className='me-2'></BsEye> {news.total_view}</p>
            </Card.Footer>
        </Card>
    );
};

export default CardSummery;