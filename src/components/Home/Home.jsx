import React from 'react'
import Title from '../commons/Title/Title'
import HomeContent from './HomeContent/HomeContent'
// import img1 from './Home-Images/img1.avif';
// import img2 from './Home-Images/img2.avif'
// import img3 from './Home-Images/img3.avif'
// import img4 from './Home-Images/img4.avif'
// import img5 from './Home-Images/img5.avif';
// import img6 from './Home-Images/img6.avif';
// import img7 from './Home-Images/img7.avif';
import ThirdDiv from './ThirdDiv/ThirdDiv';
import Details from './Details Div/Details';
import TripleImage from './TripleImage/TripleImage'
import Enquire from '../commons/Enquire/Enquire';
const Home = () => {
  return (
    <><div>
      <br></br>
      <Title title="WELCOME" />
      <HomeContent heading="WHO WE ARE" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe." image={"https://images.pexels.com/photos/10475793/pexels-photo-10475793.jpeg?auto=compress&cs=tinysrgb&w=1600"} />
      <hr />
      <br></br>
      <HomeContent style={{ flexDirection: 'row-reverse' }} heading="WHY INVEST IN DIAMONDS" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe." image={"https://images.pexels.com/photos/10475790/pexels-photo-10475790.jpeg?auto=compress&cs=tinysrgb&w=1600"} />
      <hr />
      <br></br>
      <HomeContent heading="LATEST NEWS" content="We export our diamond to around 50 countries including USA, Europe, South Africa, Gulf and Middle-Ease. Our partners and customers are present acroos the globe." image={"https://images.pexels.com/photos/10475791/pexels-photo-10475791.jpeg?auto=compress&cs=tinysrgb&w=1600"} />
      <hr />
      <br></br>
      <ThirdDiv title="UNSURPASSED FINE NATURAL DIAMONDS" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
      <br></br>
      <br></br>
      <br></br>
      <Details title="ALYAZYEH PEARLS OUR GALLERY" content="Discover the state-of-the-art diamond manufacturing processes at Goldiama." image={"https://images.pexels.com/photos/11504787/pexels-photo-11504787.jpeg?auto=compress&cs=tinysrgb&w=1600"} />
      <br></br>
      <ThirdDiv title="INVESTMENT GRADE FANCY DIAMONDS" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
      <br></br>
      <br></br>
      <br></br>
      <Details title="ALYAZYEH PEARLS OUR GALLERY" content="Discover the state-of-the-art diamond manufacturing processes at Goldiama." image={"https://images.pexels.com/photos/15137469/pexels-photo-15137469.jpeg?auto=compress&cs=tinysrgb&w=1600"} />
      <br></br><br></br><br></br>
      <TripleImage image1={"https://images.pexels.com/photos/8398839/pexels-photo-8398839.jpeg?auto=compress&cs=tinysrgb&w=1600"} image2={"https://images.pexels.com/photos/8891959/pexels-photo-8891959.jpeg?auto=compress&cs=tinysrgb&w=1600"} image3={"https://images.pexels.com/photos/3266703/pexels-photo-3266703.jpeg?auto=compress&cs=tinysrgb&w=1600"} />
      <br></br><br></br><br></br>
    </div><Enquire /></>
  )
}

export default Home