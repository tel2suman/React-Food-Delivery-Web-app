
import Layout from "../../components/Layouts/Layout"
import "../../styles/HomeStyle.css"
import Banner from "./Banner"
import About from "./About"
import Menu from "./Menu"
import Promotion from "./Promotion"
import Shop from "./Shop"
import Testimonial from "./Testimonial"
import Contact from "./Contact"




const Home = () => {
  return (
    <>
        <Layout>
          {/* {Home Banner Section} */}
          <Banner/>
          {/* Home About Section */}
          <About/>
          {/* Home Menu Section */}
          <Menu/>
          {/* Home Promotion Section */}
          <Promotion/>
          {/* Home Shop Section */}
          <Shop/>
          {/* Home Testimonial Section */}
          <Testimonial/>
          {/* Home Contact Section */}
          <Contact/>
        </Layout>
    </>
  )
}

export default Home
