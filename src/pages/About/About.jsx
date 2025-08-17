import React from 'react'
import Layout from "../../components/Layouts/Layout"
import "../../styles/HomeStyle.css"
import "../../styles/AboutStyle.css"
import Banner from "../About/Banner"
import Promotion from "../About/Promotion"
import Contact from "../About/Contact"
import Shop from '../About/Shop'


const About = () => {

  return (
    <>
        <Layout>
            {/* Banner Section */}
            <Banner/>
            {/* Shop Section */}
            <Shop/>
            {/* Promotion Section */}
            <Promotion/>
            {/* Contact Section */}
            <Contact/>
        </Layout>
    </>
  )
}

export default About