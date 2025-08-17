import React, {useState , useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../../assets/logo/logo.png';
import { Link } from 'react-router';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  const [isVisible, setIsVisible] = useState(false);

  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

  }

  const listenToScroll = () => {

    let heightToHidden = 250;

    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
  })

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} xl={3} lg={3} md={12} xs={12} className='mb-lg-0 mb-4'>
              <div className='text-center'>
                  <Link>
                    <img src={Logo} alt="Logo" className='img-fluid mb-4 logo w-auto' />
                  </Link>
                <h5 className='mb-4'>Location</h5>
                <p>5505 Waterford District Dr, Miami, FL 33126 United States</p>
              </div>
            </Col>
            <Col sm={6} xl={3} lg={3} md={12} xs={12} className='mb-lg-0 mb-4'>
              <div className='text-center'>
                <h4 className='mb-4'>Working Hours</h4>
                <p>Mon-Fri: 9:00AM - 10:00PM</p>
                <p>Saturday: 10:00AM - 8:30PM</p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>
            <Col sm={6} xl={3} lg={3} md={12} xs={12} className='mb-lg-0 mb-4'>
              <div className='text-center'>
                <h4 className='mb-4'>Order Now</h4>
                <p>Quaerat neque purus ipsum</p>
                <p><Link to='tel:+999-888-7777' className='calling'>999-888-7777</Link></p>
              </div>
            </Col>
            <Col sm={6} xl={3} lg={3} md={12} xs={12} className='mb-lg-0 mb-4'>
              <div className='text-center'>
                <h4 className='mb-4'>Follow Us</h4>
                <p>Quaerat neque purus ipsum</p>
                <ul className='list-unstyled text-center mt-2 social-icons'>
                  <li><Link to='/'><i className='bi bi-facebook'></i></Link></li>
                  <li><Link to='/'><i className='bi bi-twitter-x'></i></Link></li>
                  <li><Link to='/'><i className='bi bi-instagram'></i></Link></li>
                  <li><Link to='/'><i className='bi bi-youtube'></i></Link></li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className='copy_right'>
            <Col>
              <div>
                <ul className='list-unstyled text-center mb-0'>
                  <li><Link to='/'>© {currentYear} <span>TASTY BURGER</span>. All Rights Reserved</Link></li>
                  <li><Link to='/'>About Us</Link></li>
                  <li><Link to='/'>Terms Of Use</Link></li>
                  <li><Link to='/'>Privacy Policy</Link></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Scroll to Top Button */}
    {isVisible && (
      <div className="scroll_top" onClick={scrollTop}>
          <i className="bi bi-chevron-double-up"></i>
      </div>
    )}
    </>
  )
}

export default Footer