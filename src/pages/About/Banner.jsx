import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
    
const Banner = () => {
  return (
    <>
        <section className="header-banner">
            <Container>
                <Row>
                    <Col lg={8} xl={8} md={8} sm={12} xs={12} className="text-center mx-auto">
                        <div className="hero_text text-center mt-5 pt-5">
                        <h1 className="text-white">About Us</h1>
                        <p className="text-white pt-2 pb-4 fs-5">Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Banner