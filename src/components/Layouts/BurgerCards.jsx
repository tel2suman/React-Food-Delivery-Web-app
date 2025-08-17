import React from 'react'

import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router'

const BurgerCards = ({image, rating, title, paragraph, price, timing, renderRatingIcons}) => {

  return (
    <Col lg={4} xl={3} xs={12} md={12} sm={12} className='mb-4'>
        <Card className='overflow-hidden rounded-5'>
            <div className='overflow-hidden'> 
                <Card.Img variant="top" src={image} />
            </div>
            <Card.Body className='bg-body-secondary'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='item_rating'>{renderRatingIcons(rating)}</div>
                    <div className='wishlist'>
                        <i className="bi bi-heart-fill"></i>
                        
                    </div>
                </div>

                <div className='d-flex justify-content-between align-items-center my-2'>
                    <Card.Title>{title}</Card.Title>
                     <h6 className='fw-bold'><i className="bi bi-alarm"></i> {timing}</h6>
                </div>

                <Card.Text>{paragraph}</Card.Text>
                <div className='d-flex justify-content-between align-items-center my-3'>
                    <div className='menu_price'>
                        <h5 className='mb-0'>${price}</h5>
                    </div>
                    <div className='add_to_cart'>
                        <Link to="/"><i className="bi bi-bag me-2"></i>Add to Cart</Link>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default BurgerCards
