import { BrowserRouter as Router } from "react-router-dom";

import About from "./components/About"
import Contact from "./components/Contact"
import Courses from "./components/Courses"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Reviews from "./components/Reviews"

const App = () => {
  return (
    <Router>
    <div>
      <Navbar/>

      <main>
        <div id="home">
          <Home/>
        </div>

        <div id="about">
          <About/>
        </div>

        <div id="courses">
         <Courses/>
        </div>

        <div id="reviews">
          <Reviews/>
        </div>

        <div id="contact">
          <Contact/>
        </div>

      </main>
      <Footer/>
    </div>
    </Router>
  )
}
export default App
