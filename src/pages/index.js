import React, {useState} from 'react'
import Footer from '../LandingPage/components/Footer';
import Hero from '../LandingPage/components/Hero'
import Info from '../LandingPage/components/Info'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from '../LandingPage/components/Info/Data';
import Navbar from '../LandingPage/components/Navbar'
import ServicesLandingPage from '../LandingPage/components/Services';
import Sidebar from '../LandingPage/components/SideBar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <Info {...homeObjOne}/>
      <Info {...homeObjTwo}/>
      <Info {...homeObjThree}/>
      <Info {...homeObjFour}/>
      <ServicesLandingPage />
      <Footer />
    </>
  )
}

export default Home