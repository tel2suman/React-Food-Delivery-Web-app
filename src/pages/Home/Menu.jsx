import React from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap'
import Image1 from '../../assets/menu/burger-11.jpg'
import Image2 from '../../assets/menu/burger-12.jpg'
import Image3 from '../../assets/menu/burger-13.jpg'
import Image4 from '../../assets/menu/burger-14.jpg'
import Image5 from '../../assets/menu/burger-15.jpg'
import Image6 from '../../assets/menu/burger-16.jpg'
import Image7 from '../../assets/menu/burger-17.jpg'
import Image8 from '../../assets/menu/burger-18.jpg'
import { Link } from 'react-router'
import BurgerCards from '../../components/Layouts/BurgerCards'


// Mock Data Cards
const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Crispy Chicken",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    timing: "15-20 min",
    price: 99.15,
  },

  {
    id: "0002",
    image: Image2,
    title: "Ultimate Bacon",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    timing: "30-40 min",
    price: 99.32,
  },

  {
    id: "0003",
    image: Image3,
    title: "Black Sheep",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 4,
    timing: "20-30 min",
    price: 69.15,
  },

  {
    id: "0004",
    image: Image4,
    title: "Vegan Burger",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    timing: "30-40 min",
    price: 99.25,
  },

  {
    id: "0005",
    image: Image5,
    title: "Double Burger",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3.0,
    timing: "30-40 min",
    price: 59.25,
  },

  {
    id: "0006",
    image: Image6,
    title: "Turkey Burger",
    paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 3,
    timing: "30-40 min",
    price: 79.18,
  },

  {
    id: "0007",
    image: Image7,
    title: "Smokey House",
    paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    timing: "30-40 min",
    price: 99.19,
  },

  {
    id: "0008",
    image: Image8,
    title: "Classic Burger",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 2.0,
    timing: "30-40 min",
    price: 89.12,
  },
  // Add more mock data objects as needed
];

//Rating Logical Data

const renderRatingIcons = (rating) => {

  const starts = [];

  for (let i = 0; i < 5; i++) {
    if (rating >0.5){
      starts.push (<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    }

    else if (rating > 0 && rating < 1){
        starts.push (<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    }
    else {
      starts.push (<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return starts;
}

const Menu = () => {
  return (

    <section className='menu_section'>
        <Container>
          <Row>
            <Col xl={{span:8, offset:2}} className='text-center mb-5'>
              <h2>Our Crazy Burgeres Menu</h2>
              <p className='para'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit at magna eu dignissim. Proin porta felis vel feugiat interdum.
              </p>
            </Col>
          </Row>
          <Form>
            <Row className='mb-5 justify-content-end'>
              <Col lg={3} md={3} sm={12} xs={12} className='px-0'>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col lg={1} md={1} sm={12} xs={12}>
              <Link to="/" className='btn btn_red w-100 rounded-5 py-2 px-4'>Search</Link>
              </Col>
            </Row>
          </Form>
          <Row>
              {mockData.map((cardData, index )=>(
                <BurgerCards
                  key={index}
                  image={cardData.image}
                  title={cardData.title}
                  paragraph={cardData.paragraph}
                  rating={cardData.rating}
                  price={cardData.price}
                  timing={cardData.timing}
                  renderRatingIcons ={renderRatingIcons}
                />
              ))}
          </Row>
          <Row className='pt-5'>
              <Col sm={6} md={6} lg={5} xl={5}>
                <div className='ads_box ads_img1 mb-5 md-md-0'>
                    <h4 className='mb-0'>GET YOUR FREE</h4>
                    <h5>CHEESE FRIES</h5>
                    <Link to={"/"} className='btn btn_red px-4 rounded-5'>Learn More</Link>
                </div>
              </Col>
              <Col sm={6} md={6} lg={7} xl={7}>
                <div className='ads_box ads_img2 mb-5 md-md-0'>
                    <h4 className='mb-0'>GET YOUR FREE</h4>
                    <h5>CHEESE FRIES</h5>
                    <Link to={"/"} className='btn btn_red px-4 rounded-5'>Learn More</Link>
                </div>
              </Col>
          </Row>
        </Container>
    </section>
  )
}

export default Menu

