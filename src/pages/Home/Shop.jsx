import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router';
import StoreIOS from '../../assets/shop/appstore.png';
import storeGoogle from '../../assets/shop/googleplay.png';
import DownloadImage from '../../assets/shop/e-shop.png'
import Brand1 from '../../assets/brands/brand-11.png';
import Brand2 from '../../assets/brands/brand-12.png';
import Brand3 from '../../assets/brands/brand-13.png';
import Brand4 from '../../assets/brands/brand-14.png';
import Brand5 from '../../assets/brands/brand-15.png';
import Brand6 from '../../assets/brands/brand-16.png';
import Brand7 from '../../assets/brands/brand-17.png';
import Brand8 from '../../assets/brands/brand-18.png';

const Shop = () => {
  return (
    <>
        <section className='shop_section'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6} xl={6} md={6} sm={12} xs={12} className='text-center text-lg-start mb-5 mb-lg-0'>
                        <h4>Download mobile App</h4>
                        <h2>save up to 20%</h2>
                        <p> Aliquam a augue suscipit, luctus neque purus ipsum and neque
                dolor primis libero tempus, blandit varius</p>
                        <Link to='/'>
                            <img src={StoreIOS} className='img-fluid store me-3 my-3' alt='iOS' />
                        </Link>
                        <Link to='/'>
                            <img src={storeGoogle} className='img-fluid store me-3 my-3' alt='Android' />
                        </Link>
                    </Col>
                    <Col  lg={6} xl={6} md={6} sm={12} xs={12}>
                        <div className='text-center'>
                            <img src={DownloadImage} alt="e-Shop" className='img-fluid' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='brand_section'>
            <Container>
                <Row>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                        <Carousel.Caption>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='brand_image'>
                                    <img src={Brand1} alt="brand-1" className='img-fluid' />
                                </div>
                                <div className='brand_image'>
                                    <img src={Brand2} alt="brand-2" className='img-fluid' />
                                </div>
                                 <div className='brand_image'>
                                    <img src={Brand3} alt="brand-3" className='img-fluid' />
                                </div>
                                 <div className='brand_image'>
                                    <img src={Brand4} alt="brand-4 " className='img-fluid' />
                                </div>
                                <div className='brand_image'>
                                    <img src={Brand5} alt="brand-5" className='img-fluid' />
                                </div>
                                <div className='brand_image'>
                                    <img src={Brand6} alt="brand-6" className='img-fluid' />
                                </div>
                            </div>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='brand_image'>
                                    <img src={Brand3} alt="brand-3" className='img-fluid' />
                                </div>
                                <div className='brand_image'>
                                    <img src={Brand4} alt="brand-4" className='img-fluid' />
                                </div>
                                 <div className='brand_image'>
                                    <img src={Brand5} alt="brand-5" className='img-fluid' />
                                </div>
                                 <div className='brand_image'>
                                    <img src={Brand6} alt="brand-6 " className='img-fluid' />
                                </div>
                                <div className='brand_image'>
                                    <img src={Brand7} alt="brand-7" className='img-fluid' />
                                </div>
                                <div className='brand_image'>
                                    <img src={Brand8} alt="brand-8" className='img-fluid' />
                                </div>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Shop