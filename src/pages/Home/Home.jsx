
import Layout from "../../components/Layouts/Layout"
import "../../styles/HomeStyle.css"
import Banner from "./Banner"
import About from "./About"
import Menu from "./Menu"
import Promotion from "./Promotion"




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
        </Layout>
    </>
  )
}

export default Home
