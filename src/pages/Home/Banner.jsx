import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Burger from '../../assets/hero/hero-2.png'
import { Link } from 'react-router'

const Banner = () => {
  return (
    <section className="hero_section position-relative">
        <Container>
            <Row>
                <Col lg={7} xl={7} md={12} xs={12} sm={12} className='mb-lg-0 mb-5'>
                    <div className='position-relative'>
                        <img src={Burger} alt="banner" className='w-100 img-fluid' />
                        <div className='price_badge position-absolute'>
                            <div className='badge_text position-absolute top-50 w-100'>
                                <h4 className='h4_xs text-white'>Only</h4>
                                <h3 className='h3_lg text-white'>$6.99</h3>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={5} xl={5} md={12} xs={12} sm={12} className='mb-lg-0 mb-5'>
                    <div className='hero_text text-center'>
                        <h1 className='text-white'>New Burger</h1>
                        <h2 className='text-white'>With Onion</h2>
                        <p className='text-white pt-2 pb-4 fs-5'>Feugiat primis ligula risus auctor laoreet augue egestas mauris
                            viverra tortor in iaculis pretium at magna mauris ipsum primis
                            rhoncus feugiat
                        </p>
                        <Link className='brn order_now' to='/'>Order Now</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner