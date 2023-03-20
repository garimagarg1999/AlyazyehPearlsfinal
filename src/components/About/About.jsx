import React from 'react'
import HomeContent from '../Home/HomeContent/HomeContent'
import Title from "../commons/Title/Title";
import './About.css'
import AboutIcons from './AboutIcons'
import Enquire from '../commons/Enquire/Enquire';

const About = () => {
  return (
    <div >
      <br></br><Title title="About Us"/>
      <div className='container about-main-container'>
        <br></br><HomeContent className="about-home-bg" image={"https://images.pexels.com/photos/7414211/pexels-photo-7414211.jpeg?auto=compress&cs=tinysrgb&w=1600"} heading="OUR VISION" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe."/>
        <br></br><HomeContent className="about-home-bg" image={"https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600"} heading="OUR MISSION" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe."/>
        <br></br><HomeContent className="about-home-bg" image={"https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600"} heading="OUR PHILOSOPHY" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe."/>
       
      </div>
      <br></br><br></br><Title title="Our Values"/>
      <br></br><AboutIcons/><br></br>
      <br></br><br></br><Enquire/><br></br><br></br>

    </div>
  )
}

export default About